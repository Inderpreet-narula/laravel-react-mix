import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './Profile.styles';
import ProfileContent from './ProfileContent';
import ProfileContext from "../../utils/context";
import { BasicInfo, ProfilePic } from '../../components/Profile';
import { TabPanel } from '../../components/TabPanel';

export const ProfileComponent = (props) => { 
    const { classes} = props;
    const [profileInfo, setprofileInfo] = useState(ProfileContent);
    return(
        <ProfileContext.Provider value={{ profileInfo }}>
        <div className={classes.profileContainer}>
            <div className={classes.profileLeft}>
                <div className={classes.profileName}>
                    {profileInfo.name}
                </div>
                <ProfilePic />
                <BasicInfo />
            </div>
            <div className={classes.profileRight}>
            <TabPanel>
                <div label="Gator">
                See ya later, <em>Alligator</em>!
                </div>
                <div label="Croc">
                After &apos;while, <em>Crocodile</em>!
                </div>
                <div label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
                </div>
            </TabPanel>
            </div>
        </div>
    </ProfileContext.Provider>
    );
};

export default withStyles(styles)(ProfileComponent);
