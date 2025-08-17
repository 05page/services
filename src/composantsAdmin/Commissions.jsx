import React, { useState } from "react";
import "../css/commissions.css";

const initialCommissions = [
  {
    id: 1,
    payeur: "Marie Dubois",
    type: "Externe",
    clients: 12,
    taux: 5.5,
    ca: 28450,
    commissionDue: 890,
    commissionPayee: 2340
  },
  {
    id: 2,
    payeur: "Jean Martin",
    type: "Employé",
    clients: 8,
    taux: 3,
    ca: 18790,
    commissionDue: 420,
    commissionPayee: 1890
  },
  {
    id: 3,
    payeur: "Sophie Leroy",
    type: "Externe",
    clients: 15,
    taux: 6,
    ca: 35200,
    commissionDue: 1240,
    commissionPayee: 3120
  },
  {
    id: 4,
    payeur: "Pierre Moreau",
    type: "Externe",
    clients: 5,
    taux: 4.5,
    ca: 12980,
    commissionDue: 0,
    commissionPayee: 980
  }
];

export default function Commissions() {
  const [commissions, setCommissions] = useState(initialCommissions);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommissions = commissions.filter(c =>
    c.payeur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="commissions-container">
      <h2>Intermédiaires - Commissions</h2>
      <p>Gérez vos intermédiaires et leurs commissions</p>

      <div className="commissions-stats">
        <div className="stat-card"><h3>Total Intermédiaires</h3><p>{commissions.length}</p></div>
        <div className="stat-card"><h3>Commissions payées</h3><p>{commissions.reduce((acc,c)=>acc+c.commissionPayee,0)} €</p></div>
        <div className="stat-card"><h3>Commissions dues</h3><p>{commissions.reduce((acc,c)=>acc+c.commissionDue,0)} €</p></div>
        <div className="stat-card"><h3>Taux moyen</h3><p>{(commissions.reduce((acc,c)=>acc+c.taux,0)/commissions.length).toFixed(2)}%</p></div>
      </div>

      <div className="commissions-controls">
        <input
          type="text"
          placeholder="Rechercher un intermédiaire..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>

      <table className="commissions-table">
        <thead>
          <tr>
            <th>Payeur</th>
            <th>Type</th>
            <th>Clients</th>
            <th>Taux (%)</th>
            <th>CA généré (€)</th>
            <th>Commission due (€)</th>
            <th>Commission payée (€)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCommissions.map(c => (
            <tr key={c.id}>
              <td>{c.payeur}</td>
              <td>{c.type}</td>
              <td>{c.clients}</td>
              <td>{c.taux}</td>
              <td>{c.ca.toLocaleString()}</td>
              <td>{c.commissionDue.toLocaleString()}</td>
              <td>{c.commissionPayee.toLocaleString()}</td>
              <td>
                <button>Modifier taux</button>
                <button>Historique</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
