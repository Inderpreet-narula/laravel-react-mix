import React from 'react';
import withStyles from 'react-jss';
import styles from './Profile.styles';
import ProfileComponent from './Profile.component';

export const Profile = (props) => { 
    const { classes} = props;
    return(
        <div>
            <ProfileComponent />
        </div>
    );
};

export default withStyles(styles)(Profile);
