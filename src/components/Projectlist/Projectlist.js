import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import myportfolio from '../../Assets/myportfolio.png'
import creditcard from '../../Assets/creditcard.jpg'
import arduino from '../../Assets/arduino.jpg'
import mt4 from '../../Assets/mt4.jpg'
import payments from '../../Assets/payments.jpeg'

import shopping from '../../Assets/shopping.png'
// import netfliximage from '../../Assets/React-App-netflix-clone.png'
// import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
// import charlespizza from '../../Assets/Charlestown-Pizza.png'
// import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={myportfolio}
                isBlog={false}
                title="Portfolio"
                description="Responsive portfolio using the HTML, CSS and JavaScript. This is my first web project I build this webpage after self-learning the frontend technologies like HTML,CSS and JavaScript on my own to test my knowledge on the frontend technology and this was the output of my learning."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shopping}
                isBlog={false}
                title="Online-Shopping"
                description="This is a shopping web application which is build by using the spring MVC and which follows the MVC achitecture. This app is similar to that of other online shopping apps which is used for searching the items in the store and ordering the items."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={creditcard}
                isBlog={false}
                title="Credit Card Validation"
                description="This is a simple project that uses the Luhn's algorithm to validate the user's credit card number by using C++, I build this project after gaining the hands on knowledge on C++."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={arduino}
                isBlog={false}
                title="Line Follower Robot"
                description="This is my graduation project which is build by using the Arduino UNO, It is an automated guided vehicle, which follows a visual line embedded on the floor or ceiling"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={mt4}
                isBlog={false}
                title="MT4"
                description="This is my first project in IG after joining as a graduate trainee, Where I worked on the Automation Testing and got the knowledge on the technology skills like Java, TestNG, Maven as well as on the Bamboo, Jenkins and Git. And I also be the part of MT4 development where I worked on the Margin service which is a small part of the MT4 application."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={payments}
                isBlog={false}
                title="Payments"
                description="After joining IG, I also got a chance to work on payments testing team also where I had got a good experience on working and learning the technologies like Spring, Rest Template, Cucumber and Junit."

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist