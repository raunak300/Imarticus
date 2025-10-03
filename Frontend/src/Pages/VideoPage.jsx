import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/video.css";
import Nav from "../components/Nav";

const VideoPage = () => {
  const [role, setRole] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [overlayText, setOverlayText] = useState(null);
  const navigate = useNavigate();

  // Predefined videos
  const videos = [
    { title: "ML Video 1", url: "https://www.youtube.com/embed/i_LwzRVP7bg" },
    { title: "ML Video 2", url: "https://www.youtube.com/embed/6dqAwh2MCg0" },
    { title: "ML Video 3", url: "https://www.youtube.com/embed/i_LwzRVP7bg" },
    { title: "ML Video 4", url: "https://www.youtube.com/embed/6dqAwh2MCg0" },
  ];

  // check auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/check", {
          withCredentials: true,
        });
        if (res.status !== 200) {
          navigate("/login");
        } else {
          setRole(res.data.user.role);
          setDocuments(res.data.documents || []);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        navigate("/login");
      }
    };
    checkAuth();
  }, [navigate]);

  // handle document summarise
  const handleSummarise = async (docId) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/docs/summarise/${docId}`
      );
      setOverlayText(res.data.summary);
    } catch (err) {
      console.error("Error summarising", err);
    }
  };

  // handle document upload (admin)
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("document", file);

    try {
      const res = await axios.post("http://localhost:3000/api/docs/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setDocuments([...documents, res.data.document].slice(-5));
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div className="video-page">
        <Nav />
      <h2 className="video-title">Machine Learning Course Videos</h2>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video, idx) => (
          <div key={idx} className="video-card">
            <h4 className="video-name">{video.title}</h4>
            <iframe
              width="100%"
              height="250"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* Role-specific UI */}
      {role === "student" && (
        <div className="student-section">
          <h3 className="section-title">Uploaded Documents</h3>
          {documents.length === 0 ? (
            <p>No documents yet</p>
          ) : (
            documents.map((doc) => (
              <div key={doc.id} className="document-item">
                <a
                  href={`http://localhost:3000/uploads/${doc.filename}`}
                  target="_blank"
                  rel="noreferrer"
                  className="document-link"
                >
                  {doc.originalname}
                </a>
                <button
                  onClick={() => handleSummarise(doc.id)}
                  className="summarise-btn"
                >
                  Summarise
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {role === "admin" && (
        <div className="admin-section">
          <h3 className="section-title">Add Document</h3>
          <input type="file" onChange={handleUpload} className="file-input" />
        </div>
      )}

      {/* Overlay for Summary */}
      {overlayText && (
        <div className="overlay">
          <div className="overlay-content">
            <button onClick={() => setOverlayText(null)} className="close-btn">
              ✕
            </button>
            <h3 className="overlay-title">Summary</h3>
            <p>{overlayText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
