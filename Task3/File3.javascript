// scripts.js
function loadCourse(courseId) {
    const courseContent = document.getElementById('course-content');
    switch(courseId) {
        case 'course1':
            courseContent.innerHTML = `
                <h2>Course 1</h2>
                <p>Welcome to Course 1. This is an introductory course on subject X.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- Add more course content as needed -->
            `;
            break;
        case 'course2':
            courseContent.innerHTML = `
                <h2>Course 2</h2>
                <p>Welcome to Course 2. This course covers the basics of subject Y.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- Add more course content as needed -->
            `;
            break;
        case 'course3':
            courseContent.innerHTML = `
                <h2>Course 3</h2>
                <p>Welcome to Course 3. This course delves into advanced topics of subject Z.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/example3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- Add more course content as needed -->
            `;
            break;
        default:
            courseContent.innerHTML = `
                <h2>Welcome to the E-learning Platform</h2>
                <p>Select a course to get started.</p>
            `;
    }
}
