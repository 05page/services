import React, { useState } from "react";
import "../css/ventes.css";

const ventesData = [
  {
    id: "V001",
    date: "15/01/2024",
    client: "ABC Entreprise",
    statut: "Payé",
    articles: [
      { nom: "Service Web Pro", quantite: 2, prix: 1200 },
      { nom: "Entretien", quantite: 1, prix: 250 }
    ],
    intermediaire: "Marie Dubois",
    commission: 145.75,
    total: 2650
  },
  {
    id: "V002",
    date: "16/01/2024",
    client: "Solutions technologiques",
    statut: "En attente",
    articles: [
      { nom: "Formation équipe", quantite: 1, prix: 1890 }
    ],
    intermediaire: "Jean Martin",
    commission: 56.7,
    total: 1890
  },
  {
    id: "V003",
    date: "17/01/2024",
    client: "Société mondiale",
    statut: "Payé",
    articles: [
      { nom: "Audit de sécurité", quantite: 1, prix: 3200 },
      { nom: "Rapport détaillé", quantite: 1, prix: 800 }
    ],
    intermediaire: "-",
    commission: 0,
    total: 4000
  },
  {
    id: "V004",
    date: "18/01/2024",
    client: "Start-up XYZ",
    statut: "Facturé",
    articles: [
      { nom: "Consultation", quantite: 2, prix: 450 }
    ],
    intermediaire: "Sophie Leroy",
    commission: 54,
    total: 900
  }
];

export default function Ventes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVentes = ventesData.filter(v =>
    v.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.intermediaire.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculs des stats
  const ventesTotales = ventesData.reduce((acc, v) => acc + v.total, 0);
  const commissionsTotales = ventesData.reduce((acc, v) => acc + v.commission, 0);
  const nbCommandes = ventesData.length;
  const panierMoyen = nbCommandes > 0 ? (ventesTotales / nbCommandes).toFixed(2) : 0;

  return (
    <div className="ventes-container">
      <h2>Ventes</h2>
      <p>Gérez vos ventes et facturations</p>

      <div className="ventes-stats">
        <div className="stat-card">
          <h3>Ventes totales</h3>
          <p>{ventesTotales.toLocaleString()} €</p>
          <p>Ce mois</p>
        </div>
        <div className="stat-card">
          <h3>Commissions</h3>
          <p>{commissionsTotales.toLocaleString()} €</p>
          <p>À verser</p>
        </div>
        <div className="stat-card">
          <h3>Nb commandes</h3>
          <p>{nbCommandes}</p>
          <p>Ce mois</p>
        </div>
        <div className="stat-card">
          <h3>Panier moyen</h3>
          <p>{panierMoyen} €</p>
          <p>Moyenne</p>
        </div>
      </div>

      <div className="ventes-controls">
        <input
          type="text"
          placeholder="Rechercher une vente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="ventes-list">
        {filteredVentes.map((v, index) => (
          <div key={index} className="vente-card">
            <h3>{v.id} - {v.client}</h3>
            <p><strong>Date:</strong> {v.date}</p>
            <p><strong>Statut:</strong> {v.statut}</p>
            <p><strong>Articles vendus:</strong></p>
            <ul>
              {v.articles.map((a, i) => (
                <li key={i}>{a.nom} (x {a.quantite}) {a.prix} €</li>
              ))}
            </ul>
            <p><strong>Intermédiaire:</strong> {v.intermediaire}</p>
            <p><strong>Commission:</strong> {v.commission} €</p>
            <p><strong>Total:</strong> {v.total} €</p>
            <div className="vente-actions">
              <button>Modificateur</button>
              <button>Facture PDF</button>
              <button>Dupliquer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
