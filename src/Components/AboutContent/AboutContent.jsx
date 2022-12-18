import React from 'react'
import './styles.css'


const AboutContent = () => {
  return (
    <div className='about_content'>
        <div className="content_img">
            <img src="./img/about_content.jpg" alt="img" />
        </div>
        <div className="content_text">
            <div className="content_center">
                <h1 className="about_title">About us</h1>
                <p className="about_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo blanditiis, ipsa fuga dolorum eos aliquam, autem sunt, magni mollitia facilis odit repellendus recusandae officia. Laudantium dolorum cumque impedit quas, facilis reprehenderit veniam id ipsum, ex repudiandae, sint eum delectus. Facilis, eveniet?</p>
            </div>
        </div>
    </div>
  )
}

export default AboutContent