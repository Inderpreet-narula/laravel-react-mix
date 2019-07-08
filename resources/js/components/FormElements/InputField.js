import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';


const InputField = (props) => {
    const { type, placeholder, label, classes, value, editStatus, onChange, name, showLabel } = props;  
      return (
        <div className={classes.inputWrap}>
            {showLabel && <label>{label}</label>}
            {editStatus ? <input name={name} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e)} /> : value }
        </div>
      )};
  
export default withStyles(styles)(InputField);