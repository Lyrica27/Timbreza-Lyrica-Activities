async function getData() {
    const response = await fetch('http://localhost/api/student-list.php');
    const data = await response.json();
    console.log(data);
}

async function addStudent() {

    const data = {
        student_id: document.getElementById("student_id").value.trim(),
        first_name: document.getElementById("first_name").value.trim(),
        last_name: document.getElementById("last_name").value.trim(),
        email: document.getElementById("email").value.trim()
    };

    // ✅ Form Validation
    if (!data.student_id || !data.first_name || !data.last_name || !data.email) {
        showAlert("All fields are required!", "danger");
        return;
    }

    try {

        const response = await fetch(
            "http://localhost/api/student-add.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        // ✅ Handle API errors (400 / 409)
        if (!response.ok) {
            throw new Error(result.message);
        }

        showAlert("Student added successfully!", "success");

        getData(); // refresh list

    } catch (error) {
        showAlert(error.message, "danger");
    }
}

async function submitData(username, password) {
    const data = {
        username: username,
        password: password
    };

    const response = await fetch('http://localhost/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const resData = await response.json();

    console.log(resData);

    if (!response.ok) {
        throw new Error(resData.message || 'Login failed');
    }

    return resData;
}