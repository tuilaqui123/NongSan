import React, { useState, createContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const params = useParams()

    const [breadcrumb, setBreadcrumb] = useState({
        main: "",
        second: "",
        child: 0,
    })

    const [farms, setFarms] = useState([])
    const [items, setItems] = useState([])
    const [order, setOrder] = useState([])
    const [cart, setCart] = useState([])
    // const [order, setOrder] = useState(() => {
    //     const savedOrder = localStorage.getItem('order')
    //     return savedOrder ? JSON.parse(savedOrder) : []
    // })
    // const [cart, setCart] = useState(() => {
    //     const savedCart = localStorage.getItem('cart')
    //     return savedCart ? JSON.parse(savedCart) : []
    // });

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(cart))
    // }, [cart])

    // useEffect(() => {
    //     localStorage.setItem('order', JSON.stringify(order))
    // }, [order])

    //farm
    const fetchFarm = () => {
        axios.get("http://localhost:8082/farms")
            .then((res) => {
                setFarms(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    //cart
    const fetchCart = (customerId) => {
        axios.get("http://localhost:8082/carts/6659770a93ff789d47918207")
        .then((res) => {
            setCart(res.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    //item
    const fetchItem = () => {
        axios.get("http://localhost:8082/items")
            .then((res) => {
                setItems(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchFarm()
        fetchItem()
        fetchCart()
    }, [])

    return <AppContext.Provider value={{
        breadcrumb, setBreadcrumb,
        farms, setFarms, fetchFarm,
        items, setItems, fetchItem,
        cart, setCart, fetchCart,
        order, setOrder
    }}>
        {children}
    </AppContext.Provider>
}