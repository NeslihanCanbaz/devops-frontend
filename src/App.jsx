import { useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState(null);
  const [error, setError] = useState(null);

  const fetchBackendInfo = async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://nesli-backend.team-vit-devops.nl/api/info",
      );
      const data = await response.json();
      setBackendData(data);
    } catch (err) {
      setError("Backend'e bağlanılamadı. Backend çalışıyor mu?");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>DevOps Frontend</h1>
      <p>Bu, backend API'sine bağlanan basit bir frontend uygulamasıdır.</p>

      <button onClick={fetchBackendInfo}>Backend Bilgisini Getir</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {backendData && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          <p>
            <strong>Uygulama:</strong> {backendData.application}
          </p>
          <p>
            <strong>Versiyon:</strong> {backendData.version}
          </p>
          <p>
            <strong>Ortam:</strong> {backendData.environment}
          </p>
        </div>
      )}

      <footer style={{ marginTop: "2rem", fontSize: "0.8rem", color: "#888" }}>
        Frontend Versiyon: 1.0.0
      </footer>
    </div>
  );
}

export default App;
