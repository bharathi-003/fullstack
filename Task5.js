const courses = [
      { id: 1, name: "Web Development", faculty: "Dr. Smith", seats: 3 },
      { id: 2, name: "Data Structures", faculty: "Dr. Johnson", seats: 2 },
      { id: 3, name: "Database Systems", faculty: "Dr. Lee", seats: 4 }
    ];

    const courseList = document.getElementById("courseList");
    const courseSelect = document.getElementById("courseSelect");

    const renderCourses = () => {
      courseList.innerHTML = "";
      courseSelect.innerHTML = `<option value="">-- Select a course --</option>`;

      courses.forEach(({ id, name, faculty, seats }) => {
        courseList.innerHTML += `
          <article class="course-card">
            <h3>${name}</h3>
            <p><strong>Faculty:</strong> ${faculty}</p>
            <p><strong>Remaining Seats:</strong> ${seats}</p>
          </article>
        `;

        if (seats > 0) {
          courseSelect.innerHTML += `
            <option value="${id}">${name}</option>
          `;
        }
      });
    };

    renderCourses();

    
    document.getElementById("registrationForm").addEventListener("submit", (e) => {
      e.preventDefault();

      
      const name = document.getElementById("studentName").value.trim();
      const email = document.getElementById("email").value.trim();
      const selectedCourseId = courseSelect.value;

      
      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const courseError = document.getElementById("courseError");
      const successMsg = document.getElementById("successMsg");

      
      nameError.textContent = "";
      emailError.textContent = "";
      courseError.textContent = "";
      successMsg.textContent = "";

      let isValid = true;


      if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
      }

      if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
      }

      if (selectedCourseId === "") {
        courseError.textContent = "Please select a course";
        isValid = false;
      }

      if (!isValid) return;

      const selectedCourse = courses.find(
        course => course.id === Number(selectedCourseId)
      );

      if (selectedCourse.seats > 0) {
        selectedCourse.seats--;
        successMsg.textContent = "Registration successful!";
        renderCourses();
        e.target.reset();
        alert("you Registered")
      }
    });