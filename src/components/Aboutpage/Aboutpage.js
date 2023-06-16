import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Full stack developer from India. Curious to learn more about developing scalable distribution systems, eager to learn, love problem solving, and care about writing and maintainable code. Moreover a good adventurer who likes to explore the new things and passionate about the Sports and Bike Riding.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript</li>
                                    <li>MongoDb</li>
                                    <li>Bootstrap</li>
                                    <li>ReactJs</li>
                                    <li>Kafka(intermediate)</li>
                                </Col>
                                <Col md={5}>
                                    <li>Java</li>
                                    <li>Spring, SpringBoot</li>
                                    <li>Docker</li>
                                    <li>Kubernetes</li>
                                    <li>SQL</li>
                                    <li>TestNG,Cucumber</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage