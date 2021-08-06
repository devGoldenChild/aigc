import React from "react";
import AppButton from "./AppButton";

const styles = {
  card: {
    maxWidth: "340px",
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  name: {
    color: "#0078d7",
    lineHeight: "1",
  },
  title: {
    color: "#999",
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  text: {
    marginBottom: "20px",
  },
};

export default function TeamCard({ name, title, img, children }) {
  return (
    <div style={styles.card}>
      <div>
        <img style={styles.image} src={img} alt="" />
      </div>
      <h3 style={styles.name}>{name}</h3>
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.text}>{children}</p>
      <div>
        <AppButton title="make contact" type="primary" size="lg" />
      </div>
    </div>
  );
}
