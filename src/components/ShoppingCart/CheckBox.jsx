import { useState } from "react";

export default function CheckBox({ checked, onChange }) {

    const wrapperStyle = {
        position: "relative",
        display: "inline-flex",
        width: "1.25rem",
        height: "1.25rem",
    };

    const checkboxStyle = {
        appearance: "none",
        WebkitAppearance: "none",
        margin: 0,
        boxSizing: "border-box",
        width: "1.25rem",
        height: "1.25rem",
        border: "1.5px solid #1e3a8a",
        borderRadius: "0.375rem",
        background: checked ? "#1e3a8a" : "white",
        cursor: "pointer",
    };

    const checkmarkStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "1.25rem",
        height: "1.25rem",
        display: checked ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "0.8rem",
        fontWeight: "bold",
        pointerEvents: "none",
    };

    return (
        <label style={wrapperStyle} className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} style={checkboxStyle} />
            <span style={checkmarkStyle}>✓</span>
        </label>
    )
}