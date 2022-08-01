import React from 'react' 
import classnames from 'classnames'


function InputGroup({label,type,name,_id,value, onChangeHandler, errors}) {
  return (
    <div>  
       
            <div class="new_user">
                <div class="form-group">
                     <label for="Email" class="text-light">{label}</label>
                     <input type={type} name={name} value={value} onChange={onChangeHandler} className={(classnames("form-control", {"is-invalid": errors}))} />
                      { 
                       errors && (<div class="invalid-feedback">
                       {errors} 
                       </div> )
                      }
                </div>     
            </div> 
      
    </div>
  )
}

export default InputGroup ;
