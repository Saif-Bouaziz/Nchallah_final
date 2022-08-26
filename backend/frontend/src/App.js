
import Home from "./pages/Home";
import "./App.css"
import CreatePost from "./pages/CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Type_dossier from "./pages/Type_dossier";
import Parametres_globales from "./pages/Parametres_globales";
import Honoraires_extra from "./pages/Honoraires_extra";
import Emplacement_dossier from "./pages/Emplacement_dossier";
import Tribu_et_admin from "./pages/Tribu_et_admin";
import Utilisateur from "./pages/Utilisateur";
import Huissier from "./pages/Huissier";
import Collaborateur from "./pages/Collaborateur";
import Greffier from "./pages/Greffier";
import Prime_greffier from "./pages/Prime_greffier";
import Timbre from "./pages/Timbre";
import Photocopie from "./pages/Photocopie";
import Transport from "./pages/Transport";
import Recette_du_finance from "./pages/Recette_du_finance";
import AddTypeDossier from "./pages/AddTypeDossier.";
import UpdateType from "./pages/UpdateType";
import Updateutilisateurs from "./pages/Updateutilisateurs";
import AddUtilisateurs from "./pages/AddUtilisateurs";
import AddPrime from "./pages/AddPrime";
import UpdatePrime from "./pages/UpdatePrime";
import AddParametre from "./pages/AddParametre";
import UpdateParametre from "./pages/UpdateParametre";
import AddHonoraire from "./pages/AddHonoraire";
import UpdateHonoraire from "./pages/UpdateHonoraire";


import { Outlet } from 'react-router-dom';
import SideMenu from "./component/SideMenu";
import AddTimbre from "./pages/AddTimbre";
import UpdateTimbre from "./pages/UpdateTimbre";
import AddEmplacement from "./pages/AddEmplacement";
import UpdateEmplacement from "./pages/UpdateEmplacement";
import AddRecette from "./pages/AddRecette";
import UpdateRecette from "./pages/UpdateRecette";
import UpdatePhotocopie from "./pages/UpdatePhotocopie";
import UpdateTribu from "./pages/UpdateTribu";
import AddTribu from "./pages/AddTribu";
import Service from "./pages/Service";
import AddService from "./pages/AddService";
import UpdateService from "./pages/UpdateService";
import EmplacamentDossier1 from "./pages/EmplacamentDossier1";




const SidebarLayout = () => (
  <>
    <SideMenu />
    <Outlet />
  </>
);

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />



        <Route element={<SidebarLayout />}>

          <Route path="/CreatePost" element={<CreatePost />} />


          <Route path="/CreatePost/parametres/Type_dossier" element={<Type_dossier />} />
          <Route path="/AddTypeDossier" element={<AddTypeDossier />} />
          <Route path="/:id" element={<UpdateType />} />

          <Route path="/CreatePost/parametres/timbre" element={<Timbre />} />
          <Route path="/AddTimbre" element={<AddTimbre />} />
          <Route path="/timbre/:id" element={<UpdateTimbre />} />


          <Route path="/CreatePost/parametres/emplacement_dossier" element={<Emplacement_dossier />} />
          <Route path="/AddEmplacement" element={<AddEmplacement />} />
          <Route path="/emplacement/:id" element={<UpdateEmplacement />} />



          <Route path="/CreatePost/parametres/recette_du_finance" element={<Recette_du_finance />} />
          <Route path="/AddRecette" element={<AddRecette />} />
          <Route path="/recette/:id" element={<UpdateRecette />} />


          <Route path="/CreatePost/parametres/photocopie" element={<Photocopie />} />
          <Route path="/photocopie/:id" element={<UpdatePhotocopie />} />



          <Route path="/CreatePost/parametres/parametres_globales" element={<Parametres_globales />} />
          <Route path="/AddParametre" element={<AddParametre />} />
          <Route path="/parametres/:id" element={<UpdateParametre />} />
          <Route path="/CreatePost/parametres/honoraires_en_extra" element={<Honoraires_extra />} />
          <Route path="/AddHonoraire" element={<AddHonoraire />} />
          <Route path="/honoraires/:id" element={<UpdateHonoraire />} />



          <Route path="/CreatePost/parametres/tribunaux_et_administration" element={<Tribu_et_admin />} />
          <Route path="/CreatePost/parametres/tribunaux_et_administration/AddTribunal" element={<AddTribu />} />
          <Route path="/CreatePost/parametres/tribunaux_et_administration/:id" element={<UpdateTribu />} />
          <Route path="/CreatePost/parametres/tribunaux_et_administration/:id/service" element={<Service />} />
          <Route path="/CreatePost/parametres/tribunaux_et_administration/:id/service/AddService" element={<AddService />} />
          <Route path="/CreatePost/parametres/tribunaux_et_administration/:id/service/:id" element={<UpdateService />} />


          <Route path="/CreatePost/parametres/utilisateur" element={<Utilisateur />} />
          <Route path="/AddUtilisateur" element={<AddUtilisateurs />} />
          <Route path="/utilisateur/:id" element={<Updateutilisateurs />} />


          <Route path="/CreatePost/parametres/huissier" element={<Huissier />} />
          <Route path="/CreatePost/parametres/collaborateur" element={<Collaborateur />} />

          <Route path="/CreatePost/parametres/prime_greffier" element={<Prime_greffier />} />
          <Route path="/AddPrime" element={<AddPrime />} />
          <Route path="/prime/:id" element={<UpdatePrime />} />

          <Route path="/CreatePost/parametres/prime_greffier" element={<Prime_greffier />} />

          <Route path="/CreatePost/parametres/transport" element={<Transport />} />
          <Route path="/CreatePost/dossier/Emplacement_Dossier" element={<EmplacamentDossier1 />} />


        </Route>


      </Routes>
    </BrowserRouter>
  );
};
export default App; 