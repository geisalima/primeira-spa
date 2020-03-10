import React from "react"
import { Row, Col, Card } from 'react-bootstrap'
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png'
import company_avatar2 from '../../images/company2.png'

const Home = () => (
    <Row>
        <Col lg={4}>
            <UserProfile />
        </Col>
        <Col lg={8}>
            <h5 className="subtitle">Sobre</h5>
            <Card className="p-3 mb-5">
              <div>
                <p><b>Lorem</b></p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <br/>
                <p><b>Ipsum</b></p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </Card>

            <h5 className="subtitle">Experiências</h5>
            <Experience title="Ruby Developer" company="Soundcloud" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum." avatar={company_avatar} alt="Texto alternativo 1" />

            <Experience title="React Developer" company="Twitter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum." avatar={company_avatar2} alt="Texto alternativo" />
        </Col>
    </Row>

    // <Container fluid>
    //   <Row className="bg-light py-5">
    //     <Col lg={8} className="m-auto d-flex justify-content-center align-items-center flex-column">
    //         <h1>Olá Mundo!</h1>
    //         <p className="text-center">
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //             tempor incididunt ut labore et dolore magna aliqua.
    //         </p>    
    //     </Col>
    //   </Row>
    // </Container>
);

export default Home;