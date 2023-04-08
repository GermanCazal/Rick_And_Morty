import SearchBar from './SearchBar';
const Nav = ({ onSearch }) => {

    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to="/about"> About</Link>
            </button>

            <button>
                <Link to="/Home">Home</Link>
            </button>
        </nav>
    )
}

export default Nav;