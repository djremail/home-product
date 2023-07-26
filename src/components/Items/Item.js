import React from 'react';

const truncateDesc = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.slice(0, maxLength) + '...';
    }
};

const Item = ({item, onAdd, onShowItem}) => {
    const {id, title, desc, category, price, img} = item
    return (
        <>
            <div className='item'>
                <div className="img"><img onClick={()=>onShowItem(item)} src={img} alt={title}/></div>
                <h3>{truncateDesc(title, 11)}</h3>
                <p>{truncateDesc(desc, 50)}</p>
                <div className="item_price_container">
                    <b>{price}$</b>
                    <div
                        className='add_to_cart'
                        onClick={()=>onAdd(item)}
                    >+</div>
                </div>
            </div>
        </>
    );
};

export default Item;



