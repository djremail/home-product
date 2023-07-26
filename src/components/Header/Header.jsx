import React, {useState} from 'react';
import './Header.scss'
import { FaBasketShopping } from "react-icons/fa6";
import order from "../Order/Order";
import Order from "../Order/Order";
import {Link} from "react-router-dom";

const Header = ({cart, onDelete, onIncrease, onDecrease}) => {
    const[active, setActive] = useState(false)

    let totalPrice = cart.reduce((a,b) => a+b.price * b.count, 0);

    const handleClick = (event) => {
        event.preventDefault();
    };

    return (
        <header className='header'>
           <div className='header_container'>
               <span className='header_logo'>House Stuff</span>
               <ul className='header_navigation'>
                   <li>
                       <Link to='/'>Product</Link>
                   </li>
                   <li>
                       <Link to='/about'>About</Link>
                   </li>
                   <li>
                       <Link to='/contacts'>Contacts</Link>
                   </li>
                   <FaBasketShopping
                       onClick={()=>setActive(prev => !prev)}
                       className= {`header_basket ${active && 'active'}`}
                   />
               </ul>
               {active && (
                   <div className='shop_cart'>
                       {cart.map(item => (
                            <Order
                                key={item.id}
                                item={item}
                                onIncrease={onIncrease}
                                onDecrease={onDecrease}
                                onDelete={onDelete}/>
                       ))}
                       <p className={ totalPrice !==0 ?'total_price' : 'total_price total_price_active'}>
                           {
                               totalPrice === 0 ? 'Кошик пустий' : `Всього: ${new Intl.NumberFormat().format(totalPrice)}$`
                           }
                       </p>
                       {
                           totalPrice !== 0 ? <button onClick={handleClick}>Оформити замовлення</button>: ''
                       }
                   </div>
               )}
           </div>
            <div className='header_presentation'></div>
        </header>
    );
};

export default Header;

