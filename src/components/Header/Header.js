import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm, setGenre }) => {
    return (
        <header>
            <h1>Film Finder</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenre={setGenre}/>
            <img src='/android-chrome-192x192.png' alt='logo' className='logo'/>
        </header>
    )
}

export default Header;