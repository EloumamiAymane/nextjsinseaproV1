"use client";
import React, {useEffect} from 'react'
import {Card} from 'react-bootstrap'
import Image from "next/image";
//image
import user1 from '../../../../public/assets/images/user/01.jpg'
import user2 from '../../../../public/assets/images/user/02.jpg'
import user3 from '../../../../public/assets/images/user/03.jpg'
import user4 from '../../../../public/assets/images/user/04.jpg'
import user5 from '../../../../public/assets/images/user/11.jpg'
import user6 from '../../../../public/assets/images/user/12.jpg'

const RightSidebar = () => {
    let minirightsidebar;

    useEffect(() => {
        minirightsidebar =() =>{
            document.getElementById('rightSidebar').classList.toggle('right-sidebar');
            document.body.classList.toggle('right-sidebar-close');
        }
    }, []);

    return (
        <>
            <div className="right-sidebar-mini" id="rightSidebar">
                <div className="right-sidebar-panel p-0">
                    <Card className="shadow-none">
                        <Card.Body className="p-0">
                            <div className="media-height p-3" data-scrollbar="init">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user1} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Anna Sthesia</h6>
                                        <p className="mb-0">Just Now</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user2} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Paul Molive</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user3} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Anna Mull</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user4} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Paige Turner</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user5} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Bob Frapples</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user2} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Barb Ackue</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user3} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Greta Life</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-away">
                                        <Image className="rounded-circle avatar-50" src={user6} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Ira Membrit</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-away">
                                        <Image className="rounded-circle avatar-50" src={user1} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Pete Sariya</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="iq-profile-avatar status-online">
                                        <Image className="rounded-circle avatar-50" src={user2} alt="" loading="lazy"/>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Monty Carlo</h6>
                                        <p className="mb-0">Admin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-sidebar-toggle bg-primary text-white mt-3 d-flex" onClick={minirightsidebar}>
                              <span className="material-symbols-outlined">chat</span>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            
        </>
    )
}

export default RightSidebar
