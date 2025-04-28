'use client';

import { useState } from "react";
import styles from './component.module.css';
import Img from "@/components/image/image";

const Header = ({ setCurrent }) => {

    const [ closeHover, setCloseHover ] = useState('');
    const [ sendFeedbackHover, setSendFeedbackHover ] = useState('');

    const top2Hover = (target, enter) => target.parentElement
        .children[0].style.background = enter ? '#fff' : 'none';

    const hoverIn = (setter) => setter('hover-');
    const hoverOut = (setter) => setter('');

    return (
        <div className={styles.header}>
            <section className={styles.top}>
                <h3>File name</h3>

                <p className={styles.savedAsPrivate}>Saved as private</p>

                <div>
                    <div onMouseEnter={() => hoverIn(setSendFeedbackHover)}
                        onMouseLeave={() => hoverOut(setSendFeedbackHover)}>
                        <Img props={[ `/svg/studio/upload-videos/${sendFeedbackHover}send-feedback.png`,
                            18, 22, 'send-feedback' ]}/>
                    </div>
                    <div onMouseEnter={() => hoverIn(setCloseHover)}
                        onMouseLeave={() => hoverOut(setCloseHover)}
                        onClick={() => setCurrent('')}
                    >
                        <Img props={[ `/svg/studio/upload-videos/${closeHover}close.png`,
                            18, 18, 'close' ]}/>
                    </div>
                </div>
            </section>

            <section className={styles.top2}>

                {

                    [ 'Details', 'Video elements', 'Checks', 'Visibility' ]
                        .map(topic => 

                            <div onMouseEnter={e => top2Hover(e.target, 1)}
                                onMouseLeave={e => top2Hover(e.target, 0)} key={topic}>

                                <span></span>
                                <p>{topic}</p>
                                <Img props={[ '/svg/studio/upload-videos/pageTwo/ring.png',
                                    25, 25, 'close' ]}/>

                            </div>
                        )


                }

                <span className={styles.top2LineThrough}></span>

            </section>
        </div>

    );
};

export default Header;