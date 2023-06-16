import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Rohith Kumar G S</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/rohith45kumar");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
               <button onClick={() => {
              window.open("https://www.facebook.com/profile.php?id=100025018690750");
            }}
              className='socailmediabtn'><AiFillFacebook className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/rohith-kumar-g-s-46a914171/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://twitter.com/RohithKumarGS1?t=ktpgvZggCvYuSpV6fikTfw&s=08");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com/r_o_h_i_t_h__04/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home