import { useState } from "react";
import "./FormCheckout.css";

export default function FormCheckout(props) {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });
  function handleSubmit(event) {
    event.preventDefault();
    props.handleCheckout(formData);
  }
  function handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    const newFormData = { ...formData };
    newFormData[inputName] = value;
    setFormData(newFormData);
  }

  function resetForm() {
    setFormData({
      username: "",
      phone: "",
      email: "",
    });
  }

  return (
    <div className="checkout-container">
      <h4 className="checkout-title">Completa tus datos</h4>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label className="form-field">
          Nombre
          <input
            value={formData.username}
            onChange={handleInputChange}
            name="username"
            type="text"
            placeholder="Nombre"
            className="form-input"
            required
          />
        </label>
        <label className="form-field">
          Email
          <input
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="mail@gmail.com"
            className="form-input"
            required
          />
        </label>
        <label className="form-field">
          Telefono
          <input
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            type="tel"
            placeholder="123456789"
            className="form-input"
            required
          />
        </label>
        <button type="submit" className="btn-submit">
          Enviar
        </button>
        <button type="button" onClick={resetForm}>
          Reiniciar Formulario
        </button>
      </form>
    </div>
  );
}
