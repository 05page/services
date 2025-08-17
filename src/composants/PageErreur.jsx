import React from 'react'
import { useRouteError } from 'react-router'

export default function PageErreur() {
    const erreur = useRouteError()
  return (
    <div>
     <h1>Il y a une Erreur</h1>
     <p>
        <i>{erreur.satutsText || erreur.message} </i>
     </p>
    </div>
  )
}
