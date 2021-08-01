import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUploadCompleted, startUpload } from '../../actions/Movie';
import { genders } from '../../helpers/genders';

import { useForm } from '../../hooks/useForm';
import { Alert } from '../ui/Alert';
import { Loading } from '../ui/Loading';

export const Upload = () => {

    const dispatch = useDispatch();

    const { completed } = useSelector(state => state.upload);
    const { loading, message } = useSelector(state => state.ui);

    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const [formValues, handleInputChange, reset] = useForm({
        title: '',
        year: '',
        gender: '',
        synopsis: ''
    });

    useEffect(() => {
        if (completed) {
            reset();
            setImage(null);
            setVideo(null);
            dispatch(removeUploadCompleted());
        }
    }, [completed, reset, dispatch]);

    const { title, year, gender, synopsis } = formValues;

    const handleImageChange = () => {
        const image = document.getElementById('file-image').files[0];
        setImage(image);
    }

    const handleVideoChange = () => {
        const video = document.getElementById('file-video').files[0];
        setVideo(video);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const movie = JSON.stringify(formValues);
        dispatch(startUpload(movie, image, video));
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
                                    
                                    <select className="form-select shadow-none upload-select-gender" aria-label="Default select example" name="gender" autoComplete="off" value={gender} onChange={handleInputChange} placeholder="Seleccione un genero" required>
                                        {genders.map(gender => ( 
                                            <option value={gender}>{gender}</option>
                                        ))}
                                    </select>

                                    <textarea className="form-control upload-input-sinopsis" name="synopsis" value={synopsis} onChange={handleInputChange} placeholder="Sinópsis" maxLength="500" required />

                                    <div className="d-flex justify-content-center">
                                        <div style={{ marginRight: '20px' }}>
                                            <label className="mt-4">Subir imagen</label>
                                            <div className="upload-image">
                                                <label htmlFor="file-image">
                                                    <i className="fas fa-image fa-3x upload-image-icon"></i>
                                                    <i className={image ? "fas fa-check fa-2x" : "fas fa-times fa-2x"} style={{ marginLeft: '10px', color: (image ? 'green' : 'red') }}></i>
                                                </label>
                                                <input id="file-image" type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handleImageChange} required />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mt-4">Subir video</label>
                                            <div className="upload-video">
                                                <label htmlFor="file-video">
                                                    <i className="fas fa-film fa-3x upload-video-icon"></i>
                                                    <i className={video ? "fas fa-check fa-2x" : "fas fa-times fa-2x"} style={{ marginLeft: '10px', color: (video ? 'green' : 'red')}}></i>
                                                </label>
                                                <input id="file-video" type="file" accept="video/*" name="video" onChange={handleVideoChange} required />
                                            </div>
                                        </div>
                                    </div>

                                    <Alert />

                                    {!message &&
                                        <button type="submit" className="btn shadow-none upload-button" disabled={loading}>
                                            {(!loading) && <span>Subir</span>}
                                            {(loading) && <Loading />}
                                        </button>
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
