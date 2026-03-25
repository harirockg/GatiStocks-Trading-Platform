import React from "react";

import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import ContactForm from "./ContactForm"; // 🔥 NEW

function SupportPage() {
  return (
    <>
      {/* NEW CONTACT FORM TOP */}
      <ContactForm />

      {/* EXISTING */}
      <Hero />
      <CreateTicket />
    </>
  );
}

export default SupportPage;