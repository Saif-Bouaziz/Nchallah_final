import React from 'react';

const InputTribu = ({ label, type, name, onChangeHandler, value }) => {
    return (
        <div>

            <div class="new_user">
                <div class="form-group">
                    <label for="Email" class="text-light">{label}</label>
                    <input type={type} name={name} value={value} onChange={onChangeHandler} />

                </div>
            </div>

        </div>
    );
};

export default InputTribu;