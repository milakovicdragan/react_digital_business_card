import React from 'react';

function Main(){
    return(
        <>
            <div className="container">
                <h2 className="main-name"> Dragan Milakovic</h2>
                <h3 className="main-title">Fronted Developer</h3>
                <h3 className="main-email">milakovicdragan@yahoo.com</h3>
            </div>
            <div className="main-buttons">
                    <button className="btn-email">
                        <img src="./images/icon-email.png" alt="email" className="btn-email-img"/>
                        Email
                    </button>
                    <button className="btn-linkedin">
                        <img src="./images/icon-linkedin.png"  alt="linkedin" className="btn-linkedin-img"/>
                        Linkedin
                    </button>
            </div>
            <div className="main-text">
                <h2 className="about">About</h2>
                <p>
                    I am a frontend developer with a particular interest in
                    making things simple and automating daily tasks.
                    I try to keep up with security and best practices,
                    and am always looking for new things to learn.
                </p>
                <h2 className="interests">Interests</h2>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>

            </div>
        </>
    );
}
export default Main;