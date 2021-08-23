import { Navbar } from '../ui/Navbar';
import { Favorites } from './Favorites';

export const MyList = () => {
    return (
        <>
            <Navbar />
            <div className="container mylist-container">
                <h3 className="text-center">Mi lista de favoritos</h3>
                <Favorites />
            </div>
        </>
    )
}
