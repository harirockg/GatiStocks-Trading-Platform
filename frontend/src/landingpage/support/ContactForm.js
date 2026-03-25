import React, { useState } from "react";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mqegzwwn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      setStatus("❌ Something went wrong!");
    }
  };

  return (
    <div style={{
      background: "#f8f9fa",
      padding: "40px 20px"
    }}>
      <div style={{
        maxWidth: "700px",
        margin: "auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Contact Support
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            style={inputStyle}
          />

          <input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e)=>setFormData({...formData,subject:e.target.value})}
            style={inputStyle}
          />

          <textarea
            placeholder="Enter your message"
            rows="5"
            value={formData.message}
            onChange={(e)=>setFormData({...formData,message:e.target.value})}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Send Message 🚀
          </button>

        </form>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          {status}
        </p>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#0dbdfd",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

export default ContactForm;