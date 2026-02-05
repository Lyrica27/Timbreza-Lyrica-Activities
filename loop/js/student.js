const students = [
  { name: "Ana", scores: [85, 90, 88], present: true },
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Cara", scores: [95, 92, 94], present: true },
  { name: "Daniel", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [88, 85, 90], present: true },
  { name: "Felix", scores: [78, 80, 82], present: false },
  { name: "Grace", scores: [92, 89, 94], present: true },
  { name: "Hannah", scores: [73, 70, 68], present: false },
  { name: "Ivan", scores: [81, 84, 79], present: true },
  { name: "Julia", scores: [96, 98, 97], present: true }
];

const table = document.getElementById("Table");

function computeAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}
function displayStudents(list) {
  table.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let s = list[i];
    let average = computeAverage(s.scores);
    let remarks = average >= 75 ? "Passed" : "Failed";
    let status = s.present ? "Present" : "Absent";

    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.scores[0]}</td>
        <td>${s.scores[1]}</td>
        <td>${s.scores[2]}</td>
        <td>${average.toFixed(2)}</td>
        <td>${remarks}</td>
        <td>${status}</td>
      </tr>
    `;
  }
}
displayStudents(students);

document.getElementById("present").onclick = () => {
  displayStudents(students.filter(s => s.present));
};

document.getElementById("absent").onclick = () => {
  displayStudents(students.filter(s => !s.present));
};

document.getElementById("passed").onclick = () => {
  displayStudents(students.filter(s => computeAverage(s.scores) >= 75));
};

document.getElementById("failed").onclick = () => {
  displayStudents(students.filter(s => computeAverage(s.scores) < 75));
};

document.getElementById("search").onclick = () => {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  displayStudents(
    students.filter(s => s.name.toLowerCase().includes(keyword))
  );
};