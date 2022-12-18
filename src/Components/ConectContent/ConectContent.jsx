import React from 'react'
import './styles.css'


const ConectContent = () => {
  return (
    <div className='about_content'>
        <div className="content_img">
            <img src="./img/conect_content.jpg" alt="img" />
        </div>
        <div className="content_text">
            <div className="content_center">
                <h1 className="about_title">Contact us</h1>
                <p className="about_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo blanditiis, ipsa fuga dolorum eos aliquam, autem sunt, magni mollitia facilis odit repellendus recusandae officia. Laudantium dolorum cumque impedit quas, facilis reprehenderit veniam id ipsum, ex repudiandae, sint eum delectus. Facilis, eveniet?</p>
                <div className="conect_subtitle">
                    <img src="./img/phone.svg" alt="phone" />
                    <p>+123 1234 1212 24</p>
                </div>
                <div className="conect_subtitle">
                    <img src="./img/email.svg" alt="phone" />
                    <p>example@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConectContent