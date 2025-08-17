import React, { useState } from "react";
import { Link } from 'react-router-dom'

import "./css/login.css";

export default function Login() {
  const [selectedOption, setSelectedOption] = useState("Admin");
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [identifiant, setIdentifiant] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // reset fields si tu veux
    setEmail("");
    setPassword("");
    setIdentifiant("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === "Admin") {
      console.log("Admin - Email:", email, "Mot de passe:", password);
    } else {
      console.log("Employé - Identifiant:", identifiant, "Mot de passe:", password);
    }
  };

  return (
    <div className={`login-containerS ${selectedOption.toLowerCase()}`}>
      <div>

      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h1>Se connecter</h1>
          <p >Sélectionnez votre rôle et Entrez vos identifiants ou votre email</p>
          <h3>{selectedOption}</h3>
        </div>

        <label>Rôle</label>
        <div className="custom-select-container">
          <input
            type="text"
            readOnly
            value={selectedOption}
            onClick={toggleDropdown}
            placeholder="Sélectionner un rôle"
            className="input-field"
          />
          <i className="fa-solid fa-chevron-down dropdown-icon"></i>

          {isOpen && (
            <div className="dropdown">
              <div className="dropdown-item" onClick={() => handleSelect("Admin")}>
                <i class="fa-solid fa-shield-alt icon"></i>
                Admin
              </div>
              <div className="dropdown-item" onClick={() => handleSelect("Employé")}>
                <i class="fa-solid fa-users icon"></i>
                Employé
              </div>
            </div>
          )}
        </div>

        {/* Champs dynamiques selon le rôle */}
        {selectedOption === "Admin" && (
          <>
            <label>Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </>
        )}

        {selectedOption === "Employé" && (
          <>
            <label>Identifiant</label>
            <input
              type="text"
              placeholder="Entrez votre identifiant"
              value={identifiant}
              onChange={(e) => setIdentifiant(e.target.value)}
              required
              className="input-field"
            />
          </>
        )}

        <label>Mot de passe</label>
        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-field"
        />

        <Link to={'/dasbhoard'}><button type="submit" className="btn-nav">
          Connexion
        </button></Link>

       
      </form>
    </div>
  );
}
