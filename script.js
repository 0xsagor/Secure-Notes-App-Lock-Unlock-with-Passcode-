const MASTER_CODE = "1234"; // demo passcode
const STORAGE_KEY = "secure_note";

function unlock() {
  const code = document.getElementById("passcode").value;
  if (code !== MASTER_CODE) {
    error.innerText = "Invalid passcode";
    return;
  }

  document.getElementById("lock").style.display = "none";
  document.getElementById("notes").style.display = "block";

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) note.value = atob(saved);
}

function lock() {
  document.getElementById("notes").style.display = "none";
  document.getElementById("lock").style.display = "block";
  document.getElementById("passcode").value = "";
}

function saveNote() {
  const text = document.getElementById("note").value;
  localStorage.setItem(STORAGE_KEY, btoa(text));
  alert("Note saved securely");
}
