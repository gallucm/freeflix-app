import React from 'react'

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
                                <div className="form-group upload-input">

                                    <img src={"./profile-mini.jpeg"} className="img-profile" alt="Avatar"/>

                                    <input type="text" className="form-control shadow-none profile-input-username" name="username" placeholder="Usuario" maxLength="15" autoComplete="off" required />
                                    <input type="email" className="form-control shadow-none profile-input-email" name="email" placeholder="Email" maxLength="15" autoComplete="off" required />

                                    <input type="submit" className="btn btn-success" value="Guardar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
