import React, { useState } from "react";
import "../css/parametres.css";

export default function Parametres() {
  const [username, setUsername] = useState("Admin");
  const [email, setEmail] = useState("admin@exemple.com");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("clair");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Ici tu peux ajouter la logique pour sauvegarder les paramètres
    console.log({ username, email, password, theme, notifications });
    alert("Paramètres sauvegardés !");
  };

  const handleReset = () => {
    setUsername("Admin");
    setEmail("admin@exemple.com");
    setPassword("");
    setTheme("clair");
    setNotifications(true);
  };

  return (
    <div className="parametres-container">
      <h2>Paramètres</h2>
      <p>Configurez votre profil et les paramètres de l’application</p>

      <div className="parametres-section">
        
        <label>Nom d’utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Laisser vide pour ne pas changer"
        />
      </div>

      <div className="parametres-section">
        <h3>Préférences de l’application</h3>
        <label>Thème</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="clair">Clair</option>
          <option value="sombre">Sombre</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />{" "}
          Activer les notifications
        </label>
      </div>

      <div className="parametres-buttons">
        <button onClick={handleSave} className="btn-save">Sauvegarder</button>
        <button onClick={handleReset} className="btn-reset">Réinitialiser</button>
      </div>
    </div>
  );
}
