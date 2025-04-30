'use client';

import styles from './page.module.css';
import Link from 'next/link';
import Img from '@/components/image/image';

const PageThree = () => {
    return (
        <div className={styles.pageThree}>
            <h1>Video elements</h1>
            <p>Use cards and an end screen to show viewers related videos, websites, and calls to action. <Link href='#'>Learn more</Link></p>

            <div>
                <div>
                    <Img props={[ '/svg/studio/upload-videos/pageThree/add-subtitles.png',
                            23, 17, 'send-feedback' ]}/>
                    <div>
                        <h3>Add subtitles</h3>
                        <p>Reach a broader audience by adding subtitles to your video</p>
                    </div>
                </div>
                <button>Add</button>
            </div>

            <div>
                <div>
                    <Img props={[ '/svg/studio/upload-videos/pageThree/add-an-end-screen.png',
                            23, 17, 'send-feedback' ]}/>
                    <div>
                        <h3>Add an end screen</h3>
                        <p>Promote related content at the end of your video</p>
                    </div>
                </div>
                <div>
                    <button>Import from video</button>
                    <button>Add</button>
                </div>
            </div>

            <div>
                <div>
                    <Img props={[ '/svg/studio/upload-videos/pageThree/add-cards.png',
                            23, 22, 'send-feedback' ]}/>
                    <div>
                        <h3>Add cards</h3>
                        <p>Promote related content during your video</p>
                    </div>
                </div>
                <button>Add</button>
            </div>
        </div>
    );
};

export default PageThree;