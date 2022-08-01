import React from "react";
import { NavLink } from "react-router-dom";

let NotFound = () => {
    return (
       <div className={'notFoundBlock'}>
          <div> ...Page 404</div>
          <div>< br /></div>
          <div>
             <NavLink to="/profile">
                Go to main page
             </NavLink>
          </div>
       </div>
    )
 }

 export default NotFound;