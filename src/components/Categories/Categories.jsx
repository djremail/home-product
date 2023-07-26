import React from 'react';
import './Categories.scss'

const category = [
    {
        key: 'all',
        name: "Усі продукти"
    },
    {
        key: 'benches',
        name: "Лавки"
    },
    {
        key: 'sofa',
        name: "Садові лавки"
    },
    {
        key: 'chair',
        name: "Стільці"
    }
]

const Categories = ({addCategory}) => {
    return (
        <div className='categories'>
            {
                category.map(el=> (
                    <div onClick={()=>addCategory(el.key)} key={el.key}>{el.name}</div>
                ))
            }
        </div>
    );
};

export default Categories;