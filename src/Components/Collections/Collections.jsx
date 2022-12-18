import React from 'react'
import './styles.css'
import Collection from '../Collection/Collection'

const Collections = () => {
  const data = [
    {
      id: "1",
      title: "Bouquet",
      subtitle: "Heart like a flower. It must open itself",
      img: "./img/homecoll1.jpg"
    },
    {
      id: "2",
      title: "Houseplants",
      subtitle: "Care and work work wonders",
      img: "./img/homecoll2.jpg"
    },
    {
      id: "3",
      title: "For the garden",
      subtitle: "Paradise in your garden",
      img: "./img/homecoll3.jpg"
    }
  ];
  return (
    <>
    <h1 className="collections_title">What are you looking for?</h1>
    <div className="collections">
      {data.map(d => (<Collection key={d.id} data={d}/>))}
    </div>
    </>
  )
}

export default Collections