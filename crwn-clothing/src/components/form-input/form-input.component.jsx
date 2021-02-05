import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} 
        //...otherProps is all the props within email/pw labels in sign-in
        {...otherProps}/>
        {//selectively render a label, if label is there then <label> if not then null
            label ? //if otherprops.value.length is there then add 'shrink', if not then ''
            (<label className={`${otherProps.value.length ?'shrink' : ''}
             form-input-label`}//will always be there regardless
             > 
                {label}
            </label>)
            : null 
        }

    </div>
);

export default FormInput;