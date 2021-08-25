import React from 'react'

import profileImage from './profile-mini.jpeg';

export const Profile = () => {

    const handleChangeProfile = (e) => {
        e.preventDefault();
        console.log("handlechange");
    }

    return (
        <>
            <div className="text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            <form onSubmit={handleChangeProfile}>
                                <div className="form-group profile-input">
                                    <img src={profileImage} alt="pepe" className="image-profile"/>

                                    <input type="text" className="form-control shadow-none profile-input-username" name="username" placeholder="Usuario" maxLength="15" autoComplete="off" required />
                                    <input type="email" className="form-control shadow-none profile-input-email" name="email" placeholder="Email" maxLength="15" autoComplete="off" required />

                                    <input type="submit" className="btn btn-success mt-4" value="Actualizar datos" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
