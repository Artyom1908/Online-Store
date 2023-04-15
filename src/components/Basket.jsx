import React from 'react'
import { useSelector } from 'react-redux'

function Basket() {
  const products = useSelector(store => store.products.products)
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold mb-6">Basket!</h1>
      <div>
        <div className="flex flex-wrap -mx-4">
          {products.map(product => (
            <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover bg-cover bg-center" />
              <div className="p-4">
                <a className="text-lg font-medium mb-2">{product.name}</a>
                <p className="text-gray-500 mb-4">${product.price}</p>
                <p className="text-sm">{product.description}</p>
                <p>{product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Basket