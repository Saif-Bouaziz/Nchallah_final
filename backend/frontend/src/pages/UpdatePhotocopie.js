import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputPhotocopie from '../component/InputPhotocopie'

function UpdatePhotocopie() {
  

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
    axios.put(`/api/photocopie/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/photocopie')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/photocopie/${id}`) 
    .then (res=> {  
       setForm(res.data)
    });
},[])

  return ( 
    <div> 
            
    <div className='page'> 
  
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/photocpie"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <span class="text-light">Remplir le champ pour modifier le prix de la photocopie</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputPhotocopie label="montant" type="text" name="montant" onChangeHandler={onChangeHandler} value={form.montant} /> 

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

export default UpdatePhotocopie ;