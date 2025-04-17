'use client';

import styles from './component.module.css';
import Img from '@/components/image/image';

const Footer = () => {
    return (
        <section className={styles.bottom}>
            <Img props={[ '/svg/studio/upload-videos/pageTwo/video-upload-complete.png',
                12, 17, 'send-feedback' ]}/>
            <Img props={[ '/svg/studio/upload-videos/pageTwo/video-processing.png',
                20, 20, 'send-feedback' ]}/>
            <Img props={[ '/svg/studio/upload-videos/pageTwo/copyright-check-complete.png',
                22, 22, 'send-feedback' ]}/>
            <p>Checks complete. No issues found.</p>
            <span>Next</span>
        </section>
    );
};

export default Footer;