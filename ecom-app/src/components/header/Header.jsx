import Navbar from "../navbar/Navbar";
import './header.css';

const Header = ({categories}) => {
    return (
        <>
          <header className="header">
            <Navbar categories={categories}/>
          </header> 
        </>
    )
}

export default Header;