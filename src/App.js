import './constants.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import {useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom'
import {data} from "./data";
import Categories from "./components/Categories/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";
import About from "./components/About";
import Contacts from "./components/Contacts";

function App() {
    const [items, setItems] = useState(data)
    const [cart, setCart] = useState([])
    const [category, setCategory] = useState(items)
    const [fullItem, setFullItem] = useState(false)
    const [modalItem, setModalItem] = useState({})

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    function increaseItemCount(item) {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
        setCart(updatedCart);
    }

    // Функція для зменшення кількості товарів
    function decreaseItemCount(item) {
        if (item.count === 1) {
            // Якщо кількість товарів = 1, то видаляємо елемент з кошика
            deleteInCart(item.id);
        } else {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
            );
            setCart(updatedCart);
        }
    }

    // Оновлена функція для додавання товарів у кошик
    function addToCart(item) {
        const existingItem = cart.find((el) => el.id === item.id);
        if (existingItem) {
            existingItem.count += 1;
            setCart([...cart]);
        } else {
            setCart((prev) => [...prev, { ...item, count: 1 }]);
        }
    }


  return (
    <div className="App container">
        <Header cart={cart} onIncrease={increaseItemCount} onDecrease={decreaseItemCount} onDelete={deleteInCart}/>
        <Routes>
            <Route path='/' element={
                <div>
                    <Categories addCategory={addCategory}/>
                    <Items items={category} onAdd={addToCart} onShowItem={onShowItem}/>
                    {fullItem && <ShowFullItem modalItem={modalItem} onAdd={addToCart} onShowItem={onShowItem}/>}
                </div>
            }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer/>
    </div>
  );

    // function addToCart (item) {
    //     let isInArray = false
    //     cart.forEach(el => {
    //         if(el.id === item.id){
    //             isInArray = true
    //         }
    //     })
    //     if(!isInArray){
    //         setCart(prev => [...prev, item])
    //     }
    // }

    function deleteInCart (id){
        setCart(prev => prev.filter(el => el.id !== id))
    }

    function addCategory (category){
        if(category === 'all'){
           return  setCategory(items)
        }

        setCategory(items.filter(el => el.category === category))
        console.log(category)
    }

    function onShowItem (item) {
        setModalItem(item)
        setFullItem(prev => !prev)
        console.log(fullItem)
    }
}

export default App;
