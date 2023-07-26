import React from 'react';
import './Order.scss'
import { FaXmark } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Order = ({item, onDelete, onDecrease, onIncrease}) => {
    const {id, title, desc, category, count, price, img} = item

    return (
        <div className='item2'>
            <div className="img"><img src={img} alt={title}/></div>
            <div>
                <h3>{title}</h3>
                <div className="price">
                    <b className='price_title'>{price}$</b>
                    <b>{price*count}$</b>
                </div>
            </div>
            <div className="count">
                <div onClick={() => onDecrease(item)}><FaChevronLeft/></div>
                <b>{count}</b>
                <div onClick={() => onIncrease(item)}><FaChevronRight/></div>
            </div>
            <div className="remove">

                <FaXmark onClick={()=>onDelete(id)} />
            </div>
        </div>
    );
};

export default Order;