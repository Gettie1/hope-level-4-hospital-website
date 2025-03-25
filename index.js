document.addEventListener("DOMContentLoaded", () => {
  const patientForm = document.getElementById("patient-form");
  const appointmentForm = document.getElementById("appointment-form");
  const patientList = document.getElementById("patient-list");
  const appointmentList = document.getElementById("appointment-list");

  patientForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let disease = document.getElementById("disease").value;

    let listItem = document.createElement("li");
    listItem.textContent = `Name: ${name}, Age: ${age}, Disease: ${disease}`;
    patientList.appendChild(listItem);

    patientForm.reset();
  });

  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let patient = document.getElementById("patient").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;

    let listItem = document.createElement("li");
    listItem.textContent = `Patient: ${patient}, Doctor: ${doctor}, Date: ${date}`;
    appointmentList.appendChild(listItem);

    appointmentForm.reset();
  });
});
