import React, { useState, useEffect } from "react";
import "./courses.css";
import MyButton from "../MyButton/MyButton";
import { FiBook, FiHash, FiCalendar, FiAward } from "react-icons/fi";

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

        if (!response.ok) throw new Error("Failed to fetch courses");
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

  const getCourseImage = (course) => {
    if (course.courseimage) return course.courseimage;
    return `https://source.unsplash.com/random/384x192/?course,education&sig=${course.id}`;
  };

  const formatCourseName = (name) => {
    return name.length > 50 ? `${name.substring(0, 50)}...` : name;
  };

  if (loading) return <div className="loading">Loading courses...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1 className="courses-title">
          <FiBook className="title-icon" /> Available Courses
        </h1>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-image-container">
              <img
                src={getCourseImage(course)}
                alt={course.fullname}
                className="course-image"
                onError={(e) => {
                  e.target.src = `https://source.unsplash.com/random/384x192/?pattern,abstract&sig=${course.id}`;
                }}
              />
              <div className="course-id-badge">
                <FiHash /> ID: {course.id}
              </div>
            </div>

            <div className="course-content">
              <h3 className="course-title">
                {formatCourseName(course.fullname)}
              </h3>

              <div className="course-meta">
                <span className="course-code">
                  <FiAward /> {course.shortname}
                </span>
                {course.startdate && (
                  <span className="course-date">
                    <FiCalendar />{" "}
                    {new Date(course.startdate * 1000).toLocaleDateString()}
                  </span>
                )}
              </div>

              <div className="course-footer">
                <MyButton
                  link="http://13.203.101.114/moodle/login/index.php"
                  className="course-button"
                >
                  Enroll Now
                </MyButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
