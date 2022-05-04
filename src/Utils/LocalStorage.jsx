import React from "react";

function saveNameToLocalStorage(username) {
  localStorage.setItem("username", username);
}

export { saveNameToLocalStorage };
