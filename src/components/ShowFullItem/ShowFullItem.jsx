import React from 'react';
import './SHowFullItem.scss'

const ShowFullItem = ({modalItem, onAdd, onShowItem}) => {
    const {id, title, desc, category, price, img} = modalItem
    return (
        <div className='full_item'>
            <div className="full_item_wrapper">
                <div className="img"><img onClick={onShowItem} src={img} alt={title}/></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="item_price_container">
                    <b>{price}$</b>
                    <div
                        className='add_to_cart'
                        onClick={()=>onAdd(modalItem)}
                    >+</div>
                </div>
            </div>
        </div>
    );
};

export default ShowFullItem;