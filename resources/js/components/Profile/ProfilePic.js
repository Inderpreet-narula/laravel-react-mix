import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './ProfilePic.styles';
import ProfileContext from "../../utils/context";


const ProfilePic = (props) => {
    const { classes} = props;
    return (
        <ProfileContext.Consumer>
        {({ profileInfo }) => (
            <div className={classes.profilePic}>
                    
            </div>
        )}
        </ProfileContext.Consumer>
    )
};
  
export default withStyles(styles)(ProfilePic);
