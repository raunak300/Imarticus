import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/video.css";
import Nav from "../components/Nav";


const VideoPage = () => {
  const HOST="https://imarticus.onrender.com"
  const [role, setRole] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [overlayText, setOverlayText] = useState(null);
  const [message, setMessage] = useState(null); // success/error messages
  const navigate = useNavigate();

  // Predefined videos
  const videos = [
    { title: "ML Video 1", url: "https://www.youtube.com/embed/i_LwzRVP7bg" },
    { title: "ML Video 2", url: "https://www.youtube.com/embed/6dqAwh2MCg0" },
    { title: "ML Video 3", url: "https://www.youtube.com/embed/i_LwzRVP7bg" },
    { title: "ML Video 4", url: "https://www.youtube.com/embed/6dqAwh2MCg0" },
  ];

  // check auth on mount + fetch docs
  useEffect(() => {
    const checkAuthAndDocs = async () => {
      try {
        const res = await axios.get(`${HOST}/api/auth/check`, {
          withCredentials: true,
        });

        if (res.status !== 200) {
          navigate("/login");
        } else {
          setRole(res.data.user.role);

          // Fetch documents separately
          const docRes = await axios.get(`${HOST}/api/docs/get`, {
            withCredentials: true,
          });
          console.log(docRes)
          setDocuments(docRes.data.documents || []);
        }
      } catch (err) {
        console.error("Auth/docs fetch failed", err);
        navigate("/login");
      }
    };
    checkAuthAndDocs();
  }, [navigate]);

  // handle document summarise
  const handleSummarise = async (docid) => {
    try {
      const res = await axios.get(
        `${HOST}/api/summarise/docs/${docid}`
      );
      setOverlayText(res.data.summary);
    } catch (err) {
      console.error("Error summarising", err);
    }
  };

  // handle document upload (admin)
  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.document?.files[0];
    if (!file) {
      setMessage({ type: "danger", text: "Please select a file first." });
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    try {
      const res = await axios.post(
        `${HOST}/api/docs/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      setDocuments((prev) => [...prev, res.data.document].slice(-5));
      setMessage({ type: "success", text: "Document uploaded successfully!" });
      e.target.reset(); // reset file input
    } catch (err) {
      console.error("Upload failed", err);
      setMessage({ type: "danger", text: "Upload failed. Try again." });
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
      {role === "user" && (
        <div className="student-section">
          <h3 className="section-title">Uploaded Documents</h3>
          {documents.length === 0 ? (
            <p>No documents yet</p>
          ) : (
            documents.map((doc) => (
              <div key={doc._id} className="document-item">
                <a
                  href={`${HOST}${doc.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="document-link"
                >
                  {doc.name}
                </a>
                <button
                  onClick={() => handleSummarise(doc._id)}
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

          {/* Alert message */}
          {message && (
            <div className={`alert alert-${message.type}`} role="alert">
              {message.text}
            </div>
          )}

          {/* Upload form */}
          <form onSubmit={handleUpload} encType="multipart/form-data">
            <input type="file" name="document" className="file-input" />
            <button type="submit" className="btn btn-success mt-2">
              Submit
            </button>
          </form>
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
