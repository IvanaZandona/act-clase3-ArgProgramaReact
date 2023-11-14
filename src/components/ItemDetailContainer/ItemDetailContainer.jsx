import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const productos = [
        { srcImg: "./img/bota1.webp", title: " Combo 1 - Patín Profesional Italiano ", description: " Bota Edea 'Rondó' - Plancha Roll-line Mistral - Ruedas Roll-line Giotto - talle 250", price: " $750.000", sku: " RD1544", stock: " 2" },
        { srcImg: "./img/bota2.jpg", title: " Combo 2 - Patín Profesional Italiano ", description: " Bota Edea 'Fly' - Plancha Roll-line Mistral - Ruedas Roll-line Giotto - talle 245", price: " $880.000", sku: " FY1545", stock: " 1" },
        { srcImg: "./img/bota3.jpeg", title: " Combo 3 - Patín Profesional Italiano ", description: " Bota Edea 'Ritmo' - Plancha Roll-line Variant M - Ruedas Roll-line Giotto - talle 255", price: " $720.000", sku: " RT1546", stock: " 3" }
    ]

    return (

        <div className='container'>
            {productos.map((prod) => (
                <ItemDetail key={prod.title} srcImg={prod.srcImg} title={prod.title} description={prod.description} price={prod.price} sku={prod.sku} stock={prod.stock} />
            ))}

        </div>


    );
}

export default ItemDetailContainer;
