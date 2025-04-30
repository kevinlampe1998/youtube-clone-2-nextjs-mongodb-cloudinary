'use client';

import styles from './page.module.css';
import Link from 'next/link';
import Img from '@/components/image/image';

const PageFour = () => {
    return (
        <div className={styles.pageFour}>

            <h2>Checks</h2>
            <p>We’ll check your video for issues that may restrict its visibility and then you will have the</p>
            <p>opportunity to fix issues before publishing your video. <Link href='#'>Learn more</Link></p>
            
            <section>
                <div>
                    <h4>Copyright</h4>
                    <p>No issues found</p>
                </div>
                <Img props={[ '/svg/studio/upload-videos/pageFour/correct.png',
                    23, 17, 'send-feedback' ]}/>
            </section>

            <p>Remember: These check results aren’t final. Issues may come up in the future that</p>
            <p>impact your video. Learn more</p>

            <button className={styles.button}>Send feedback</button>

        </div>
    );
};

export default PageFour;