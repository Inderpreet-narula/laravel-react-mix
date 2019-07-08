import React from 'react';
import withStyles from 'react-jss';
import styles from './TabPanel.styles';


const Tab = (props) => {
    const { label, classes, activeTab, setTab } = props;  
      return (
        <li className={activeTab ? classes.tabListActive : classes.tabListItem} onClick={() => setTab(label)}>
            {label}
        </li>
      )};
  
export default withStyles(styles)(Tab);