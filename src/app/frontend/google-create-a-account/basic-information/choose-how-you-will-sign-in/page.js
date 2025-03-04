'use client';

import styles from './page.module.css';
import { Triangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ChooseYouWillSignIn = () => {
    const router = useRouter();

    return (
        <div className={styles.choose}>
            <section className={styles.upper}>
                <Image
                        className={styles.googleGRainbowLogo}
                        src='/logos/google-g-rainbow-logo.png'
                        width='52'
                        height='52'
                        alt="Amazon header logo"
                />
                <h1>Choose how you’ll sign in</h1>
                <h2>You’ll use this information to sign in to your Google Account</h2>

                <div className={styles.radioButton}>

                    <Image
                            className={styles.googleGRainbowLogo}
                            src='/svg/create-a-gmail-address.png'
                            width='43'
                            height='43'
                            alt="Amazon header logo"
                    />

                    <p>Create a Gmail address</p>

                    <div><span></span></div>

                </div>

                <div className={styles.radioButton}>

                    <Image
                        className={styles.googleGRainbowLogo}
                        src='/svg/use-your-email-address.png'
                        width='43'
                        height='43'
                        alt="Amazon header logo"
                    />

                    <p>Use your email address</p>

                    <div><span></span></div>

                </div>

                <div className={styles.remark}>
                    <p>You can create an email with another provider, and use that email to</p>
                    <p>create a Google Account. <div>Learn more about creating an account</div></p>
                    <div>with another provider</div>
                </div>

                <p className={styles.next}
                    onClick={() => router.push
                        ('/frontend/google-create-a-account/basic-information/choose-how-you-will-sign-in/choose-your-gmail-address')}
                >
                    Next
                </p>
            </section>

            <section className={styles.bottom}>
                <div className={styles.language}>
                    <p>English (United States) </p>
                    <Triangle size={4} fill='#fff' className={styles.triangle}/>
                </div>
                <div className={styles.bottomRight}>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </section>
        </div>
    );
};

export default ChooseYouWillSignIn;