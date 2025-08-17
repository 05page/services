import React, { useState } from "react";
import "../css/stock.css";

const initialStock = [
  {
    id: 1,
    article: "Licence Office 365 Business",
    reference: "OFF365-BUS-001",
    fournisseur: "Microsoft Partner",
    categorie: "Logiciels",
    stock: 25,
    min: 10,
    max: 50,
    prixAchat: 120,
    prixVente: 180,
    marge: "50%",
    statut: "Disponible"
  },
  {
    id: 2,
    article: "Serveur Cloud VPS",
    reference: "VPS-CLOUD-002",
    fournisseur: "CloudTech Solutions",
    categorie: "Hébergement",
    stock: 5,
    min: 3,
    max: 15,
    prixAchat: 80,
    prixVente: 150,
    marge: "87.5%",
    statut: "Disponible"
  },
  {
    id: 3,
    article: "Certificat SSL Wildcard",
    reference: "SSL-WILD-003",
    fournisseur: "SecureSSL Pro",
    categorie: "Sécurité",
    stock: 0,
    min: 2,
    max: 10,
    prixAchat: 200,
    prixVente: 350,
    marge: "75%",
    statut: "Rupture"
  },
  {
    id: 4,
    article: "Pack Maintenance Site Web",
    reference: "MAINT-WEB-004",
    fournisseur: "WebCare Services",
    categorie: "Services",
    stock: 12,
    min: 5,
    max: 20,
    prixAchat: 300,
    prixVente: 500,
    marge: "66.7%",
    statut: "Disponible"
  }
];

export default function Stock() {
  const [stock, setStock] = useState(initialStock);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    article: "",
    reference: "",
    categorie: "",
    fournisseur: "",
    stock: 10,
    min: 5,
    prixAchat: 100,
    prixVente: 150,
    description: "",
    statut: "Disponible"
  });

  const handleAddArticle = () => {
    const marge = ((newArticle.prixVente - newArticle.prixAchat) / newArticle.prixAchat * 100).toFixed(1) + "%";
    setStock([
      ...stock,
      { id: stock.length + 1, marge, ...newArticle }
    ]);
    setPopupOpen(false);
    setNewArticle({
      article: "",
      reference: "",
      categorie: "",
      fournisseur: "",
      stock: 10,
      min: 5,
      prixAchat: 100,
      prixVente: 150,
      description: "",
      statut: "Disponible"
    });
  };

  const filteredStock = stock.filter(a =>
    a.article.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.fournisseur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="stock-container">
      <h2>Stock</h2>
      <p>Gérez votre inventaire de services et produits</p>

      <div className="stock-stats">
        <div className="stat-card"><h3>Total Articles</h3><p>{stock.length}</p></div>
        <div className="stat-card"><h3>Disponibles</h3><p>{stock.filter(a=>a.statut==="Disponible").length}</p></div>
        <div className="stat-card"><h3>Alertes</h3><p>{stock.filter(a=>a.statut==="Rupture").length}</p></div>
        <div className="stat-card"><h3>Valeur Stock</h3><p>{stock.reduce((acc,a)=>acc + a.prixAchat*a.stock,0)} €</p></div>
      </div>

      <div className="stock-controls">
        <input
          type="text"
          placeholder="Rechercher par nom, référence ou fournisseur..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button onClick={()=>setPopupOpen(true)}>Nouvel Article</button>
      </div>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Référence</th>
            <th>Catégorie</th>
            <th>Fournisseur</th>
            <th>Stock</th>
            <th>Niveau</th>
            <th>Prix d'achat</th>
            <th>Prix de vente</th>
            <th>Marge</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStock.map((a,index)=>(
            <tr key={index}>
              <td>{a.article}</td>
              <td>{a.reference}</td>
              <td>{a.categorie}</td>
              <td>{a.fournisseur}</td>
              <td>{a.stock} unités</td>
              <td>Min: {a.min} | Max: {a.max || "-"}</td>
              <td>{a.prixAchat} €</td>
              <td>{a.prixVente} €</td>
              <td>{a.marge}</td>
              <td>{a.statut}</td>
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
            <h3>Ajouter un nouvel article au stock</h3>
            <input type="text" placeholder="Nom de l'article" value={newArticle.article} onChange={(e)=>setNewArticle({...newArticle,article:e.target.value})}/>
            <input type="text" placeholder="Référence" value={newArticle.reference} onChange={(e)=>setNewArticle({...newArticle,reference:e.target.value})}/>
            <input type="text" placeholder="Catégorie" value={newArticle.categorie} onChange={(e)=>setNewArticle({...newArticle,categorie:e.target.value})}/>
            <input type="text" placeholder="Fournisseur" value={newArticle.fournisseur} onChange={(e)=>setNewArticle({...newArticle,fournisseur:e.target.value})}/>
            <input type="number" placeholder="Quantité initiale" value={newArticle.stock} onChange={(e)=>setNewArticle({...newArticle,stock:parseInt(e.target.value)})}/>
            <input type="number" placeholder="Quantité minimale" value={newArticle.min} onChange={(e)=>setNewArticle({...newArticle,min:parseInt(e.target.value)})}/>
            <input type="number" placeholder="Prix d'achat (€)" value={newArticle.prixAchat} onChange={(e)=>setNewArticle({...newArticle,prixAchat:parseFloat(e.target.value)})}/>
            <input type="number" placeholder="Prix de vente (€)" value={newArticle.prixVente} onChange={(e)=>setNewArticle({...newArticle,prixVente:parseFloat(e.target.value)})}/>
            <textarea placeholder="Description détaillée de l'article" value={newArticle.description} onChange={(e)=>setNewArticle({...newArticle,description:e.target.value})}/>

            <div className="popup-actions">
              <button onClick={()=>setPopupOpen(false)}>Annuler</button>
              <button onClick={handleAddArticle}>Ajouter à l'inventaire</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
