import React, { useState } from "react";
import "../css/intermediaires.css";

const intermediairesData = [
  {
    payeur: "Marie Dubois",
    clients: 12,
    taux: 5.5,
    type: "Externe",
    email: "marie.dubois@email.fr",
    tel: "06 12 34 56 78",
    caGenere: "28 450 €",
    commissionDue: "890 €",
    commissionPayee: "2 340 €"
  },
  {
    payeur: "Jean Martin",
    clients: 8,
    taux: 3,
    type: "Employé",
    email: "jean.martin@entreprise.fr",
    tel: "06 98 76 54 32",
    caGenere: "18 790 €",
    commissionDue: "420 €",
    commissionPayee: "1 890 €"
  },
  {
    payeur: "Sophie Leroy",
    clients: 15,
    taux: 6,
    type: "Externe",
    email: "sophie.leroy@gmail.com",
    tel: "06 11 22 33 44",
    caGenere: "35 200 €",
    commissionDue: "1 240 €",
    commissionPayee: "3 120 €"
  },
  {
    payeur: "Pierre Moreau",
    clients: 5,
    taux: 4.5,
    type: "Externe",
    email: "p.moreau@contact.fr",
    tel: "06 55 66 77 88",
    caGenere: "12 980 €",
    commissionDue: "0 €",
    commissionPayee: "980 €"
  }
];

export default function Intermediaires() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = intermediairesData.filter(item =>
    item.payeur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="intermediaires-container">
      <h2>Intermédiaires</h2>
      <p>Gérez vos intermédiaires et leurs commissions</p>

      <div className="intermediaires-stats">
        <div className="stat-card">
          <h3>Cotisations aux commissions</h3>
          <p>2 550 €</p>
          <p>4 intermédiaires</p>
        </div>
        <div className="stat-card">
          <h3>Commissions payées</h3>
          <p>8 330 €</p>
          <p>Ce mois</p>
        </div>
        <div className="stat-card">
          <h3>Taux moyen</h3>
          <p>4,75%</p>
          <p>Commission moyenne</p>
        </div>
      </div>

      <div className="intermediaires-controls">
        <input
          type="text"
          placeholder="Rechercher un intermédiaire..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="intermediaires-list">
        {filteredData.map((item, index) => (
          <div key={index} className="intermediaire-card">
            <h3>{item.payeur}</h3>
            <p><strong>Clients:</strong> {item.clients} • <strong>Taux:</strong> {item.taux} %</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Téléphone:</strong> {item.tel}</p>
            <p><strong>CA généré:</strong> {item.caGenere}</p>
            <p><strong>Commission due:</strong> {item.commissionDue}</p>
            <p><strong>Commissionnaire payé:</strong> {item.commissionPayee}</p>
            <button className="btn-modifier-taux">Modificateur taux</button>
          </div>
        ))}
      </div>
    </div>
  );
}
