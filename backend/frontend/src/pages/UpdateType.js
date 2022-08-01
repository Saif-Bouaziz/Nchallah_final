import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputGroup from '../component/InputGroup'

function UpdateType() {
  

  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`/api/users/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/Type_dossier')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/users/${id}`) 
    .then (res=> {  
       setForm(res.data)
    });
},[])

  return ( 
    <div> 
            
    <div className='page'> 
    <header id="header">
<nav>
    <div class="container">
        <div class="text-center">
            <a href="/" class="nav-brand text-dark">Liste des types de dossier</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Nouveau Type Dossier</h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau </span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputGroup label="Email" type="text" name="Email" onChangeHandler={onChangeHandler} value={form.Email} /> 
<InputGroup label="Lastname" type="text" name="Lastname" onChangeHandler={onChangeHandler} value={form.Lastname} /> 
<InputGroup label="Firstname" type="text" name="Firstname" onChangeHandler={onChangeHandler} value={form.Firstname}/> 
<InputGroup label="Age" type="text" name="Age" onChangeHandler={onChangeHandler} value={form.Age}/>   

<div class="new_user" >
<div class="form-group">
 <button   type="submit" class="btn text-dark update" >Enregistrer</button>
</div>
</div>  
</form>

</div> 
    </div>
</div>
  )
}

export default UpdateType ;