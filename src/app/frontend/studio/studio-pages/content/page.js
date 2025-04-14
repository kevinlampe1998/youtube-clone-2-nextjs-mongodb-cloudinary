'use client';

import styles from './page.module.css';
import Img from '@/components/image/image';

const Content = () => {
    return (
        <div className={styles.content}>
            <h2>Channel content</h2>
            <section className={styles.navBar}>
                <p>Videos</p>
                <p>Shorts</p>
            </section>
            <section>
                <Img props={[ '/svg/studio/content/filter.png', 20, 15, 'filter' ]}/>
                <input className={styles.filter} placeholder='Filter'/>
            </section>
            <section>
                <div className={styles.radioBox}></div>
                <p>Video</p>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Content;