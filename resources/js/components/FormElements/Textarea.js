import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';


const Textarea = (props) => {
    const { type, placeholder, label, classes, value, editStatus, onChange, name } = props;  
      return (
        <div className={classes.inputWrap}>
            {label && <label>{label}</label>}
            {editStatus ? <textarea placeholder={placeholder} name={name} value={value} onChange={(e) => onChange(e)} /> : value }
        </div>
      )};
  
export default withStyles(styles)(Textarea);