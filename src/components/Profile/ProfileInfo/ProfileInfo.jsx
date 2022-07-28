import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
// import { updateStatus } from './../../../redux/profile-reducer';
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

//https://images.unsplash.com/photo-1580341567260-3569b4dc537a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80
//https://www.shoei-europe.com/wp-content/uploads/2020/09/Menue-Products-Glamster-1.png
//https://lightningmotorcycle.com/wp-content/uploads/2019/09/strike_banner.jpg

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);

  // if (props.profile == null || props.profile == undefined)
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (formData, setStatus,
    setSubmitting, goToViewMode) => {
      // console.log(formData);
    saveProfile(formData, setStatus, setSubmitting, goToViewMode);
    // setEditMode(false);
  }

  return (
    <div>
      <div className={s.moto}>
        {/* <img src='https://imageio.forbes.com/specials-images/imageserve/5c0aa5554bbe6f0f2aa19644/0x0.jpg?format=jpg&width=1200' alt='moto'></img> */}
        {/* <img src='https://lightningmotorcycle.com/wp-content/uploads/2019/09/strike_banner.jpg' alt='moto'></img> */}
      </div>
      <div className={s.descriptionBlock}>
        {/* <img src={props.profile.photos.large}/> */}
        <img
          className={s.mainPhoto}
          src={profile.photos.large !== null ? profile.photos.large : userPhoto}
          alt="userPhoto"
        />
        {isOwner && (
          <div>
            <input type={"file"} onChange={onMainPhotoSelected} />
          </div>
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
        {editMode ? (<ProfileDataForm profile={profile}
          handleSubmit={handleSubmit}
          // onSubmit={handleSubmit}
          goToViewMode={() => setEditMode(false)} />)
          : (<ProfileData profile={profile}
            isOwner={isOwner}
            goToEditMode={() => { setEditMode(true) }} />)}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

  return <div>

    <div>
      <b>Full name: </b>
      {profile.fullName}
    </div>
    <div>
      <b>ID: </b>
      {profile.userId}
    </div>
    <div>
      <b>About me: </b>
      {profile.aboutMe}
    </div>
    <div>
      <b>Looking for a job: </b>
      {profile.lookingForAJob ? "Yes" : "No"}
    </div>

    {profile.lookingForAJob && (
      <div>
        <b>Mu professional skills: </b>
        {profile.lookingForAJobDescription}
      </div>
    )}

    <div>
      <b>Contacts: </b>{" "}
      {Object.keys(profile.contacts).map((key) => {
        return (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        );
      })}
    </div>

    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

  </div>;

};

const Contact = ({ contactTitle, contactValue }) => {
  // return <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
  return (
    <div className={s.contact}>
      {contactTitle}: {contactValue}
    </div>
  );
};

export default ProfileInfo;
