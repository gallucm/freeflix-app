import React from 'react';

export const Upload = () => {

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        console.log(image);
    }

    const handleVideoChange = (e) => {
        const video = e.target.files[1];
        console.log(video);
    }
 
    return (
        <>
            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="upload-content">
                                <div className="form-group upload-input">
                                    <input type="text" className="form-control shadow-none upload-input-title" name="title" placeholder="Título" maxLength="30" autoComplete="off" />
                                    <input type="number" className="form-control shadow-none upload-input-year" name="year" placeholder="Año" autoComplete="off"/>
                                    <select className="form-select shadow-none upload-select-gender" aria-label="Default select example" placeholder="Seleccione un genero">
                                        <option value="" disabled>Seleccione un género</option>
                                    </select>
                                    <textarea className="form-control upload-input-sinopsis" placeholder="Sinópsis" maxLength="500" />
                                    <label className="mt-4">Subir imagen</label>
                                    <div className="upload-image">
                                        <label htmlFor="file-input">
                                            <i className="fas fa-image fa-3x upload-image-icon"></i>
                                        </label>

                                        <input id="file-input" type="file" onChange={handleImageChange}/>
                                    </div>
                                    <label className="mt-4">Subir video</label>
                                    <div className="upload-video">
                                        <label htmlFor="file-input">
                                            <i className="fas fa-film fa-3x upload-video-icon"></i>
                                        </label>

                                        <input id="file-input" type="file" onChange={handleVideoChange}/>
                                    </div>
                                    <button className="btn shadow-none upload-button" >Subir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
