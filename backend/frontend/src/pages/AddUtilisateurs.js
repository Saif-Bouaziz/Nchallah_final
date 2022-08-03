import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios';


const AddUtilisateurs = () => { 
    const [form , setForm] = useState({}) ;  
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {  
    setForm({  
        ...form, 
        [e.target.name] : e.target.value , 
        
    })  
    } 
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('/api/utilisateurs', form)
        .then(res=>{ 
            alert(res.data.message)
          
        })
        .catch(err=>setErrors(err.response.data))
        
      } 


    return (
        <div>  
            <div className='page'>  
            <header id="header">
    <nav>
        <div class="container">
            <div class="text-center">
                <a href="/" class="nav-brand text-dark">Liste des utilisateurs</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter"> 
           <br />
               <a href="/CreatePost/parametres/Utilisateur"><i class="fas fa-angle-double-left"></i> Retourner</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Nouveau Utilisateurs</h2>
            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau Utilisateurs</span>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
        <InputGroup label="Email" type="text" name="Email" onChangeHandler={onChangeHandler} errors={errors.Email}/> 
        <InputGroup label="Password" type="text" name="Password" onChangeHandler={onChangeHandler} errors={errors.Password}/> 
        <InputGroup label="Domaine" type="text" name="Domaine" onChangeHandler={onChangeHandler} errors={errors.Domaine}/> 
        
         <div class="new_user" >
        <div class="form-group">
            <button   type="submit" class="btn text-dark update" >Enregistrer</button>
        </div>
        </div>  
        </form>

        

    </div> 
    
</main> 
</div>
        </div>
    );
};

export default AddUtilisateurs;