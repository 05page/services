import React, { useState } from "react";
import "../css/fournisseurs.css";

const initialFournisseurs = [
  {
    id: 1,
    nom: "TechServices Pro",
    adresse: "15 rue de la Tech, 75001 Paris",
    email: "contact@techservices.com",
    tel: "+33 1 23 45 67 89",
    type: "Services Informatiques",
    statut: "actif",
    commandes: 25,
    montant: 45000
  },
  {
    id: 2,
    nom: "Marketing Solutions",
    adresse: "8 avenue Marketing, 69000 Lyon",
    email: "info@marketingsol.com",
    tel: "+33 1 98 76 54 32",
    type: "Marketing Digital",
    statut: "actif",
    commandes: 18,
    montant: 32000
  },
  {
    id: 3,
    nom: "Design Studio",
    adresse: "22 boulevard Design, 13000 Marseille",
    email: "hello@designstudio.com",
    tel: "+33 4 56 78 90 12",
    type: "Design Graphique",
    statut: "inactif",
    commandes: 12,
    montant: 18000
  }
];

export default function Fournisseurs() {
  const [fournisseurs, setFournisseurs] = useState(initialFournisseurs);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [newFournisseur, setNewFournisseur] = useState({
    nom: "",
    email: "",
    tel: "",
    type: "",
    adresse: ""
  });

  const handleAddFournisseur = () => {
    setFournisseurs([
      ...fournisseurs,
      { id: fournisseurs.length + 1, ...newFournisseur, statut: "actif", commandes: 0, montant: 0 }
    ]);
    setPopupOpen(false);
    setNewFournisseur({ nom: "", email: "", tel: "", type: "", adresse: "" });
  };

  const filteredFournisseurs = fournisseurs.filter(f =>
    f.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fournisseurs-container">
      <h2>Fournisseurs</h2>
      <p>Gérez vos fournisseurs de services</p>

      <div className="fournisseurs-stats">
        <div className="stat-card">
          <h3>Total Fournisseurs</h3>
          <p>{fournisseurs.length}</p>
        </div>
        <div className="stat-card">
          <h3>Fournisseurs Actifs</h3>
          <p>{fournisseurs.filter(f => f.statut === "actif").length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Achats</h3>
          <p>{fournisseurs.reduce((acc,f)=>acc+f.montant,0)} €</p>
        </div>
        <div className="stat-card">
          <h3>Commandes ce mois</h3>
          <p>{fournisseurs.reduce((acc,f)=>acc+f.commandes,0)}</p>
        </div>
      </div>

      <div className="fournisseurs-controls">
        <input
          type="text"
          placeholder="Rechercher par nom, email ou type de service..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button onClick={()=>setPopupOpen(true)}>Nouveau Fournisseur</button>
      </div>

      <table className="fournisseurs-table">
        <thead>
          <tr>
            <th>Fournisseur</th>
            <th>Contact</th>
            <th>Type de services</th>
            <th>Statut</th>
            <th>Commandes</th>
            <th>Montant total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFournisseurs.map((f,index)=>(
            <tr key={index}>
              <td>{f.nom} <br/> {f.adresse}</td>
              <td>{f.email} <br/> {f.tel}</td>
              <td>{f.type}</td>
              <td>{f.statut}</td>
              <td>{f.commandes}</td>
              <td>{f.montant} €</td>
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
            <h3>Ajouter un nouveau fournisseur</h3>
            <input type="text" placeholder="Nom de l'entreprise" value={newFournisseur.nom} onChange={(e)=>setNewFournisseur({...newFournisseur, nom:e.target.value})} />
            <input type="email" placeholder="Email" value={newFournisseur.email} onChange={(e)=>setNewFournisseur({...newFournisseur, email:e.target.value})} />
            <input type="tel" placeholder="Téléphone" value={newFournisseur.tel} onChange={(e)=>setNewFournisseur({...newFournisseur, tel:e.target.value})} />
            <input type="text" placeholder="Type de services" value={newFournisseur.type} onChange={(e)=>setNewFournisseur({...newFournisseur, type:e.target.value})} />
            <input type="text" placeholder="Adresse" value={newFournisseur.adresse} onChange={(e)=>setNewFournisseur({...newFournisseur, adresse:e.target.value})} />

            <div className="popup-actions">
              <button onClick={()=>setPopupOpen(false)}>Annuler</button>
              <button onClick={handleAddFournisseur}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
