'use client';

import styles from './page.module.css';
import Img from '@/components/image/image';

const PageFive = () => {

    return (
        <div className={styles.pageTwo}>

            <section className={styles.main}>
                <div className={styles.mainLeft}>
                    <h2>Visibility</h2>
                    <p>Choose when to publish</p>

                    <div>
                        <h4>Save or publish</h4>
                        <p>Make your video public, unlisted, or private</p>
                        
                        <div>
                            <span className={styles.radioButton}>
                                <span></span>
                            </span>

                            <div>
                                <p>Private</p>
                                <p>Only you and people you choose can watch your video</p>
                            </div>

                            <div>
                                <p>Unlisted</p>
                                <p>Anyone with the video link can watch your video</p>
                            </div>

                            <div>
                                <p>Public</p>
                                <p>Everyone can watch your video</p>
                            </div>

                        </div>

                        <div>

                        </div>

                    </div>

                </div>
                <div className={styles.mainRight}>

                </div>
            </section>

        </div>
    );
};

export default PageFive;