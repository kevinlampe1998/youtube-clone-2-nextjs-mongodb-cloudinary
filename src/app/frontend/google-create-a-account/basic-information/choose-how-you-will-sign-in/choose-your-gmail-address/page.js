'use client';

import styles from './page.module.css';
import { Triangle, CircleAlert } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useContext, useEffect, useState } from 'react';
import { getDisplay, idSelected } from '@/lib/shortcuts';
import { Context } from '@/components/context-provider/context-provider';
import BASE_URL from '@/lib/base-url';

const ChooseYourGmailAddress = () => {
    const router = useRouter();
    const example1 = useRef();
    const example2 = useRef();
    const createYourself = useRef();
    const hiddenRef = useRef();
    const { clientDB, dispatch } = useContext(Context);
    const [ emailInput, setEmailInput ] = useState('');

    const lettersNumbersPeriods = useRef();
    const chooseAGmailAddress = useRef();
    const enterAEmailAddress = useRef();
    const isTaken = useRef();
    const between8And30Char = useRef();

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

    const nextPage = async () => {

        const errorMessages = [ lettersNumbersPeriods, between8And30Char,
            isTaken, enterAEmailAddress, chooseAGmailAddress ];

        const handleErrorMessages = (currentSituation) => {
            errorMessages.forEach(message =>
                message.current.style.display = 'none' );

            currentSituation.current.style.display = 'flex';
        };

        if ( [example1, example2, createYourself].every(btn =>
                getDisplay(btn.current) === 'none')
        ) return handleErrorMessages(chooseAGmailAddress);

        if (emailInput === '') return handleErrorMessages(enterAEmailAddress);
    
        if (emailInput.length < 8 || emailInput.length > 30)
            return handleErrorMessages(between8And30Char);

        const encodedEmailAddress = encodeURIComponent(clientDB.registration.emailAddress);

        const res = await fetch(`${BASE_URL}/backend/users/single/check-if-exists/${encodedEmailAddress}`);
        const data = await res.json();

        if (!data.success) return handleErrorMessages(isTaken);

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
                <p ref={lettersNumbersPeriods}>You can use letters, numbers & periods</p>
            </section>

            <div className={styles.errorMessage} ref={chooseAGmailAddress}>
                <CircleAlert size={18}/>
                <p>Choose a Gmail address</p>
            </div>

            <div className={styles.errorMessage} ref={enterAEmailAddress}>
                <CircleAlert size={18}/>
                <p>Enter a Gmail address</p>
            </div>

            <div className={styles.errorMessage} ref={between8And30Char}>
                <CircleAlert size={18}/>
                <p>Sorry, your username must be between 8 and 30 characters long.</p>
            </div>

            <div className={styles.errorMessage} ref={isTaken}>
                <CircleAlert size={18}/>
                <p>That username is taken. Try another.</p>
            </div>

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