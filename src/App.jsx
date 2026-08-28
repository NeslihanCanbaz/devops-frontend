import { useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBackendInfo = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        "https://nesli-backend.team-vit-devops.nl/api/info",
      );
      const data = await response.json();
      setBackendData(data);
    } catch (err) {
      setError("Backend'e bağlanılamadı. Backend çalışıyor mu?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>DevOps Frontend</h1>
        <p className="subtitle">
          This is a simple frontend application connected to the backend API.
          (CI/CD tested successfully ✅)
        </p>

        <button onClick={fetchBackendInfo} disabled={loading}>
          {loading ? "Loading..." : "Backend Bilgisini Getir"}
        </button>

        {error && <p className="error">{error}</p>}

        {backendData && (
          <div className="result">
            <div className="result-row">
              <span className="label">Uygulama</span>
              <span className="value">{backendData.application}</span>
            </div>
            <div className="result-row">
              <span className="label">Versiyon</span>
              <span className="value">{backendData.version}</span>
            </div>
            <div className="result-row">
              <span className="label">Ortam</span>
              <span className="value">{backendData.environment}</span>
            </div>
          </div>
        )}

        <footer>Frontend Versiyon: 1.0.0</footer>
      </div>
    </div>
  );
}

export default App;
