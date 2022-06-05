import React from "react";
import s from './ProfileInfo.module.css';

//https://images.unsplash.com/photo-1580341567260-3569b4dc537a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80
//https://www.shoei-europe.com/wp-content/uploads/2020/09/Menue-Products-Glamster-1.png

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.photo}>
                <img src='https://imageio.forbes.com/specials-images/imageserve/5c0aa5554bbe6f0f2aa19644/0x0.jpg?format=jpg&width=1200' alt='moto'></img>
                {/* <img src='https://lightningmotorcycle.com/wp-content/uploads/2019/09/strike_banner.jpg'></img> */}
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;