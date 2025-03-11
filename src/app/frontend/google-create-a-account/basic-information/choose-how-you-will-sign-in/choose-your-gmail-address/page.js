'use client';

import styles from './page.module.css';
import { Triangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useContext, useEffect, useState } from 'react';
import { getDisplay, idSelected } from '@/lib/shortcuts';
import { Context } from '@/components/context-provider/context-provider';

const ChooseYourGmailAddress = () => {
    const router = useRouter();
    const example1 = useRef();
    const example2 = useRef();
    const createYourself = useRef();
    const hiddenRef = useRef();
    const { clientDB, dispatch } = useContext(Context);
    const [ emailInput, setEmailInput ] = useState('');

    useEffect(() => {
        console.log('chooseYourGmailAddress: clientDB.registration', clientDB.registration);
    }, [clientDB]);

    useEffect(() => {
        dispatch({
            type: 'changeRegistrationFirstLevel',
            payload: {
                registrationCategory: 'emailAddress',
                registrationValue: '@gmail.com'
            }
        });
    }, []);

    useEffect(() => {
        console.log('emailInput', emailInput);

        dispatch({
            type: 'changeRegistrationFirstLevel',
            payload: {
                registrationCategory: 'emailAddress',
                registrationValue: `${emailInput}@gmail.com`
            }
        });
    }, [emailInput]);

    const chooseButton = (target) => {

        const currentButton = target.tagName === 'SPAN' ? target :
        target.children[0];

        const currentId = currentButton.id;
        
        const radioButtons = ['example1', 'example2', 'createYourself'];

        const toRemove = radioButtons.filter(id => id !== currentId);

        toRemove.forEach(id => idSelected(id).style.display = 'none');
        idSelected(currentId).style.display = 'block';

        currentId === 'createYourself' ?
            hiddenRef.current.style.display = 'block' :
            hiddenRef.current.style.display = 'none';
    };

    const createEmailOnChange = (event) => {

    };

    const nextPage = () => {
        getDisplay(createYourself.current) === 'block' && router.push
            ('/frontend/google-create-a-account/basic-information/choose-how-you-will-sign-in/choose-your-gmail-address/create-a-strong-password')
    };

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
                <h1>Choose your Gmail address</h1>
                <h2>Pick a Gmail address or create your own</h2>

                <div className={styles.radioButton}>

                    <div
                        onClick={(event) => chooseButton(event.target)}
                    ><span id='example1' ref={example1}></span></div>

                    <p className={styles.scoreThrough}>placeholder@gmail.com</p>

                </div>

                <div className={styles.radioButton}>

                    <div
                        onClick={(event) => chooseButton(event.target)}
                    ><span id='example2' ref={example2}></span></div>

                    <p className={styles.scoreThrough}>placeholder2@gmail.com</p>

                </div>

                <div className={styles.radioButton}>

                    <div
                        onClick={(event) => chooseButton(event.target)}
                    ><span id='createYourself' ref={createYourself}></span></div>

                    <p>Create your own Gmail address</p>

                </div>

            </section>

            <section className={styles.hidden} ref={hiddenRef}>
                <div className={styles.email}>
                    <input className={styles.emailOrPhone}
                        placeholder='Create a Gmail address'
                        onChange={(event) => setEmailInput(event.target.value)}
                        value={emailInput}
                    />
                    <span>@gmail.com</span>
                </div>
                <p>You can use letters, numbers & periods</p>
            </section>

            <section className={styles.navigation}>
                <p className={styles.back}>
                    Back
                </p>
                <p className={styles.next} onClick={nextPage}>
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

export default ChooseYourGmailAddress;