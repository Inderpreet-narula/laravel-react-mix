import React, { useState } from 'react';
import withStyles from 'react-jss';
import styles from './BasicInfo.styles';
import ProfileContext from "../../utils/context";
import { InputField } from '../../components/FormElements';

const BasicInfo = (props) => {
    const { classes, editStatus} = props;
    return (
        <ProfileContext.Consumer>
        {({ profileInfo, updateProfileInfo }) => (
                <div className={classes.profileBasicInfo}>
                <div className={classes.profileType}>
                    <InputField
                        label="How many systems &amp; data Experts work for your consultancy? *"
                        type="text"
                        value={profileInfo.type}
                        name="type"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />
                </div>
                <div className={classes.profileList}>
                    {!editStatus && <img src="https://measurematch.herokuapp.com/images/no-of-experts.svg" alt="ic_experts" className={classes.profileInfoIcon} />}
                    <InputField
                        label="How many systems &amp; data Experts work for your consultancy? *"
                        type="text"
                        value={profileInfo.experts}
                        name="experts"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />  
                    {!editStatus && 'Experts'}
                </div>
                    <div className={classes.profileList}>
                    {!editStatus && <img src="https://measurematch.herokuapp.com/images/ic_tag.svg" alt="ic_tag" className={classes.profileInfoIcon} />}
                    <InputField
                        label="Your MeasureMatch profile title *"
                        type="text"
                        value={profileInfo.title} 
                        name="title"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />
                </div>
                <div className={classes.profileList}>
                    {!editStatus && <img src="https://measurematch.herokuapp.com/images/ic_location.svg" alt="location-icon" className={classes.profileInfoIcon} />}
                    <InputField
                        label="Your location (city) *"
                        type="text"
                        value={profileInfo.location}
                        name="location"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />
                </div>
                <div className={classes.profileList}>
                    {!editStatus && <img src="https://measurematch.herokuapp.com/images/dollarBill_ic.svg" alt="dollarBill_ic" className={classes.profileInfoIcon} />}
                    {!editStatus && 'US $'}
                    <InputField
                        label="Your Daily Rate *"
                        type="text"
                        value={profileInfo.dailyRate} 
                        name="dailyRate"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />
                     {!editStatus && '/day'}
                </div>
                <div className={classes.profileList}>
                    {!editStatus && <img src="https://measurematch.herokuapp.com/images/work_remotely.png" alt="ic_remote_working" className={classes.profileInfoIcon} />}
                    <InputField
                        label="Location preference *"
                        type="text"
                        value={profileInfo.preference}
                        name="preference"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />
                </div>
                <div className={classes.profileList}>
                    {!editStatus && <img src="https://measurematch.herokuapp.com/images/linkedin-icon.svg" alt="ic_remote_working" className={classes.profileInfoIcon} />}
                    <InputField
                        label="Location preference *"
                        type="text"
                        value={profileInfo.linkedinUrl}
                        name="linkedinUrl"
                        editStatus={editStatus}
                        onChange={(e) => updateProfileInfo(e)}
                        showLabel={editStatus}
                    />
                </div> 
            </div>
        )}
        </ProfileContext.Consumer>
    )
};
  
export default withStyles(styles)(BasicInfo);
