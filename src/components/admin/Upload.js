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
                                    <select class="form-select shadow-none upload-select-gender" aria-label="Default select example" placeholder="Seleccione un genero">
                                        <option value="" selected disabled>Seleccione un género</option>
                                    </select>
                                    <textarea className="form-control upload-input-sinopsis" placeholder="Sinópsis" maxlength="500" />
                                    <label className="mt-4">Subir imagen</label>
                                    <div class="upload-image">
                                        <label for="file-input">
                                            <i class="fas fa-image fa-3x upload-image-icon"></i>
                                        </label>

                                        <input id="file-input" type="file" />
                                    </div>
                                    <label className="mt-4">Subir video</label>
                                    <div class="upload-video">
                                        <label for="file-input">
                                            <i class="fas fa-film fa-3x upload-video-icon"></i>
                                        </label>

                                        <input id="file-input" type="file" />
                                    </div>
                                    <button className="btn shadow-none upload-button" >Subir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
