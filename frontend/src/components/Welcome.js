import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Welcome.css';
import welcomeImage from '../assets/welcome1.png';
import nature1 from '../assets/natural1.jpg';
import pharm1 from '../assets/pharmacy.jpg';
import skincare1 from '../assets/skincare.jpg';
import pharm2 from '../assets/pharmacy2.jpg';
import skincare2 from '../assets/skincare2.jpg';
import nature2 from '../assets/natural2.jpg';


const Styles = styled.div `
    .jumbo {
        background: url(${welcomeImage});
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        z-index: -2;
        margin: 2px;
    }
`;

export const Home = () => {
    return (
        <Styles>
            <Jumbotron fluid className="jumbo">
                <div className="overlay"></div>
                   <Container>
                        <h1 className="display-2">Welcome to <br/> Sapphire Pharmacy</h1>
                    </Container>
            </Jumbotron>
        </Styles>
 
    )  
}

class Carol extends React.Component{

    render(){
        return(
           <div className="carol">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={nature1}
                        alt="First slide"
                        />
                        <Carousel.Caption className="carol-caption">
                        <h3>“I believe that for every illness or ailment known to man, that God has a plant out here that will heal it. 
                            We just need to keep discovering the properties for natural healing.”</h3>
                        <p>Vannoy Gentles Fite</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img
                        className="d-block w-100"
                        src={pharm1}
                        alt="Second slide"
                        />
                        <Carousel.Caption className="carol-caption">
                        <h3>New Prescriptions and Refills made easy. Order through this site, or through our mobile app.</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={skincare1}
                        alt="Third slide"
                        />
                        <Carousel.Caption className="carol-caption">
                        <h3>Skin care is an essential component to a healty life. We offer the latest products to bring your skin to life.</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           </div>
        )  
    }
}

class CardSection extends React.Component{

    render(){
        return(
           <div className="card">
             <CardDeck>
                <Card className="left-card">
                    <Card.Img variant="top" src={pharm2} className="card-img-top"/>
                    <Card.Body>
                    <Card.Title>Pharmacy</Card.Title>
                    <Card.Text>
                    <p className="card-text">Come take care of your prescription needs with our friendly and well educated staff.</p>
                    <Link to={"/pharmacy"} className="btn btn-outline-primary">Prescriptions</Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className="middle-card">
                    <Card.Img variant="top" src={skincare2} className="card-img-top"/>
                    <Card.Body>
                    <Card.Title>Skin Care</Card.Title>
                    <Card.Text>
                    <p className="card-text">Develop a healthy routine of taking care of your skin with our products. We will help your skin glow.</p>
                    <Link to={"/"} className="btn btn-outline-success">Beauty Products</Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="right-card">
                    <Card.Img variant="top" src={nature2} className="card-img-top"/>
                    <Card.Body>
                    <Card.Title>Natural Medicines</Card.Title>
                    <Card.Text>
                    <p className="card-text">Discover a natural alternative to traditional medinces. Explore our natural oils and herbs today.</p>
                    <Link to={"/"} className="btn btn-outline-danger">Nature's Remedy</Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
           </div>
        )  
    }
}



export default () => {
    return(
      <>
        <Home />
        <Carol />
        <CardSection />
      </>
    )
  }