import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startSetMovieSelected } from '../../actions/Movie';

export const MovieGrid = ({movie}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelected = () => {
        dispatch(startSetMovieSelected(movie));
        history.push('/m/' + movie.id);
    }

    return (
        <div className="flex-item">
            <img src={movie.image} alt={movie.title} key={movie.id} className="img-movie" onClick={handleSelected}/>
        </div>
    )
}
