import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../Store/slices/productSlice';
function Home() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("http://localhost:3031/products")
            .then(res => setProducts(res.data))
    }, [])

    function AddCount(product) {
        setProducts((prevProducts) => {
            const index = prevProducts.findIndex((p) => p.id === product.id);
            const newProducts = [...prevProducts];
            if (newProducts[index].quantity > 0) {
                newProducts[index].quantity--;
                dispatch(addItem({ ...product, quantity: newProducts[index].quantity }));
                console.log(newProducts);
            }
            else alert('sold out')
            return newProducts;
        });
    }
    function RemoveCount(product) {
        setProducts((prevProducts) => {
            const index = prevProducts.findIndex((p) => p.id === product.id);
            const newProducts = [...prevProducts];
            if (newProducts[index].quantity > 0) {
                dispatch(removeItem(product.id));
            }
            return newProducts;
        });
    }


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold mb-6">Welcome to My Online Store!</h1>
            <div>
                <div className="flex flex-wrap -mx-4">
                    {products.map(product => (
                        <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover bg-cover bg-center" />
                            <div className="p-4">
                                <a className="text-lg font-medium mb-2">{product.name}</a>
                                <p className="text-gray-500 mb-4">${product.price}</p>
                                <p className="text-sm">{product.description}</p>

                                <div className="flex items-center mt-4">
                                    <button className="hover:bg-gray-300 bg-gray-200 px-2 py-1 rounded-l" onClick={() => RemoveCount(product)}>
                                        -
                                    </button>
                                    <span className="mx-2">{product.quantity}</span>
                                    <button className="hover:bg-gray-300 bg-gray-200 px-2 py-1 rounded-r" onClick={() => AddCount(product)}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
