import React from 'react';

const Order = ({item}) => {
    const {id, title, desc, category, price, img} = item

    return (
        <div className='item'>
            <div className="img"><img src={img} alt={title}/></div>
            <h3>{title}</h3>
            <b>{price}$</b>
        </div>
    );
};

export default Order;