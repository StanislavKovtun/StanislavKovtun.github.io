import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status]);

  const activeEditMode = () => {
    setEditMode(true);
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  // debugger
  return (
    <div>
      {/* {!editMode && props.isOwner && ( */}
      {!editMode && (
        <div>
          <span><b>Status: </b></span>
          <span onDoubleClick={props.isOwner ? activeEditMode : ''}>
            {props.status || "No status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} 
          onBlur={deactiveEditMode} 
          autoFocus={true} 
          value={status}/>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
