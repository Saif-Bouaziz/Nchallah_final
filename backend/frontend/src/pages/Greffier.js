import React from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css";

const Greffier = () => {
    return (
        <div>
            
            <div className='page'>

            <header id="header">
    <nav>
        <div class="container">
            <div class="text-center">
                <a href="/" class="nav-brand text-dark">Liste des greffiés</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddTimbre" class="border-shadow">
                   <span class="text-gradient">Ajouter Greffié </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           

                 <th>Nom</th>
                 <th>Date de naissance</th>
                 <th>Adresse</th>
                 <th>Etat civile</th>
                 <th>Nombre enfants</th>
                 <th>Type payement</th>
                 <th>Base</th>
                 <th>CIN</th>
                 <th>Tel</th>
                 <th>Catégorie</th>
                 <th>Echelon</th>
                 <th>CNSS</th>
                 <th>Contrat</th>
                 <th>Sexe</th>
                 <th>Modalité</th>
                 <th>Actif</th>
                 <th>Action</th>
                          
                       </tr>
                   </thead>
            <tbody>  
               
            </tbody>
               </table>
           </form>
       </div>
   </main>
            </div>
        </div>
    );
};

export default Greffier;