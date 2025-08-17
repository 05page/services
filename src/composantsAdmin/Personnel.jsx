import React, { useState } from "react";
import "../css/personnel.css";

const employeesData = [
  {
    id: "JM",
    prenom: "Jean",
    nom: "Martin",
    date: "15/03/2023",
    email: "jean.martin@entreprise.com",
    tel: "+33 1 23 45 67 89",
    poste: "Commercial Senior",
    departement: "Ventes",
    statut: "actif",
    performance: "15 / 20 ventes",
    objectif: "75%",
    salaire: 3500
  },
  {
    id: "MARYLAND",
    prenom: "Marie",
    nom: "Dubois",
    date: "20/11/2022",
    email: "marie.dubois@entreprise.com",
    tel: "+33 1 98 76 54 32",
    poste: "Responsable Marketing",
    departement: "Commercialisation",
    statut: "actif",
    performance: "22 / 25 ventes",
    objectif: "88%",
    salaire: 4200
  },
  {
    id: "PB",
    prenom: "Pierre",
    nom: "Bernard",
    date: "10/07/2023",
    email: "pierre.bernard@entreprise.com",
    tel: "+33 4 56 78 90 12",
    poste: "Support technique",
    departement: "Technique",
    statut: "congé",
    performance: "8 / 12 ventes",
    objectif: "67%",
    salaire: 2800
  }
];

export default function Personnel() {
  const [employees, setEmployees] = useState(employeesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
    poste: "",
    departement: "",
    salaire: "",
    objectif: ""
  });

  const handleAddEmployee = () => {
    setEmployees([...employees, { id: newEmployee.prenom.slice(0,2).toUpperCase(), ...newEmployee, statut: "actif", performance: "0 / 0 ventes", objectif: "0%" }]);
    setPopupOpen(false);
    setNewEmployee({
      prenom: "",
      nom: "",
      email: "",
      tel: "",
      poste: "",
      departement: "",
      salaire: "",
      objectif: ""
    });
  };

  const filteredEmployees = employees.filter(e =>
    e.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.poste.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="personnel-container">
      <h2>Personnel</h2>
      <p>Gérez votre équipe et leurs performances</p>

      <div className="personnel-stats">
        <div className="stat-card">
          <h3>Total des employés</h3>
          <p>{employees.length}</p>
        </div>
        <div className="stat-card">
          <h3>Employés actifs</h3>
          <p>{employees.filter(e => e.statut === "actif").length}</p>
        </div>
        <div className="stat-card">
          <h3>Salaire moyen</h3>
          <p>{(employees.reduce((acc,e)=>acc+e.salaire,0)/employees.length).toFixed(0)} €</p>
        </div>
        <div className="stat-card">
          <h3>Ventes ce mois</h3>
          <p>{employees.reduce((acc,e)=>acc + parseInt(e.performance.split(" ")[0]),0)}</p>
        </div>
      </div>

      <div className="personnel-controls">
        <input
          type="text"
          placeholder="Rechercher par nom, email ou poste..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button onClick={()=>setPopupOpen(true)}>Nouvel Employé</button>
      </div>

      <table className="personnel-table">
        <thead>
          <tr>
            <th>Employé</th>
            <th>Contact</th>
            <th>Poste</th>
            <th>Statut</th>
            <th>Performance</th>
            <th>Salaire</th>
            <th>Actes</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((e,index)=>(
            <tr key={index}>
              <td>{e.id} {e.prenom} {e.nom}</td>
              <td>{e.email} <br/> {e.tel}</td>
              <td>{e.poste} <br/> {e.departement}</td>
              <td>{e.statut}</td>
              <td>{e.performance} <br/> {e.objectif}</td>
              <td>{e.salaire} €</td>
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
            <h3>Ajouter un nouvel employé</h3>
            <input type="text" placeholder="Prénom" value={newEmployee.prenom} onChange={(e)=>setNewEmployee({...newEmployee, prenom:e.target.value})} />
            <input type="text" placeholder="Nom" value={newEmployee.nom} onChange={(e)=>setNewEmployee({...newEmployee, nom:e.target.value})} />
            <input type="email" placeholder="E-mail" value={newEmployee.email} onChange={(e)=>setNewEmployee({...newEmployee, email:e.target.value})} />
            <input type="tel" placeholder="Téléphone" value={newEmployee.tel} onChange={(e)=>setNewEmployee({...newEmployee, tel:e.target.value})} />
            <input type="text" placeholder="Poste" value={newEmployee.poste} onChange={(e)=>setNewEmployee({...newEmployee, poste:e.target.value})} />
            <input type="text" placeholder="Département" value={newEmployee.departement} onChange={(e)=>setNewEmployee({...newEmployee, departement:e.target.value})} />
            <input type="number" placeholder="Salaire (€)" value={newEmployee.salaire} onChange={(e)=>setNewEmployee({...newEmployee, salaire:e.target.value})} />
            <input type="number" placeholder="Objectif mensuel" value={newEmployee.objectif} onChange={(e)=>setNewEmployee({...newEmployee, objectif:e.target.value})} />

            <div className="popup-actions">
              <button onClick={()=>setPopupOpen(false)}>Annuler</button>
              <button onClick={handleAddEmployee}>Ajouter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
