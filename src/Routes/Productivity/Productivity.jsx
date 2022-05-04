import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Productivity/Productivity.module.scss";
import { useState } from "react";
import { saveNameToLocalStorage } from "../../Utils/LocalStorage";

export default function Productivity() {
  const [username, setusername] = useState("");
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    saveNameToLocalStorage(username);
    navigate("/welcome");
  }

  return (
    <>
      <div className={styles.productivitycontainer}>
        <form className={styles.formname} onSubmit={handleSubmit}>
          <label>How may I call you?</label>
          <input
            type="text"
            id={styles.inputname}
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            required
          />
        </form>
      </div>
    </>
  );
}
