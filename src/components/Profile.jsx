import React from "react";

// https://images.unsplash.com/photo-1580341567260-3569b4dc537a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbWV0fGVufDB8fDB8fA%3D%3D&w=1000&q=80
//https://www.shoei-europe.com/wp-content/uploads/2020/09/Menue-Products-Glamster-1.png
//https://media.istockphoto.com/photos/motorcycle-helmet-picture-id178619117?k=20&m=178619117&s=612x612&w=0&h=fyD394lR0s6pJrn5f0IQPYe1s1pazkjpBB7ClL5U1nE=

const Profile = () => {
    return (
        <div className='content'>
            <div className='content__photo'>
                <img src='https://imageio.forbes.com/specials-images/imageserve/5c0aa5554bbe6f0f2aa19644/0x0.jpg?format=jpg&width=1200' alt='moto'></img>
                {/* <img src='https://lightningmotorcycle.com/wp-content/uploads/2019/09/strike_banner.jpg'></img> */}
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        New post1
                    </div>
                    <div>
                        New post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;