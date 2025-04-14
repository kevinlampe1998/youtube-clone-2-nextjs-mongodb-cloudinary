'use client';

import { idSelected } from '@/lib/shortcuts';
import styles from './side-bar.module.css';
import Img from '@/components/image/image';
import { getPropValue } from '@/lib/shortcuts';

const studioSideBarTopics = ['dashboard', 'content', 'analytics',
    'community', 'subtitles', 'copyright', 'earn', 'customization',
    'audio-library'];

const SideBar = () => {

    const hoverBehavior = (target) => {
        const sideBar = idSelected('studio-side-bar');
        const sideBarWitdh = getPropValue(sideBar, 'width');
        const hoverColor = '#1f1f1f';

        if (sideBarWitdh === '250px') {

            ((target.tagName === 'P') ||
                (
                    target.tagName === 'DIV' &&
                    target.className !== 'studio-sidebar-topic'
                )) && 
                    (target.parentElement.style.background = hoverColor);

            target.tagName === 'IMG' &&
                (target.parentElement.parentElement.style.background = hoverColor) &&
                (target.parentElement.style.background = hoverColor);

            target.className === 'studio-sidebar-topic' &&
                (target.style.background = hoverColor);

        }
    
    };

    const removeHoverColor = () => {
        const section2 = idSelected('studio-side-bar-section2');

        Object.values(section2.children).forEach((e, index) => {
            e.style.background = 'none';

        });
    };

    return (
        <div className={styles.sideBar} id='studio-side-bar'>
            <section className={styles.section1}>
                <div className={styles.profileLogo}
                    id='sidebar-profile-logo'
                >
                    <p>K</p>
                </div>
                <p className='studio-sidebar-profile-logo-text'>
                    Your Channel</p>
                <p className='studio-sidebar-profile-logo-text'>
                    <span>FirstName</span> <span>LastName</span>
                </p>
            </section>
            <section className={styles.section2}
                id='studio-side-bar-section2'
            >

                {
                    studioSideBarTopics.map(topic =>

                        <div key={topic} className='studio-sidebar-topic'
                            onMouseEnter={(event) => hoverBehavior(event.target)}
                            onMouseLeave={removeHoverColor}
                        >
                            <div>
                                <Img props={[`/svg/studio/${topic}.png`, 20, 20, 'placeholder']} />
                            </div>
                            <p>{topic}</p>
                        </div>
                    )
                }

            </section>
            <section className={styles.section3}>
                <div>
                    <Img props={['/svg/studio/settings.png', 20, 20, 'placeholder']} />
                    <p>Settings</p>
                </div>
                <div>
                    <Img props={['/svg/studio/send-feedback.png', 20, 20, 'placeholder']} />
                    <p>Send Feedback</p>
                </div>
            </section>
        </div>
    );
};

export default SideBar;