import React from 'react'
import "../css/dabhoard.css";

export default function TableauDB() {
  return (
    <div>
         <div className="dashboard-container">
      <h1>Tableau de bord Administrateur</h1>
      <p className="overview">Vue d'ensemble complète de votre activité commerciale</p>

      <div className="cards-container">

        {/* Revenus totaux */}
        <div className="card">
          <h3>Revenus totaux</h3>
          <p className="value">145 320 €</p>
          <p className="change">+12.5% par rapport au mois dernier</p>
        </div>

        {/* Nombre de clients */}
        <div className="card">
          <h3>Nombre de clients</h3>
          <p className="value">2,847</p>
          <p className="change">+8.2% par rapport au mois dernier</p>
        </div>

        {/* Ventes ce mois */}
        <div className="card">
          <h3>Ventes ce mois</h3>
          <p className="value">1,234</p>
          <p className="change">+15.3% par rapport au mois dernier</p>
        </div>

        {/* Commissions à payer */}
        <div className="card">
          <h3>Commissions à payer</h3>
          <p className="value">8,450 €</p>
          <p>Pour ce mois</p>
        </div>

        {/* Gestion du personnel */}
        <div className="card">
          <h3>Gestion du personnel</h3>
          <p>Employés actifs: 24</p>
          <p>En congé: 3</p>
        </div>

        {/* Intermédiaires */}
        <div className="card">
          <h3>Intermédiaires</h3>
          <p>Intermédiaires actifs: 156</p>
          <p>Commission moyenne: 4.2%</p>
        </div>

        {/* Fournisseurs */}
        <div className="card">
          <h3>Fournisseurs</h3>
          <p>Fournisseurs actifs: 42</p>
          <p>Commandes en cours: 18</p>
        </div>

        {/* Gestion du stock */}
        <div className="card">
          <h3>Gestion du stock</h3>
          <p>Articles en stock: 1,847</p>
          <p>Stock faible: 7</p>
        </div>

        {/* Rapports & Analytics */}
        <div className="card">
          <h3>Rapports & Analytics</h3>
          <p>Rapports générés: 45</p>
          <p>Alertes actives: 2</p>
        </div>

        {/* Finances */}
        <div className="card">
          <h3>Finances</h3>
          <p>Marge brute: 32.5%</p>
          <p>Impayés: 2,340 €</p>
        </div>

      </div>
    </div>
    </div>
  )
}
