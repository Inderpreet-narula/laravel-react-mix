import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './BasicInfo.styles';
import ProfileContext from "../../utils/context";


const BasicInfo = (props) => {
    const { classes} = props;
    return (
        <ProfileContext.Consumer>
        {({ profileInfo }) => (
            <div className={classes.profileBasicInfo}>
            <div className={classes.profileType}>
                {profileInfo.type}
            </div>
            <div className={classes.profileList}>
                <img src="https://measurematch.herokuapp.com/images/no-of-experts.svg" alt="ic_experts" className={classes.profileInfoIcon} />
                {profileInfo.experts} Experts
            </div>
                <div className={classes.profileList}>
                <img src="https://measurematch.herokuapp.com/images/ic_tag.svg" alt="ic_tag" className={classes.profileInfoIcon} />
                {profileInfo.title}
            </div>
            <div className={classes.profileList}>
                <img src="https://measurematch.herokuapp.com/images/ic_location.svg" alt="location-icon" className={classes.profileInfoIcon} />
                {profileInfo.location}
            </div>
            <div className={classes.profileList}>
                <img src="https://measurematch.herokuapp.com/images/dollarBill_ic.svg" alt="dollarBill_ic" className={classes.profileInfoIcon} />
                US ${profileInfo.dailyRate}/day
            </div>
            <div className={classes.profileList}>
                <img src="https://measurematch.herokuapp.com/images/work_remotely.png" alt="ic_remote_working" className={classes.profileInfoIcon} />
                {profileInfo.preference}
            </div>
            <div className={classes.profileList}>
                <img src="https://measurematch.herokuapp.com/images/linkedin-icon.svg" alt="ic_remote_working" className={classes.profileInfoIcon} />
                {profileInfo.linkedinUrl}
            </div> 
        </div>
        )}
        </ProfileContext.Consumer>
    )
};
  
export default withStyles(styles)(BasicInfo);
