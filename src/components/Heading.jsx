import React from "react";
import SectionTitle from "./SectionTitle";

const styles = {
  heading: {
    padding: "80px 0",
    color: "#fff",
    textAlign: "center",
  },
  darkHeading: {
    padding: "80px 0",
    color: "#000",
    textAlign: "center",
  },
  text: {
    fontSize: "20px",
  },
};

export default function Heading({ title, type, children }) {
  return (
    <div style={type === "dark" ? styles.darkHeading : styles.heading}>
      <SectionTitle>{title}</SectionTitle>
      <p style={styles.text}>{children}</p>
    </div>
  );
}
