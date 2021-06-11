import React from 'react';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">User</span>  
                    <input type="text" className="form-control w-25 shadow-none focus-none" placeholder="Search something..."/>  
                    <form className="d-flex">                        
                        <button className="btn btn-custom-primary shadow-none" type="submit">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>   Logout</span>
                        </button>
                    </form>
                </div>
            </nav>
        </>
    )
}
