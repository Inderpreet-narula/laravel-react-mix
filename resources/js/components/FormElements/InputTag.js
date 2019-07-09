import React from 'react';
import withStyles from 'react-jss';
import styles from './FormElements.styles';


const InputTag = (props) => {
    const {classes, onTagChage, removeTagHandler, tags} = props
      return (
        <div className={classes.inputTagWrapper}>
            <ul className={classes.inputTagList}>
              { tags.map((tag, i) => (
                <li key={tag.id} className={classes.inputTag}>
                  {tag.name}
                  <button type="button" className={classes.inputTagRemove} onClick={() => { removeTagHandler(i); }}>+</button>
                </li>
              ))}
              <li className={classes.inputTagNew}>
                <input type="text" onKeyDown={(e) => { onTagChage(e); }} />
              </li>
            </ul>
        </div>
      )};
  
export default withStyles(styles)(InputTag);

  

  