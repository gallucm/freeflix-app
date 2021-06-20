import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUpload } from '../../actions/Movie';

import { useForm } from '../../hooks/useForm';

export const Upload = () => {

    const dispatch = useDispatch();

    const { loading, completed } = useSelector(state => state.upload);

    const [image, setImage] = useState(null);
    const [imageSelected, setImageSelected] = useState(false);

    const [video, setVideo] = useState(null);
    const [videoSelected, setVideoSelected] = useState(false);

    const [formValues, handleInputChange, reset] = useForm({
        title: '',
        year: '',
        gender: '',
        synopsis: ''
    });

    const { title, year, gender, synopsis } = formValues;

    const handleImageChange = () => {
        const image = document.getElementById('file-image').files[0];
        setImageSelected(true);
        setImage(image);
    }

    const handleVideoChange = () => {
        const video = document.getElementById('file-video').files[0];
        setVideoSelected(true);
        setVideo(video);
    }

    const handleSubmit = async () => {

        const movie = JSON.stringify(formValues);
        dispatch(startUpload(movie, image, video));

        setImageSelected(false);
        setVideoSelected(false);
        reset();
    }

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group upload-input">
                                    <input type="text" className="form-control shadow-none upload-input-title" name="title" value={title} onChange={handleInputChange} placeholder="Título" maxLength="30" autoComplete="off" required />
                                    <input type="number" className="form-control shadow-none upload-input-year" name="year" value={year} onChange={handleInputChange} placeholder="Año" autoComplete="off" required />
                                    <select className="form-select shadow-none upload-select-gender" aria-label="Default select example" name="gender" value={gender} onChange={handleInputChange} placeholder="Seleccione un genero" required>
                                        <option defaultValue>Acción</option>
                                        <option value="Comedia">Comedia</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Ciencia Ficción">Ciencia Ficción</option>
                                        <option value="Terror">Terror</option>
                                    </select>
                                    <textarea className="form-control upload-input-sinopsis" name="synopsis" value={synopsis} onChange={handleInputChange} placeholder="Sinópsis" maxLength="500" required />

                                    <div className="d-flex justify-content-center">
                                        <div style={{ marginRight: '20px' }}>
                                            <label className="mt-4">Subir imagen</label>
                                            <div className="upload-image">
                                                <label htmlFor="file-image">
                                                    <i className="fas fa-image fa-3x upload-image-icon"></i>
                                                    {
                                                        (imageSelected) &&
                                                        <i className="fas fa-check fa-2x" style={{ marginLeft: '10px', color: 'green' }}></i>
                                                    }
                                                    {
                                                        (!imageSelected) &&
                                                        <i className="fas fa-times fa-2x" style={{ marginLeft: '10px', color: 'red' }}></i>
                                                    }
                                                </label>
                                                <input id="file-image" type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handleImageChange} required />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mt-4">Subir video</label>
                                            <div className="upload-video">
                                                <label htmlFor="file-video">
                                                    <i className="fas fa-film fa-3x upload-video-icon"></i>
                                                    {
                                                        (videoSelected) &&
                                                        <i className="fas fa-check fa-2x" style={{ marginLeft: '10px', color: 'green' }}></i>
                                                    }
                                                    {
                                                        (!videoSelected) &&
                                                        <i className="fas fa-times fa-2x" style={{ marginLeft: '10px', color: 'red' }}></i>
                                                    }
                                                </label>
                                                <input id="file-video" type="file" accept="video/*" name="video" onChange={handleVideoChange} required />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        (!loading && !completed) &&
                                        <button type="submit" className="btn shadow-none upload-button">Subir</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
