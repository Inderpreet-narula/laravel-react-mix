import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './TabPanel.styles';
import Tab from './Tab';


const TabPanel = (props) => {
    const { children, classes } = props;
    const [activeTab, setActiveTab] = useState(props.children[0].props.label)
    function handleClick(tab) {
      console.log(tab)
      return setActiveTab(tab);
    }
      return (
        <div className={classes.tabs}>
          <ol className={classes.tabList}>
            {children.map((child) => {
              const { label } = child.props;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  setTab={handleClick}
                />
              );
            })}
          </ol>
          <div className={classes.tabContent}>
            {children.map((child) => {
              if (child.props.label !== activeTab) {
                return undefined;
              } else {
                return child.props.children;
              }
              
            })}
          </div>
        </div>
      )};
  
export default withStyles(styles)(TabPanel);
