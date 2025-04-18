const axios = require('axios');

async function enrollUserInMoodle(userId, courseId) {
    const token = 'YOUR_MOODLE_TOKEN';
    const url = 'http://13.203.101.114/moodle/webservice/rest/server.php';

    const response = await axios.post(url, null, {
        params: {
            wstoken: token,
            wsfunction: 'core_enrol_get_users_courses',
            wsfunction: 'enrol_manual_enrol_users',
            moodlewsrestformat: 'json',
            enrolments: JSON.stringify([{
                roleid: 5, // student
                userid: userId,
                courseid: courseId,
            }])
        }
    });

    return response.data;
}

module.exports = enrollUserInMoodle;
