import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './Profile.styles';
import ProfileContent from './ProfileContent';
import ProfileContext from "../../utils/context";
import { BasicInfo, ProfilePic } from '../../components/Profile';
import { TabPanel } from '../../components/TabPanel';
import { Textarea } from '../../components/FormElements';

export const ProfileComponent = (props) => { 
    const { classes} = props;
    const [profileInfo, setprofileInfo] = useState(ProfileContent);
    const [profileEditStatus, setProfileEditStatus]= useState(false);
    const [profileSummaryEditStatus, setProfileSummaryEditStatus]= useState(false);
    const updateProfileInfo = (e) => {
        setprofileInfo({
            ...profileInfo,
            [e.target.name]: e.target.value
        });
       
    };

    return(
        <ProfileContext.Provider value={{ profileInfo, updateProfileInfo}}>
        <div className={classes.profileContainer}>
            <div className={classes.profileLeft}>
                <div className={classes.profileName}>
                    {profileInfo.name}
                </div>
                <ProfilePic />
                {!profileEditStatus && <button onClick={() => setProfileEditStatus(true)}>Edit</button>}
                <BasicInfo editStatus={profileEditStatus} />
                {profileEditStatus && <button onClick={() => setProfileEditStatus(false)}>Save</button>}
            </div>
            <div className={classes.profileRight}>
            <TabPanel>
                <div label="Summary">
                    <div className={classes.tabContent}>
                        <h3 className={classes.tabHeading}>Your Story</h3>
                        {!profileSummaryEditStatus && <button onClick={() => setProfileSummaryEditStatus(true)}>Edit</button>}
                        <Textarea 
                            placeholder="Your Story" 
                            name="summary"
                            editStatus={profileSummaryEditStatus}
                            value={profileInfo.summary} 
                            onChange={(e) => updateProfileInfo(e)}
                        />
                        {profileSummaryEditStatus && <button onClick={() => setProfileSummaryEditStatus(false)}>Save</button>}
                    </div>
                </div>
                <div label="Skills">
                <div className={classes.tabContent}>
                        <h3 className={classes.tabHeading}>Skills</h3> 
                    </div>
                </div>
                <div label="Work History">
                    <div className={classes.tabContent}>
                        <h3 className={classes.tabHeading}>Work History</h3>
                    </div>
                </div>
                <div label="Education">
                    <div className={classes.tabContent}>
                        <h3 className={classes.tabHeading}>Education</h3>
                    </div>
                </div>
            </TabPanel>
            </div>
        </div>
    </ProfileContext.Provider>
    );
};

export default withStyles(styles)(ProfileComponent);
