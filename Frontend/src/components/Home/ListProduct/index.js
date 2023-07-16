import "../style.scss";
import 'animate.css';
import { useSpring, animated } from '@react-spring/web'
import React, { useState, useEffect } from 'react'
import Icon from '@mdi/react';
import { mdiTruckDelivery } from '@mdi/js';
import { mdiPhoneInTalk } from '@mdi/js';
import { mdiReload } from '@mdi/js';
import { mdiCog } from '@mdi/js';
export const ListProduct = () => {
    return (
        <div className="container list-product mt-5">
            <div className="hstack gap-2 gap-xl-5 justify-content-center mt-3 list-service">
                <div className="d-flex">
                    <div className="icon-service"><Icon path={mdiTruckDelivery} size={2} /></div>
                    <div>
                        <p className="service-name">Free Shipping</p>
                        <p className="ab">Lorem ipsum is simply</p>
                    </div>
                </div>
                <div className="vr"></div>
                <div className="d-flex">
                    <div className="icon-service">
                        <Icon path={mdiPhoneInTalk} size={2} />
                    </div>
                    <div>
                        <p className="service-name">Online Support</p>
                        <p className="ab">Lorem ipsum is simply</p>
                    </div>
                </div>
                <div className="vr"></div>
                <div className="d-flex">
                    <div className="icon-service"><Icon path={mdiReload} size={2} /></div>
                    <div>
                        <p className="service-name">Money Back</p>
                        <p className="ab">Lorem ipsum is simply</p>
                    </div>
                </div>
                <div className="vr"></div>
                <div className="d-flex">
                    <div className="icon-service"><Icon path={mdiCog} size={2} /></div>
                    <div>
                        <p className="service-name">Ours Services</p>
                        <p className="ab">Lorem ipsum is simply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}