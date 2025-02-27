import React, { useState, useEffect } from 'react';

function InventoryList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de productos
    const mockProducts = [
      { id: 1, name: 'Producto 1', quantity: 10 },
      { id: 2, name: 'Producto 2', quantity: 5 },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div>
      <h2>Inventario Completo</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - Cantidad: {product.quantity}</li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;