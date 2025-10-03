const fs = require("fs");
const path = require("path");
const multer = require("multer");
const Document = require("../Model/DocsModel"); // import your Mongoose model

const uploadDir = path.join(__dirname, "../uploads");

// Ensure uploads folder exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.pdf`); // rename as timestamp.pdf
  },
});

const upload = multer({ storage });

// Controller: Upload document
const uploadDocument = async (req, res) => {
  if (!req.file) {
    
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    // Save to MongoDB
    const newDoc = await Document.create({
      name: req.file.originalname,
      link: `/uploads/${req.file.filename}`,
    });

    res.status(200).json({
      message: "File uploaded successfully",
      document: newDoc,
    });
  } catch (err) {
    console.error("Error saving document to DB:", err);
    res.status(500).json({ message: "Failed to save document" });
  }
};

// Controller: Get all documents
const getDocuments = async (req, res) => {
  try {
    const docs = await Document.find().sort({ date: -1 }); // latest first
    res.status(200).json({ documents: docs,length:docs.length });
  } catch (err) {
    console.error("Error fetching documents:", err);
    res.status(500).json({ message: "Failed to fetch documents" });
  }
};

module.exports = { upload, uploadDocument, getDocuments };
