import React, { useState, useEffect } from "react";
import "./Courses.css"; // We'll create this CSS file
import MyButton from "../../../public/Button/MyButton";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://13.203.101.114/moodle/webservice/rest/server.php?wstoken=f7c1ad560d096ecfe4b794193f82df83&wsfunction=core_course_get_courses&moodlewsrestformat=json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="loading">Loading courses...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="courses-container">
      
      <h1 style={{ marginTop: '3rem' }}>Available Courses</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.fullname}</h2>
            <p className="course-shortname">Code: {course.shortname}</p>
            <p className="course-id">Course ID: {course.id}</p>
            <p className="course-category">Category ID: {course.categoryid}</p>
            {course.startdate && (
              <p className="course-date">
                Start Date:{" "}
                {new Date(course.startdate * 1000).toLocaleDateString()}
              </p>
            )}
            {/* Login Button inside each course card */}
            <MyButton
              onClick={() => {
                window.location.href =
                  "http://13.203.101.114/moodle/login/index.php";
              }}
            >
              Course
            </MyButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
