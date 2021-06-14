import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startUpload } from '../../actions/Movie';

import { useForm } from '../../hooks/useForm';

export const Upload = () => {

    const dispatch = useDispatch();

    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const [formValues, handleInputChange] = useForm({
        title: '',
        year: 1900,
        gender: '',
        synopsis: ''
    });

    const { title, year, gender, synopsis} = formValues;

    const handleImageChange = () => {
        const image = document.getElementById('file-image').files[0];
        setImage(image);
    }

    const handleVideoChange = () => {
        const video = document.getElementById('file-video').files[0];
        setVideo(video);
    }

    const handleSubmit = async () => {
        const movie = JSON.stringify(formValues);
        dispatch(startUpload(movie, image, video));
    }

    return (
        <>
            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="upload-content">
                                <div className="form-group upload-input">
                                    <input type="text" className="form-control shadow-none upload-input-title" name="title" value={title} onChange={handleInputChange} placeholder="Título" maxLength="30" autoComplete="off" />
                                    <input type="number" className="form-control shadow-none upload-input-year" name="year" value={year} onChange={handleInputChange} placeholder="Año" autoComplete="off" />
                                    <select className="form-select shadow-none upload-select-gender" aria-label="Default select example" name="gender" value={gender} onChange={handleInputChange} placeholder="Seleccione un genero">
                                        <option defaultValue>Horror</option>
                                        <option value="Action">Action</option>
                                        <option value="SCI-FI">SCI-FI</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <textarea className="form-control upload-input-sinopsis" name="synopsis" value={synopsis} onChange={handleInputChange} placeholder="Sinópsis" maxLength="500" />
                                    
                                    <label className="mt-4">Subir imagen</label>
                                    <div className="upload-image">
                                        <label htmlFor="file-image">
                                            <i className="fas fa-image fa-3x upload-image-icon"></i>
                                        </label>

                                        <input id="file-image" type="file" name="image" onChange={handleImageChange} />
                                    </div>

                                    <label className="mt-4">Subir video</label>
                                    <div className="upload-video">
                                        <label htmlFor="file-video">
                                            <i className="fas fa-film fa-3x upload-video-icon"></i>
                                        </label>

                                        <input id="file-video" type="file" name="video" onChange={handleVideoChange} />
                                    </div>

                                    <button className="btn shadow-none upload-button" onClick={handleSubmit}>Subir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
