function generateProfile() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const location = document.getElementById("location").value.trim();

  const profile = `${name} is a ${age}-year-old ${profession} based in ${location}.`;

  document.getElementById("profileOutput").textContent = profile;
}
function clearProfile() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("location").value = "";
  document.getElementById("profileOutput").textContent = "";
  document.getElementById("name").focus();
}
clearProfile(); // Clear the profile on initial load
document
  .getElementById("generateButton")
  .addEventListener("click", generateProfile);
document.getElementById("clearButton").addEventListener("click", clearProfile);

document.getElementById("year").textContent = new Date().getFullYear();
