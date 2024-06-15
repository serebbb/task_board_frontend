import { useState } from "react";
import logo from "/kotik.svg";

export default function MyHeader({ completedTask, allTask }) {
  return (
    <header>
      <img src={logo} alt="" height={65} />

      <h2>ToDo List</h2>
      <p>
        {completedTask}/{allTask} task completed
      </p>
    </header>
  );
}
