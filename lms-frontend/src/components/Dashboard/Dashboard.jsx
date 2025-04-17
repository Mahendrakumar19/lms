import React, { useEffect, useState } from "react";
import "./Dashboard.css"; // We'll create this CSS file
import MyButton from "../../../public/Button/MyButton";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch(
          "http://13.203.101.114/moodle/webservice/rest/server.php?wstoken=f7c1ad560d096ecfe4b794193f82df83&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json"
        );

        if (!response.ok) throw new Error("Failed to fetch dashboard");

        const data = await response.json();
        setDashboard(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <div>Loading Dashboard...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <h1>Welcome, {dashboard.fullname}</h1>
      <p>
        <strong>Username:</strong> {dashboard.username}
      </p>
      <p>
        <strong>Site:</strong> {dashboard.sitename}
      </p>
      <p>
        <strong>Max upload file size:</strong>{" "}
        {dashboard.usermaxuploadfilesize / 1048576} MB
      </p>
      <p>
        <strong>Download token:</strong> {dashboard.downloadfiles}
      </p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Dashboard;
