import React from "react";

export default function AddNewSectHeading({ heading }) {
  return (
    <p
      style={{
        fontWeight: "700",
        fontSize: "12px",
        lineHeight: " 15px",
        color: " #828FA3",
      }}
    >
      {heading}
    </p>
  );
}
