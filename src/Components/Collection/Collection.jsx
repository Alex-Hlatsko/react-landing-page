import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Collection = ({data}) => {
  return (
    <>
    <Link to="/store#bouquet">
        <div className='collection'>
            <div className="collection_bg">
                <img src={data.img} alt="img" />
            </div>
            <div className="collection_content">
                <h1 className="collection_title">{data.title}</h1>
                <h1 className="collection_subtitle">{data.subtitle}</h1>
            </div>
        </div>
    </Link>
    </>
  )
}

export default Collection