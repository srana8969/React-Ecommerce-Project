import { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import { useCart } from '../../hooks/useCart';
import './navbar.css'

const Navbar = ({categories}) => {
    const { totalQuantity } = useCart();
    // const { 
    //     isLoading, 
    //     error, 
    //     data: categories 
    // } = useFetchData("https://fakestoreapi.com/products/categories", []);
    return(
        <nav className='nav'>
            <div className='nav-left'>
                <ul className='nav-items'>
                    {/* <li className='nav-item'> <Link to='/'>Home</Link> </li>
                    <li className='nav-item'> <Link to='/about'>About</Link></li>
                    <li className='nav-item'> <Link to='/contact'>Contact Us</Link></li> */}
                    {  
                       categories && categories.map((category, index) => {
                            return (
                                <li key={`category-${index}`}
                                    className="nav-item">
                                    <NavLink 
                                        to={`/products/${category}`}
                                        className="nav-link">
                                            {category}
                                    </NavLink>
                                </li>  
                            );
                        })
                    }
                    {/* <NavLink 
                        to='/'
                        className="nav-item">Home
                    </NavLink>
                    <NavLink 
                        to='/about'
                        className="nav-item">About
                    </NavLink>
                    <NavLink 
                        to='/contact'
                        className="nav-item">Contact Us
                    </NavLink> */}

                </ul>
            </div>
            <div className='nav-right'>
                <Link to="/cart" className="cart-icon-container">
                    <FaOpencart className="cart-icon" />
                    {
                        !!totalQuantity && (
                            <>
                                <div className="cart-badge">{totalQuantity}</div>
                            </>
                        )
                    }
                </Link>
            </div>
        </nav>
    )
}

export default memo(Navbar);