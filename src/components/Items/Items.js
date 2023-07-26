import React, {useState} from 'react';
import Item from "./Item";
import './Items.scss';

const Items = ({items, onAdd, onShowItem}) => {
    const itemsPerPage = 10; // Кількість елементів на сторінці
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentData = items.slice(startIndex, endIndex);

    return (
        <>
            <main>
                {currentData.map((item) => (
                    <Item key={item.id} item={item} onAdd={onAdd} onShowItem={onShowItem}/>
                ))}

            </main>
            <div className="pagination_wrapper">
                <ul className="pagination">
                    {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
                        <li key={page}>
                            <button
                                className={currentPage === page ? "active" : ""}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
        ;
};

export default Items;