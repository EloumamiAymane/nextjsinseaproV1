import React from 'react'
import {Row, Col, Container, Form, Button, Image} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'


//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
// import 'swiper/components/navigation/navigation.scss';

//img
import logo from '../../../assets/images/logo-full.png'
import login1 from '../../../assets/insea/insea-img1.jpg'
import login2 from '../../../assets/insea/insea-img2.jpg'
import login3 from '../../../assets/insea/insea-img3.jpeg'
import insea from "../../../assets/images/insea.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

const SignIn = () => {
   let history =useNavigate()
   return (
      <>
         <section className="sign-in-page">
            <div id="container-inside">
               <div id="circle-small"></div>
               <div id="circle-medium"></div>
               <div id="circle-large"></div>
               <div id="circle-xlarge"></div>
               <div id="circle-xxlarge"></div>
            </div>
            <Container className="p-4">
               <Row className="no-gutters" >
                  <Col md="6" className="text-center  ">
                     <div className="sign-in-detail text-white">
                        <div className="sign-slider overflow-hidden swipper">
                           <div className="bg-white  m-auto "
                                style={{
                                   padding: "15px 20px",
                                   borderRadius: "100px",
                                   border: "1px solid #000",
                                   width: "100px"
                                }}>
                              <Image src={insea} width={65} height={65} alt="logo"/>

                           </div>
                           <h4 className="m-3" style={{color: "#fff", fontSize: "22px",fontFamily:"cursive"}}>INSEA PRO</h4>
                           <Swiper
                               spaceBetween={30}
                               centeredSlides={true}
                               autoplay={{
                                  "delay": 2000,
                                  "disableOnInteraction": false
                               }}
                               className="list-inline m-0 p-0 ">
                              <SwiperSlide>
                                 <Image src={login1} className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Find new friends</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable
                                    content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image src={login2} className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Connect with the world</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable
                                    content.</p>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image src={login3} className="img-fluid mb-4" alt="logo"/>
                                 <h4 className="mb-1 text-white">Create new events</h4>
                                 <p>It is a long established fact that a reader will be distracted by the readable
                                    content.</p>
                              </SwiperSlide>
                           </Swiper>
                        </div>
                     </div>
                  </Col>
                  <Col md="6" className="bg-white  pt-5 pb-lg-0 pb-5 mt-4 rounded-5 custom-col-height">
                     <div className="sign-in-from">
                        <Row className="flex-column justify-content-center">
                           <Col><h1 className="text-center">Sign in</h1></Col>
                           <Col>
                              <Button type="button"
                                      className="rounded-5 w-auto text-center "
                                      style={{backgroundColor: "#0077B5", marginTop: "18px", marginLeft: "30px",border:"none"}}
                                     onClick={() => history.push('/')}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 448 512"
                                     width="16"
                                     fill="currentColor"
                                     className="mx-2 mb-2">
                                   <path
                                       d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                </svg>
                                <span style={{fontSize: "16px",margin:"10px"}}>Se connecter Avec Linkedin</span>
                             </Button>
                          </Col>
                           <Col className="d-flex align-items-center mt-4">
                              <hr className="flex-grow-1 mx-2"/>
                              <span style={{fontSize:"15px"}}>ou</span>
                              <hr className="flex-grow-1 mx-2"/>
                           </Col>


                        </Row>
                        {/*<p>Enter your email address and password to access admin panel.</p>*/}
                        <Form className="mt-4">
                           <Form.Group className="form-group">
                              <Form.Label>Email address</Form.Label>
                              <Form.Control type="email" className="mb-0" id="exampleInputEmail1"
                                            placeholder="Enter email"/>
                           </Form.Group>
                           <Form.Group className="form-group">
                              <Form.Label>Password</Form.Label>
                              <Link to="/auth/recoverpw" className="float-end">Forgot password?</Link>
                              <Form.Control type="password" className="mb-0" id="exampleInputPassword1"
                                            placeholder="Password"/>
                           </Form.Group>
                           <div className="d-inline-block w-100">
                              <Form.Check className="d-inline-block mt-2 pt-1">
                                 <Form.Check.Input type="checkbox" className="me-2" id="customCheck11"/>
                                 <Form.Check.Label>Remember Me</Form.Check.Label>{' '}
                              </Form.Check>
                              <Button variant="primary" type="button"  className="float-end" onClick={() => history.push('/')}>Sign in</Button>
                           </div>
                           <div className="sign-info">
                              <span className="dark-color d-inline-block line-height-2">
                                 Don't have an account?
                                 <Link to="/auth/sign-up">Sign up</Link></span>
                              {/*   <ul className="iq-social-media">*/}
                              {/*      <li>*/}
                              {/*         <Link to="#">*/}
                              {/*            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18"  viewBox="0 0 16 16" fill="currentColor">*/}
                              {/*               <title>facebook</title>*/}
                              {/*               <path d="M15 16h-14c-0.553 0-1-0.447-1-1v-14c0-0.553 0.447-1 1-1h14c0.553 0 1 0.447 1 1v14c0 0.553-0.447 1-1 1zM14 2h-12v12h12v-12zM8 6c0-1.103 0.912-2 1.857-2h1.143v2h-1v1h1v2h-1v3h-2v-3h-1v-2h1v-1z"></path>*/}
                              {/*            </svg>*/}
                              {/*         </Link>*/}
                              {/*      </li>*/}
                              {/*      <li>*/}
                              {/*      <Link to="#">*/}
                              {/*         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18"  viewBox="0 0 24 24" fill="currentColor">*/}
                              {/*            <title>twitter</title>*/}
                              {/*            <path d="M20.833 5.262c-0.186 0.242-0.391 0.475-0.616 0.696-0.233 0.232-0.347 0.567-0.278 0.908 0.037 0.182 0.060 0.404 0.061 0.634 0 5.256-2.429 8.971-5.81 10.898-2.647 1.509-5.938 1.955-9.222 1.12 1.245-0.361 2.46-0.921 3.593-1.69 0.147-0.099 0.273-0.243 0.352-0.421 0.224-0.505-0.003-1.096-0.508-1.32-2.774-1.233-4.13-2.931-4.769-4.593-0.417-1.084-0.546-2.198-0.52-3.227 0.021-0.811 0.138-1.56 0.278-2.182 0.394 0.343 0.803 0.706 1.235 1.038 2.051 1.577 4.624 2.479 7.395 2.407 0.543-0.015 0.976-0.457 0.976-1v-1.011c-0.002-0.179 0.009-0.357 0.034-0.533 0.113-0.806 0.504-1.569 1.162-2.141 0.725-0.631 1.636-0.908 2.526-0.846s1.753 0.463 2.384 1.188c0.252 0.286 0.649 0.416 1.033 0.304 0.231-0.067 0.463-0.143 0.695-0.228zM22.424 2.183c-0.74 0.522-1.523 0.926-2.287 1.205-0.931-0.836-2.091-1.302-3.276-1.385-1.398-0.097-2.836 0.339-3.977 1.332-1.036 0.901-1.652 2.108-1.83 3.372-0.037 0.265-0.055 0.532-0.054 0.8-1.922-0.142-3.693-0.85-5.15-1.97-0.775-0.596-1.462-1.309-2.034-2.116-0.32-0.45-0.944-0.557-1.394-0.237-0.154 0.109-0.267 0.253-0.335 0.409 0 0-0.132 0.299-0.285 0.76-0.112 0.337-0.241 0.775-0.357 1.29-0.163 0.722-0.302 1.602-0.326 2.571-0.031 1.227 0.12 2.612 0.652 3.996 0.683 1.775 1.966 3.478 4.147 4.823-1.569 0.726-3.245 1.039-4.873 0.967-0.552-0.024-1.019 0.403-1.043 0.955-0.017 0.389 0.19 0.736 0.513 0.918 4.905 2.725 10.426 2.678 14.666 0.261 4.040-2.301 6.819-6.7 6.819-12.634-0.001-0.167-0.008-0.33-0.023-0.489 1.006-1.115 1.676-2.429 1.996-3.781 0.127-0.537-0.206-1.076-0.743-1.203-0.29-0.069-0.58-0.003-0.807 0.156z"></path>*/}
                              {/*         </svg>*/}
                              {/*      </Link>*/}
                              {/*      </li>*/}
                              {/*      <li>*/}
                              {/*      <Link to="#">*/}
                              {/*         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18"  viewBox="0 0 24 28" fill="currentColor" >*/}
                              {/*         <title>instagram</title>*/}
                              {/*         <path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM18.156 14c0 3.406-2.75 6.156-6.156 6.156s-6.156-2.75-6.156-6.156 2.75-6.156 6.156-6.156 6.156 2.75 6.156 6.156zM19.844 7.594c0 0.797-0.641 1.437-1.437 1.437s-1.437-0.641-1.437-1.437 0.641-1.437 1.437-1.437 1.437 0.641 1.437 1.437zM12 4.156c-1.75 0-5.5-0.141-7.078 0.484-0.547 0.219-0.953 0.484-1.375 0.906s-0.688 0.828-0.906 1.375c-0.625 1.578-0.484 5.328-0.484 7.078s-0.141 5.5 0.484 7.078c0.219 0.547 0.484 0.953 0.906 1.375s0.828 0.688 1.375 0.906c1.578 0.625 5.328 0.484 7.078 0.484s5.5 0.141 7.078-0.484c0.547-0.219 0.953-0.484 1.375-0.906s0.688-0.828 0.906-1.375c0.625-1.578 0.484-5.328 0.484-7.078s0.141-5.5-0.484-7.078c-0.219-0.547-0.484-0.953-0.906-1.375s-0.828-0.688-1.375-0.906c-1.578-0.625-5.328-0.484-7.078-0.484zM24 14c0 1.656 0.016 3.297-0.078 4.953-0.094 1.922-0.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656 0.094-3.297 0.078-4.953 0.078s-3.297 0.016-4.953-0.078c-1.922-0.094-3.625-0.531-5.031-1.937s-1.844-3.109-1.937-5.031c-0.094-1.656-0.078-3.297-0.078-4.953s-0.016-3.297 0.078-4.953c0.094-1.922 0.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-0.094 3.297-0.078 4.953-0.078s3.297-0.016 4.953 0.078c1.922 0.094 3.625 0.531 5.031 1.937s1.844 3.109 1.937 5.031c0.094 1.656 0.078 3.297 0.078 4.953z" ></path>*/}
                              {/*         </svg>*/}
                              {/*      </Link>*/}
                              {/*      </li>*/}
                              {/*</ul>*/}
                           </div>
                        </Form>
                     </div>
                  </Col >
               </Row>
            </Container>
         </section>   
      </>
   )
}

export default SignIn
