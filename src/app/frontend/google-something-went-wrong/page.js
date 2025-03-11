'use client';

import styles from './page.module.css';
import Image from 'next/image';

const SomethingWentWrong = () => {
    return (
        <div className={styles.somethingWentWrong}>
            <section className={styles.upper}>
                <Image
                        className={styles.googleGRainbowLogo}
                        src='/logos/google-g-rainbow-logo.png'
                        width='52'
                        height='52'
                        alt="Amazon header logo"
                />
                <h1>Something went wrong!</h1>
                <h2>Try again and don't reload the page while filling in the information.</h2>

            </section>
        </div>
    );
};

export default SomethingWentWrong;