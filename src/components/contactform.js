import React from "react";

export default function TestForm() {
  return (
    <form
      id="formulario"
      name="formulario" // Asegúrate que coincide con el nombre esperado
      method="post"
      data-netlify="true"
    >
      {/* Campo oculto obligatorio */}
      <input type="hidden" name="form-name" value="formulario" />

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4" required></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Send
      </button>
    </form>
  );
}
