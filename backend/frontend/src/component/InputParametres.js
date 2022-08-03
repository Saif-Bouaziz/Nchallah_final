import React from 'react' 


function InputParametres({label,type,name,_id,value, onChangeHandler}) {
  return (
    <div>  
       
            <div class="new_user">
                <div class="form-group">
                     <label for="Email" class="text-light">{label}</label>
                     <input type={type} name={name} value={value} onChange={onChangeHandler}  />
                      
                      
                      
                      
                      
                </div>    
            </div> 
      
    </div>
  )
}

export default InputParametres ;
