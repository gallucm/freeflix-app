import { Navbar } from '../ui/Navbar';
import { Favorites } from './Favorites';

export const MyListScreen = () => {
    return (
        <>
            <Navbar allowed={false} />
            <div className="container mylist-container">
                <h3 className="text-center">Mis favoritos</h3>
                <Favorites />
            </div>
        </>
    )
}
