'use client';

import styles from './side-bar.module.css';
import Img from '@/components/image/image';

const studioSideBarTopics = [
    'dashboard',
    'content',
    'analytics',
    'community',
    'subtitles',
    'copyright',
    'earn',
    'customization',
    'audio-library'
];

const SideBar = () => {
    return (
        <div className={styles.sideBar} id='studio-side-bar'>
                <section className={styles.section1}>
                    <div className={styles.profileLogo}>
                        <p>K</p>
                    </div>
                    <p>Your Channel</p>
                    <p>FirstName LastName</p>
                </section>
                <section className={styles.section2}>
                    
                    {
                        studioSideBarTopics.map(topic => 

                            <div key={topic}>
                                <Img props={[ `/svg/studio/${topic}.png`, 20, 20, 'placeholder' ]}/>
                                <p>{topic}</p>
                            </div>
                        )
                    }

                </section>
                <section className={styles.section3}>
                    <div>
                        <Img props={[ '/svg/studio/settings.png', 20, 20, 'placeholder' ]}/>
                        <p>Settings</p>
                    </div>
                    <div>
                        <Img props={[ '/svg/studio/send-feedback.png', 20, 20, 'placeholder' ]}/>
                        <p>Send Feedback</p>
                    </div>
                </section>
        </div>
    );
};

export default SideBar;