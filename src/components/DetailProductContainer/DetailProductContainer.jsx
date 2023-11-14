import React from 'react';
import DetailProduct from '../DetailProduct/DetailProduct';
import "./DetailProductContainer.css"

const DetailProductContainer = () => {
    const productos = [
        { srcImg: "./img/bota1.webp", title: " Combo 1 - Patín Profesional Italiano ", description: " Bota Edea 'Rondó' - Plancha Roll-line Mistral - Ruedas Roll-line Giotto - talle 250", price: " $750.000", sku: " RD1544", stock: " 2", cuotas: " $250.000" },
        { srcImg: "./img/bota2.jpg", title: " Combo 2 - Patín Profesional Italiano ", description: " Bota Edea 'Fly' - Plancha Roll-line Mistral - Ruedas Roll-line Giotto - talle 245", price: " $880.000", sku: " FY1545", stock: " 1", cuotas: " $293.334" }
    ]

    return (

        <div className='containerDetail'>
            {productos.map((prod) => (
                <DetailProduct key={prod.title} srcImg={prod.srcImg} title={prod.title} description={prod.description} price={prod.price} sku={prod.sku} stock={prod.stock} cuotas={prod.cuotas} />
            ))}

        </div>


    );
}

export default DetailProductContainer;