'use client';

import styles from './page.module.css';
import { Check, Triangle, CircleAlert, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Img from '@/components/image/image';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '@/components/context-provider/context-provider';
import BASE_URL from '@/lib/base-url';
import { useRouter } from 'next/navigation';
import { idSelected } from '@/lib/shortcuts';

const errorRoute = '/frontend/google-something-went-wrong';

const EnterPassword = () => {
    const { clientDB, dispatch } = useContext(Context);
    const router = useRouter();
    const enterPassword = useRef();
    const wrongPassword = useRef();

    useEffect(() => {
        !clientDB.signIn.recognition && router.push(errorRoute);
    }, []);

    const signIn = async () => {

        const selectedInput = idSelected('sign-in-user-password').value;
        console.log('EnterPassword signIn selectedInput', selectedInput);

        console.log('clientDB.signIn', clientDB.signIn);

        if (!selectedInput) {
            wrongPassword.current.style.display = 'none';
            enterPassword.current.style.display = 'flex';
            return;
        }

        const payload = { recognition: clientDB.signIn.recognition, 
            password: selectedInput };

        const res = await fetch(`${BASE_URL}/backend/users/single/sign-in`, {
            method: 'POST', headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        console.log('EnterPassword signIn data', data);
        console.log('EnterPassword signIn data.passwordWrong', data.passwordWrong);

        if (data.signedIn) {
            dispatch({ type: 'setUser', payload: data.foundUser });
            return;
        }

        if (data.userNotFound) {
            router.push(errorRoute);
        }

        if (data.passwordWrong) {
            enterPassword.current.style.display = 'none';
            wrongPassword.current.style.display = 'flex';
        }
    };

    useEffect(() => {}, []);

    useEffect(() => {
        clientDB.user && router.push('/');
    }, [clientDB.user]);

    useEffect(() => {
        const handleKeyDown = (event) => 
            event.key === 'Enter' && signIn();

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }, []);
    
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
                <h1>Welcome</h1>
                <div className={styles.changeEmail}>
                    <Img props={[ '/svg/google/contact.png',
                        29, 32, 'contact-logo' ]}/>
                    <p>lampe.kevin.work@gmail.com</p>
                    <Img props={[ '/svg/google/caret-down-svgrepo-com.svg',
                        15, 15, 'caret-down' ]}/>
                </div>

            </section>

            <input className={styles.email} placeholder='Enter your password'
                onChange={(event) => dispatch({ type: 'setSignIn', payload: {
                    category: 'password', value: event.target.value }})}
                value={clientDB.signIn.password}
                onKeyDown={(e) => e.key === 'Enter' && signIn()}
                id='sign-in-user-password'
            />

            <div className={styles.errorMessage} ref={enterPassword}>
                <CircleAlert size={18}/>
                <p>Enter a password</p>
            </div>

            <div className={styles.errorMessage} ref={wrongPassword}>
                <CircleAlert size={18}/>
                <p>Wrong password. Try again or click Forgot password to reset it.</p>
            </div>
            
            <div className={styles.showPassword}>
                <div className={styles.check}
                >
                    <Check size={15} color='#0e0e0e'/>
                </div>
                <span>Show password</span>
            </div>

            <section className={styles.navigation}>
                <p className={styles.back}>
                    Forgot password?
                </p>
                <p className={styles.next}
                    onClick={signIn}
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

export default EnterPassword;