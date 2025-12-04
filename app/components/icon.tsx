import React from "react";

export default function AppIcon({icon}: { icon: string }) {
    const styles = {
        centerScreen: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f0f0f0",
        },
        bigIcon: {
            width: "350px",
            height: "350px",
            background: "linear-gradient(135deg, #ff7a7a, #ff3d3d)",
            borderRadius: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        },
        emoji: {
            fontSize: "170px",
        },
    };

    return (
        <div style={styles.centerScreen}>
            <div style={styles.bigIcon}>
                <span style={styles.emoji}>{icon}</span>
            </div>
        </div>
    );
}
