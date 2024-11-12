import React, { useState, useEffect } from "react";
import axios from "axios";

const TestBackend = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use the proxy path here
    axios
      .get("/api/test.php") // Adjust the endpoint accordingly
      .then((response) => {
        setData(response.data); // Set data from the backend
      })
      .catch((err) => {
        setError("Error: " + err.message); // Display error if something goes wrong
      });
  }, []);

  return (
    <div>
      <h1>Backend Test</h1>
      {error && <div>{error}</div>}
      {data ? (
        <div>
          <h2>Data from Backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
          {/* Pretty-print the data */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TestBackend;
