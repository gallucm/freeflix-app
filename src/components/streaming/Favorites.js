import { useSelector } from 'react-redux';
import { useFavorites } from '../../hooks/useFavorites';
import { LoadingRed } from '../ui/LoadingRed';
import { MovieGrid } from './MovieGrid';

export const Favorites = () => {

    useFavorites();

    const { loading } = useSelector(state => state.ui);
    const { favoritesList } = useSelector(state => state.movies);

    return (
        <>
            {(loading) &&
                <LoadingRed />}

            {(!loading && favoritesList && favoritesList.length > 0) &&
                <div className="movies-container mt-4">
                    {
                        favoritesList.map(movie => (
                            <MovieGrid key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            }

        </>
    )
}
