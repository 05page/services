import React, { useState } from "react";
import "../css/clients.css";

const clientsData = [
  {
    nom: "ABC Entreprise",
    intermediaire: "Marie Dubois",
    statut: "Actif",
    email: "contact@abc-entreprise.fr",
    tel: "01 23 45 67 89",
    ville: "Paris, France",
    chiffreAffaires: "12,450 €",
    commandes: 8
  },
  {
    nom: "Tech Solutions",
    intermediaire: "Jean Martin",
    statut: "Actif",
    email: "info@techsol.com",
    tel: "01 98 76 54 32",
    ville: "Lyon, France",
    chiffreAffaires: "8,790 €",
    commandes: 5
  },
  {
    nom: "Global Corp",
    intermediaire: "-",
    statut: "Inactif",
    email: "admin@globalcorp.fr",
    tel: "01 11 22 33 44",
    ville: "Marseille, France",
    chiffreAffaires: "15,200 €",
    commandes: 12
  },
  {
    nom: "Start-up XYZ",
    intermediaire: "Sophie Leroy",
    statut: "Actif",
    email: "hello@startupxyz.io",
    tel: "01 55 66 77 88",
    ville: "Toulouse, France",
    chiffreAffaires: "4,980 €",
    commandes: 3
  }
];

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatut, setFilterStatut] = useState("Tous");

  const filteredClients = clientsData.filter(client => {
    const matchesSearch = client.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          client.intermediaire.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatut === "Tous" || client.statut === filterStatut;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="clients-container">
      <h2>Clients</h2>
      <p>Gérez votre portefeuille client</p>

      {/* Recherche et filtres */}
      <div className="clients-controls">
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={filterStatut}
          onChange={(e) => setFilterStatut(e.target.value)}
        >
          <option value="Tous">Tous</option>
          <option value="Actif">Actif</option>
          <option value="Inactif">Inactif</option>
        </select>
      </div>

      {/* Liste des clients */}
      <div className="clients-list">
        {filteredClients.map((client, index) => (
          <div key={index} className="client-card">
            <h3>{client.nom}</h3>
            <p><strong>Intermédiaire:</strong> {client.intermediaire}</p>
            <p><strong>Statut:</strong> {client.statut}</p>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Téléphone:</strong> {client.tel}</p>
            <p><strong>Ville:</strong> {client.ville}</p>
            <p><strong>Chiffre d'affaires:</strong> {client.chiffreAffaires}</p>
            <p><strong>Commandes:</strong> {client.commandes}</p>
            <div className="client-actions">
              <button className="btn-modifier">Modifier</button>
              <button className="btn-historique">Historique</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
