import React from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css";

const UpdateType = () => {  
    
    const [form, setForm] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const onChangeHandler = (e) => {  
        setForm({  
            ...form, 
            [e.target.name] : e.target.value, 
            
        })  
    }        
        const onSubmitHandler = (e) =>  {   
            e.preventDefault();
             
            axios.put(`/api/users/${id}`, form) 
            .then (res => {  
                navigate('/')
            }) 
        } 

        useEffect( () => {
            axios.get(`/api/users/${id}`).then((res) => {
              setForm(res.data);
            });
          });
    return (
        <div>
            
            <div className='page'>
            <div class="container">
     <div class="box-nav d-flex justify-between">
        <div class="filter">
            <a href="/"><i class="fas fa-angle-double-left"></i> Retourner</a>
        </div>
     </div>
     <div class="form-title text-center">
         <h2 class="text-dark">Nouveau Type Dossier</h2>
         <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau Type de Dossier</span>
     </div>
     <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler}>
     <InputGroup label="Email" type="text" name="Email" onChangeHandler={onChangeHandler}/> 
     <InputGroup label="Lastname" type="text" name="Lastname" onChangeHandler={onChangeHandler}/> 
     <InputGroup label="Firstname" type="text" name="Firstname" onChangeHandler={onChangeHandler}/> 
     <InputGroup label="Age" type="text" name="Age" onChangeHandler={onChangeHandler}/>   
     
      <div class="new_user" >
     <div class="form-group">
         <button   type="submit" class="btn text-dark update" onCli>Enregistrer</button>
     </div>
     </div>  
     </form>
     
 </div> 
            </div>
        </div>
    );
};

export default UpdateType ;