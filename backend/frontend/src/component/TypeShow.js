import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function TypeShow({Email, Lastname , Firstname , Age, ID, OnDelete}) { 



  
  return (
     
        <tr> 
            
            <td>{Email}</td>
            <td>{Lastname}</td> 
            <td>{Firstname}</td> 
            <td>{Age}</td>
             <td>
                <Link to={`/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default TypeShow ;
