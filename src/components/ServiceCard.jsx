import React from "react";

const styles = {
  card: {
    color: "#f2f2f2",
    maxWidth: "340px",
    width: "30%",
    padding: "40px",
    borderRadius: "15px",
    margin: "20px",
  },
  icon: {
    fontSize: "30px",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "rgba(0,0,0,0.384)",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    margin: "10px 0",
    fontWeight: "700",
  },
  text: {
    fontSize: "18px",
    textAlign: "center",
  },
};

export default function ServiceCard({ title, Icon, children }) {
  return (
    <div style={styles.card} className="service-card">
      <div style={styles.icon}>
        <Icon />
      </div>
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.text}>{children}</div>
    </div>
  );
}
