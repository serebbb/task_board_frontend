import { useState } from "react";
import { Button as BootstrapButton } from "react-bootstrap";

export default function Button({ children, isActive, onClick }) {
  return (
    <BootstrapButton variant="primary" onClick={onClick}>
      {isActive === 1 && "✔"} {children}
    </BootstrapButton>
  );
}
