// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.submitContactForm = functions.https.onRequest(async (req, res) => {
  // CORS headers for browser calls
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    console.log("Incoming data:", req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const docRef = await db.collection("contactMessages").add({
      name,
      email,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("Saved contact message with id:", docRef.id);

    return res.status(200).json({
      success: true,
      id: docRef.id,
    });
  } catch (err) {
    console.error("Error saving contact message:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});
