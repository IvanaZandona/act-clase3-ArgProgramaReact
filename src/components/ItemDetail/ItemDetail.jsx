import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ srcImg, title, description, price, sku, stock }) => {

    return (
            <div>

                <div className="card espaciocard col-12 col-md-6 col-lg-4 col-xl-4">
                    <img src={srcImg} className="card-img-top" alt="botasdepatinartistico" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p><strong>Precio:</strong>{price}</p>
                        <p><strong>SKU:</strong>{sku}</p>
                        <p><strong>Stock disponible:</strong>{stock}</p>
                        <a href="https://www.youtube.com/watch?v=L32XuJkPTgY&ab_channel=CreativeTutorial" className="button" target='blank'>
                             Ver más 
                        </a>
                    </div>
                </div>

            </div>
    );

}

export default ItemDetail;