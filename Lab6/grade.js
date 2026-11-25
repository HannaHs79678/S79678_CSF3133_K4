// 1. Check Mark Function
function checkMark() {

    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Error 3 (grade.js, Line 5): Used assignment operator (=) instead of comparison operator (===).
    if (name.trim() === "") {
        alert("Name must be filled out.");
        return false;
    }

    if (mark.trim() === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Error 4 (grade.js, Line 9): isNan() has incorrect capitalization. Correct function is isNaN().
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Error 5 (grade.js, Line 14): Used && instead of || to check the mark range.
    mark = Number(mark);
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;
    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Error 6 (grade.js, Line 28): getElementByID() has incorrect capitalization. Correct method is getElementById()
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Error 7 (grade.js, Line 30): colour is incorrect. Correct property is color.
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";
    } else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();
    return false;
}


// 2. Show Grade Table Function
function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table>";

    tableHTML += "<tr>";
    tableHTML += "<th>Grade</th>";
    tableHTML += "<th>Mark Range</th>";
    tableHTML += "</tr>";

    // Error 8 (grade.js, Line 38): Loop starts at 1 and skips the first grade. Correct starting index is 0.
    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + grades[i] + "</td>";
        tableHTML += "<td>" + ranges[i] + "</td>";
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    // Error 9 (grade.js, Line 42): innerHtml has incorrect capitalization. Correct property is innerHTML.
    document.getElementById("tableContainer").innerHTML = tableHTML;
}

// 3. Random Mark Function
function randomMark() {
    let random = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = random;
}
