import React from 'react';
import "./DetailProduct.css"

const DetailProduct = ({ srcImg, title, description, price, sku, stock, cuotas }) => {  

    return (
        <div className='containerDetailProduct'>

            <div className='imgDetaildiv col-md-auto'><img src={srcImg} className='imgDetail' alt="botasdepatinartistico" /></div>
            <div className='cuerpoDetail col-md-auto'>
                <h4 className='titleDetail'>{title}</h4>
                <p className='descriptionDetail'>{description}</p>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam exercitationem aperiam, officiis quo neque mollitia? Veniam, excepturi, temporibus adipisci quod ipsum eum laborum harum ex veritatis quia velit labore.</p>
                <p className="priceDetail"><strong>Precio:</strong>{price}</p>
                <p className="skuDetail"><strong>SKU:</strong>{sku}</p>
                <p className="stockDetail"><strong>Stock disponible:</strong>{stock}</p>
                <p className='cuotas'>3 Cuotas sin interés de: {cuotas}</p>
                <a href="https://www.youtube.com/watch?v=L32XuJkPTgY&ab_channel=CreativeTutorial" className='button2' target='blank'> Añadir al carrito </a>
            </div>

        </div>
    )
}
export default DetailProduct;