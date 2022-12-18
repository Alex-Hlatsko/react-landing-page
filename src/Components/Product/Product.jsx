import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Products = ({data}) => {
  return (
    <div className='product'>
      <div className="product_img">
        <img src={data.img} alt="img" />
      </div>
      <div className="product_content">
        <div className="product_content_text">
          <h1 className="product_title">{data.title}</h1>
          <p className="product_subtitle">{data.subtitle}</p>
        </div>
        <div className="product_content_btn">
          <Link className="product_btn">{data.price}$</Link>
        </div>
      </div>
    </div>
  )
}

export default Products