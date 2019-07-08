import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './TabPanel.styles';
import Tab from './Tab.component';


const TabPanel = (props) => {
    const { children, classes } = props;
    const [activeTab, setActiveTab] = useState(props.children[0].props.label)
      return (
        <div className={classes.tabs}>
          <ol className={classes.tabList}>
            {children.map((child) => {
              const { label } = child.props;
              return (
                <Tab
                  activeTab={activeTab === label}
                  key={label}
                  label={label}
                  setTab={(tab) => setActiveTab(tab)}
                />
              );
            })}
          </ol>
          <div className={classes.tabContent}>
            {children.filter((child) => child.props.label === activeTab).map((child) => child.props.children)}
          </div>
        </div>
      )};
  
export default withStyles(styles)(TabPanel);
