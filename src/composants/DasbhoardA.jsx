import React, { useState } from 'react'
import "../css/dabhoard.css";
import { Link } from 'react-router-dom'
import TableauDB from '../composantsAdmin/TableauDB';
import Clients from '../composantsAdmin/Clients';
import Intermediaires from '../composantsAdmin/Intermediaires';
import Ventes from '../composantsAdmin/Ventes';
import Personnel from '../composantsAdmin/Personnel';
import Fournisseurs from '../composantsAdmin/Fournisseurs';
import Achats from '../composantsAdmin/Achats';
import Stock from '../composantsAdmin/Stock';
import Commissions from '../composantsAdmin/Commissions';
import Parametres from '../composantsAdmin/Parametres';
export default function DasbhoardA() {
 
    const menuItems = [
    { name: "Tableau de bord", icon: "fa-chart-line" },
    { name: "Clients", icon: "fa-user-friends" },
    { name: "Intermédiaires", icon: "fa-handshake" },
    { name: "Ventes", icon: "fa-cart-shopping" },
    { name: "Personnel", icon: "fa-users" },
    { name: "Fournisseurs", icon: "fa-truck" },
    { name: "Achats", icon: "fa-credit-card" },
    { name: "Stock", icon: "fa-boxes-stacked" },
    { name: "Commission", icon: "fa-money-bill-wave" },
    { name: "Paramètres", icon: "fa-gear" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="dashboard-containerr">
     <div className='nav-menu'>
       <div className='nav-logo'>
        suduisds
      </div>
      <ul className="list-m">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={activeIndex === index ? "focused" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <i className={`fa-solid ${item.icon}`}></i> {item.name}
          </li>
        ))}
      </ul>

     </div>
      <div className="content">
        {activeIndex === 0 && <div>
        <TableauDB/>
    </div>}
        {activeIndex === 1 && <div>
           <Clients/>
          </div>}

        {activeIndex === 2 && <div>
           <Intermediaires/>
          </div>}

        {activeIndex === 3 && <div>
             <Ventes/>
          </div>}

        {activeIndex === 4 && <div>
           <Personnel/>
          </div>}

        {activeIndex === 5 && <div>
          <Fournisseurs/>
          </div>}
        {activeIndex === 6 && <div>
          <Achats/>
          </div>}

        {activeIndex === 7 && <div>
          <Stock/>
          </div>}

        {activeIndex === 8 && <div>
          <Commissions/>
          </div>}

        {activeIndex === 9 && <div>
          <Parametres/>
          </div>}
      </div>
    </div>
  );
}
