import './SearchBar.css';

const SearchBar = ({ setGenre, searchTerm, setSearchTerm }) => {

    const handleGenreChange = e => {
        setGenre(e.target.value)
        console.log(e.target.value)
    }


    return (
        <form>
            <select className='genres' onChange={handleGenreChange}>
                <option value=''>all genres</option>
                <option value='action'>action</option>
                <option value='adventure'>adventure</option>
                <option value='animated'>animated</option>
                <option value='biography'>biography</option>
                <option value='children'>children</option>
                <option value='comedy'>comedy</option>
                <option value='comedy drama'>comedy drama</option>
                <option value='crime drama'>crime drama</option>
                <option value='dark comedy'>dark comedy</option>
                <option value='drama'>drama</option>
                <option value='fantasy'>fantasy</option>
                <option value='historical drama'>historical drama</option>
                <option value='horror'>horror</option>
                <option value='mystery'>mystery</option>
                <option value='science fiction'>science fiction</option>
                <option value='thriller'>thriller</option>
                <option value='western'>western</option>
            </select>
            <input 
                className='search-bar'
                type='text'
                placeholder='Search by Title'
                name='searchTerm'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </form>
    )
}

export default SearchBar;