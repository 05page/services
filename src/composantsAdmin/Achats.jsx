import React, { useState } from "react";
import "../css/achats.css";

const initialAchats = [
  {
    id: 1,
    numero: "ACH-2024-001",
    date: "15/01/2024",
    fournisseur: "TechServices Pro",
    service: "Développement Application Mobile",
    description: "Développement d'une application mobile pour iOS et Android",
    quantite: 1,
    prixUnitaire: 5000,
    total: 5000,
    statut: "Confirmé",
    livraison: "15/02/2024"
  },
  {
    id: 2,
    numero: "ACH-2024-002",
    date: "20/01/2024",
    fournisseur: "Marketing Solutions",
    service: "Campagne Publicitaire Facebook",
    description: "Création et gestion de 3 campagnes publicitaires sur Facebook",
    quantite: 3,
    prixUnitaire: 800,
    total: 2400,
    statut: "Reçu",
    livraison: "25/01/2024"
  },
  {
    id: 3,
    numero: "ACH-2024-003",
    date: "25/01/2024",
    fournisseur: "Design Studio",
    service: "Refonte Logo et Identité Visuelle",
    description: "Refonte complète du logo et création de l'identité visuelle",
    quantite: 1,
    prixUnitaire: 1200,
    total: 1200,
    statut: "En attente",
    livraison: "Non définie"
  }
];

export default function Achats() {
  const [achats, setAchats] = useState(initialAchats);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [newAchat, setNewAchat] = useState({
    fournisseur: "",
    service: "",
    quantite: 1,
    prixUnitaire: 1000,
    livraison: "",
    statut: "",
    description: ""
  });

  const handleAddAchat = () => {
    const total = newAchat.quantite * newAchat.prixUnitaire;
    setAchats([
      ...achats,
      { id: achats.length + 1, numero: `ACH-2024-00${achats.length+1}`, date: new Date().toLocaleDateString(), total, ...newAchat }
    ]);
    setPopupOpen(false);
    setNewAchat({
      fournisseur: "",
      service: "",
      quantite: 1,
      prixUnitaire: 1000,
      livraison: "",
      statut: "",
      description: ""
    });
  };

  const filteredAchats = achats.filter(a =>
    a.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.fournisseur.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="achats-container">
      <h2>Achats</h2>
      <p>Gérez vos commandes et achats de services</p>

      <div className="achats-stats">
        <div className="stat-card">
          <h3>Total Commandes</h3>
          <p>{achats.length}</p>
        </div>
        <div className="stat-card">
          <h3>En Cours</h3>
          <p>{achats.filter(a=>a.statut==="En attente" || a.statut==="Confirmé").length}</p>
        </div>
        <div className="stat-card">
          <h3>Reçus</h3>
          <p>{achats.filter(a=>a.statut==="Reçu").length}</p>
        </div>
        <div className="stat-card">
          <h3>Montant Total</h3>
          <p>{achats.reduce((acc,a)=>acc+a.total,0)} €</p>
        </div>
      </div>

      <div className="achats-controls">
        <input
          type="text"
          placeholder="Rechercher par numéro, fournisseur ou service..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button onClick={()=>setPopupOpen(true)}>Nouvelle Commande</button>
      </div>

      <table className="achats-table">
        <thead>
          <tr>
            <th>Commande</th>
            <th>Fournisseur</th>
            <th>Service</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Total</th>
            <th>Statut</th>
            <th>Livraison</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAchats.map((a,index)=>(
            <tr key={index}>
              <td>{a.numero}<br/>{a.date}</td>
              <td>{a.fournisseur}</td>
              <td>{a.service}<br/>{a.description}</td>
              <td>{a.quantite}</td>
              <td>{a.prixUnitaire} €</td>
              <td>{a.total} €</td>
              <td>{a.statut}</td>
              <td>{a.livraison}</td>
              <td>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Créer une nouvelle commande</h3>
            <input type="text" placeholder="Fournisseur" value={newAchat.fournisseur} onChange={(e)=>setNewAchat({...newAchat,fournisseur:e.target.value})}/>
            <input type="text" placeholder="Service" value={newAchat.service} onChange={(e)=>setNewAchat({...newAchat,service:e.target.value})}/>
            <input type="number" placeholder="Quantité" value={newAchat.quantite} onChange={(e)=>setNewAchat({...newAchat,quantite:parseInt(e.target.value)})}/>
            <input type="number" placeholder="Prix unitaire (€)" value={newAchat.prixUnitaire} onChange={(e)=>setNewAchat({...newAchat,prixUnitaire:parseFloat(e.target.value)})}/>
            <input type="text" placeholder="Date de livraison souhaitée" value={newAchat.livraison} onChange={(e)=>setNewAchat({...newAchat,livraison:e.target.value})}/>
            <input type="text" placeholder="Statut" value={newAchat.statut} onChange={(e)=>setNewAchat({...newAchat,statut:e.target.value})}/>
            <textarea placeholder="Description" value={newAchat.description} onChange={(e)=>setNewAchat({...newAchat,description:e.target.value})}/>

            <div className="popup-actions">
              <button onClick={()=>setPopupOpen(false)}>Annuler</button>
              <button onClick={handleAddAchat}>Créer la commande</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
