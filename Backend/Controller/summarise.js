const fs = require("fs");


const path = require("path");
const Document = require("../Model/DocsModel");
const pdfParse = require("pdf-parse");
const { GoogleGenAI }= require ("@google/genai"); // ESM-only

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

 const summariseDocs = async (req, res) => {
  try {
    const docId = req.params.docid;
    const file = await Document.findById(docId);

    if (!file) return res.status(404).json({ message: "No file found in DB" });

    const filePath = path.join(__dirname, "../uploads", path.basename(file.link));
    if (!fs.existsSync(filePath))
      return res.status(404).json({ message: "File missing on server" });

    // ✅ Extract text from PDF
    const dataBuffer = fs.readFileSync(filePath);
    const parsed = await pdfParse(dataBuffer);
    const fileContent = parsed.text;

    if (!fileContent.trim()) {
      return res.status(400).json({ message: "Document has no extractable text" });
    }

    // ✅ Summarize with Gemini (new SDK)
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // latest supported text model
      contents: `Summarize the following document:\n\n${fileContent}`,
    });

    const summary = response.text;
    res.status(200).json({ summary });
  } catch (err) {
    console.error("Error summarizing document:", err);
    res.status(500).json({ message: "Error summarizing document", error: err.message });
  }
};

 module.exports = { summariseDocs };
