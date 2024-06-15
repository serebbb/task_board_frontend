import { useState } from "react";
import logo from "/kotik.svg";

export default function MyHeader() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt="" height={65} />
      <h3>React Project</h3>

      <span>Текущее время: {now.toLocaleTimeString()}</span>
    </header>
  );
}
