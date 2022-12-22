import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import logo1 from './assets/Vector.svg';
import logo2 from './assets/Vector2.svg';
import logo3 from './assets/Vector3.svg';
import logo4 from './assets/Vector4.svg';
import logo5 from './assets/Vector5.svg';

import logo6 from './assets/card-icon1.svg';
import logo7 from './assets/card-icon2.svg';
import logo8 from './assets/card-icon3.svg';

import logo9 from './assets/card-icon4.svg';
import logo10 from './assets/card-icon5.svg';
import logo11 from './assets/card-icon6.svg';


import playIcon from './assets/play-icon.svg';

import sec4Icon1 from './assets/Group427319639.svg';
import sec4Icon2 from './assets/Group427319640.svg';
import sec4Icon3 from './assets/Group427319641.svg';

import card2Icon1 from './assets/c2o1.svg';
import card2Icon2 from './assets/Group 427319638.svg';
import card2Icon3 from './assets/Group 427319635.svg';
import card2Icon4 from './assets/Group 427319636.svg';

import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App1">
      
      <div className='section1'>
        <Navbar />
        <div className='d-flex justify-content-between w-100'>
          <div className='sec1-left'></div>
          <div className='sec1-right'></div>
        </div>
        <div className='sec1-title'>
          <h1>Your Business is Our <br /> Responsibility</h1>
          <div className='w-100 text-center mt-5 pt-4' style={{background: 'transparent'}}>
            <button className='btn-getstarted'>Get Started</button>
            <button className='btn-learnmore'>Learn More</button>
          </div>
        </div>
        

      </div>
        <div className='overlay-sec1'>
          <div className='overlay-box'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>

          <div className='overlay-box'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>

          <div className='overlay-box'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>

          <div className='overlay-box'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>

          <div className='overlay-box'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>
          <div className='overlay-box2'></div>

          <div className='overlay-boxx'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          <div className='overlay-box3'></div>
          
        </div>

      <div className='section2 pt-5'>
        <h2 className='sec2-heading pt-4 mt-3'>Partners & Integrations</h2>
        {/* <div className='margin-div50'></div> */}
        <div className='w-100 '>
          <ul className='sec2-ul mt-5 pt-3'>
            <li><img src={logo1} /></li>
            <li><img src={logo2} /></li>
            <li><img src={logo3} /></li>
            <li><img src={logo4} /></li>
            <li><img src={logo5} /></li>
          </ul>
        </div>
        <h2 className='sec2-heading2'>Blockchain Solution</h2>
        <p className='text-style1'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris <br /> pellentesque nec quam ac molestie.</p>
        <Container className='margin-top60'>
          <Row className='px-5'>
            <Col md={4}>
              <div className='sec3-cards'>
                <img src={logo6} />
                <h3 className='text-style2'>24/7 Support</h3>
                <p className='text-style3'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellente sque nec quam ac molestie.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='sec3-cards'>
                <img src={logo7} />
                <h3 className='text-style2'>Advanced Platform</h3>
                <p className='text-style3'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellente sque nec quam ac molestie.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className='sec3-cards'>
                <img src={logo8} />
                <h3 className='text-style2'>High Performance</h3>
                <p className='text-style3'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellente sque nec quam ac molestie.</p>
              </div>
            </Col>


            <Col md={4}>
              <div className='sec3-cards mt-5'>
                <img src={logo9} />
                <h3 className='text-style2'>Competitive Commisions</h3>
                <p className='text-style3'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellente sque nec quam ac molestie.</p>
              </div>
            </Col>

            <Col md={4}>
              <div className='sec3-cards mt-5'>
                <img src={logo10} />
                <h3 className='text-style2'>Good Investment</h3>
                <p className='text-style3'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellente sque nec quam ac molestie.</p>
              </div>
            </Col>

            <Col md={4}>
              <div className='sec3-cards mt-5'>
                <img src={logo11} />
                <h3 className='text-style2'>Reliable Order Execution</h3>
                <p className='text-style3'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. Mauris pellente sque nec quam ac molestie.</p>
              </div>
            </Col>


          </Row>
        </Container>
      </div>

      <div className='section3'>
        <div className='sec3-video'>
          <div className='w-100 vid-i-div'>
            <div className='vid-i'></div>
            <div className='vid-i vid-ii'></div>
            <div className='vid-i vid-iii'></div>
          </div>
          <div className='nesteddiv-sec3'>
            <div className='text-style4'>Play Video <img src={playIcon} className="play-icon" /></div>
          </div>          
        </div>
      </div>

      <div className='section4'>
         <Container>
          <Row className='px-5'>
            <Col md={4}>
              <div>
                <img src={sec4Icon1} />
                <h3 className='text-style5'>Cryptocurrency <br />Accounts</h3>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img src={sec4Icon2} />
                <h3 className='text-style5'>Reward and Loyalty <br />Programs</h3>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <img src={sec4Icon3} />
                <h3 className='text-style5'>Enhanced Interest <br />Payments</h3>
              </div>
            </Col>
          </Row>
          <Row className='px-5'>
            <Col md={6}>
              <div className='sec4-nested-left'>
                <h2 className='text-style7'>We provide various service to help you</h2>
                <p className='text-style8'>Mauris placerat viverra nisl, eu pretium mauris bibendum a. <br /> Mauris pellentesque nec quam ac molestie.</p>
              </div>
              <div className='sec4-nest-leftdiv'>
              </div>
            </Col>
            <Col md={6}>
              <div className='sec4-nest-rightdiv'>
                
                <div className='card-t2'>
                  <img src={card2Icon1} />
                  <h2 className="text-style9">Free Contract Access</h2>
                  <p className='text-style10'>To get experience or profit, initially we offer free contract where you can get 3-4% of profit per month, freely. In order to achive 4-10% of profit, you are required to start a contract.</p>
                </div>

                <div className='card-t2'>
                  <img src={card2Icon2} />
                  <h2 className="text-style9">Structured Solutions</h2>
                  <p className='text-style10'>We design and constructs a wide variety of solutions form-fitted to client objectives, from risk management to cashflow optimization and more.</p>
                </div>

                <div className='card-t2'>
                  <img src={card2Icon3} />
                  <h2 className="text-style9">Invest & Trade</h2>
                  <p className='text-style10'>We deliver bold solutions on a platform that is purpose-built for cryptocurrency's uniqueproperties and your compliance needs.</p>
                </div>

                <div className='card-t2'>
                  <img src={card2Icon4} />
                  <h2 className="text-style9">Assets Management</h2>
                  <p className='text-style10'>Serving institutions, corporations, and high net worth investors, we offer private funds, separately managed accounts, and bespoke vehicles across a wide range of strategies.</p>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='section5'>
        
      </div>
    </div>
  );
}

export default App;
