import React from 'react'
import './styles.css'
import Product from '../Product/Product'

const Products = () => {

  const bouquets = [
    {
      id: "1",
      title: "Roses",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/bouquet1.jpg",
      price: 80
    },
    {
      id: "2",
      title: "Lilies",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/bouquet2.jpg",
      price: 20
    },
    {
      id: "3",
      title: "Spring hope",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/bouquet3.jpg",
      price: 50
    }
  ];

  const pots = [
    {
      id: "4",
      title: "Сactus jungle",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/pots1.jpg",
      price: 120
    },
    {
      id: "5",
      title: "Tropical leaf",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/pots2.jpg",
      price: 100
    },
    {
      id: "6",
      title: "Thorny bush",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/pots3.jpg",
      price: 140
    }
  ];

  const gardens = [
    {
      id: "7",
      title: "Lonely beach",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/garden1.jpg",
      price: 280
    },
    {
      id: "8",
      title: "Big leaf",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/garden2.jpg",
      price: 350
    },
    {
      id: "9",
      title: "Сactus jungle",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.",
      img: "./img/garden3.jpg",
      price: 300
    }
  ];
  return (
    <>
      <h1 className='products_title'>Bouquets</h1>
      <div className="products">
        {bouquets.map(b => (<Product key={b.id} data={b}/>))}
      </div>
      <h1 className='products_title'>Houseplants</h1>
      <div className="products">
        {pots.map(p => (<Product key={p.id} data={p}/>))}
      </div>
      <h1 className='products_title'>For the garden</h1>
      <div className="products">
        {gardens.map(g => (<Product key={g.id} data={g}/>))}
      </div>

    </>
  )
}


export default Products