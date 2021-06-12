import React from 'react';

export const Upload = () => {
    return (
        <div>
            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="upload-content">
                                <div className="form-group upload-input">
                                    <input type="text" className="form-control shadow-none upload-input-title" name="title" placeholder="Título" maxlength="30" autoComplete="off" />
                                    <input type="number" className="form-control shadow-none upload-input-year" name="year" placeholder="Año" autoComplete="off" />
                                    <textarea className="form-control upload-input-sinopsis" placeholder="Sinópsis" maxlength="500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
