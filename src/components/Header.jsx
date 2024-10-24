import "./Header.css"

function Header(props) {
    return (
        <header className="Header">
        <h1>This is Header</h1>
        <h2>We currently have {props.moviesToDisplay.length} movies </h2>
        </header>
        
    )
}

export default Header;