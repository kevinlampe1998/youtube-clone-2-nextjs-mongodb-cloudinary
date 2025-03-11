'use client';

import styles from './page.module.css';
import { Triangle, CircleAlert } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef, useContext } from 'react';
import months, { monthDays } from '@/lib/months';
import { useRouter } from 'next/navigation';
import { Context } from '@/components/context-provider/context-provider';

const googleGenderValues = ['Female','Male','Rather not say','Custom'];

const BasicInformation = () => {
    // const [ birthDate, setBirthDate ] = useState({
    //     month: '', day: 0, year: 0
    // });
    const foreGround = useRef();
    const monthList = useRef();
    const genderList = useRef();
    const monthContainer = useRef();
    const genderContainer = useRef();

    const router = useRouter();
    const { clientDB, dispatch } = useContext(Context);

    const inCompleteBirthDate = useRef();
    const inValidBirthDate = useRef();
    const notSelectedGender = useRef();

    // useEffect(() => {
    //     months.every(month => birthDate.month !== month) && setBirthDate(prev =>
    //         ({ ...prev, month: '' }))
    // }, [birthDate.month]);

    useEffect(() => {
        console.log('clientDB, log in BasicInfo', clientDB);
    }, [clientDB]);

    useEffect(() => {}, []);

    const showMonthList = () => {
        foreGround.current.style.display = 'block';
        monthList.current.style.display = 'block';
    };

    const showGenderList = () => {
        foreGround.current.style.display = 'block';
        genderList.current.style.display = 'block';
    };

    const changeTime = (timeValue, timeCategory) => {
        dispatch({ type: 'changeTime',
            payload: { timeCategory, timeValue }
        });
    };

    const closeForeGround = (e) => {
        const monthPTagList = [...monthList.current.children];
        const genderPTagList = [...genderList.current.children];

        (!(monthPTagList.some(monthPTag => monthPTag === e.target)) ||
        !(genderPTagList.some(genderPTag => genderPTag === e.target))) &&
            (monthList.current.style.display = 'none') &&
            (genderList.current.style.display = 'none') &&
            (foreGround.current.style.display = 'none');
    };

    const nextPage = () => {
        const registration = clientDB.registration;
        let i = 0;

        if (registration.gender === '') {
            notSelectedGender.current.style.display = 'flex';
            i++;
        };

        if (
            registration.birthDate.month === '' ||
            registration.birthDate.day === 0 ||
            registration.birthDate.year === 0
        ) {
            inCompleteBirthDate.current.style.display = 'flex';
            inValidBirthDate.current.style.display = 'none';
            i++;
        };

        if (
            registration.birthDate.day > monthDays[registration.birthDate.month] ||
            registration.birthDate.year < 1850 || registration.birthDate.year > 2100
        ) {
            inValidBirthDate.current.style.display = 'flex';
            inCompleteBirthDate.current.style.display = 'none';
            i++;
        };

        if (i) return;

        dispatch({ type: 'changeTime', payload: {
            timeCategory: 'day',
            timeValue: Number(clientDB.registration.birthDate.day)
        }});

        dispatch({ type: 'changeTime', payload: {
            timeCategory: 'year',
            timeValue: Number(clientDB.registration.birthDate.year)
        }});

        router.push
            ('/frontend/google-create-a-account/basic-information/choose-how-you-will-sign-in');
    };

    return (
        <div className={styles.basicInfo}>
            <Image
                className={styles.googleGRainbowLogo}
                src='/logos/google-g-rainbow-logo.png'
                width='52'
                height='52'
                alt="Amazon header logo"
            />
            <h1>Basic information</h1>
            <h2>Enter your birthday and gender</h2>

            <div className={styles.birthDate}>

                <div className={styles.month} onClick={showMonthList}
                    ref={monthContainer}
                >
                    <input placeholder='Month' className={styles.monthInput}
                        value={clientDB.registration.birthDate.month}
                        readOnly
                    />
                    <Triangle size={6} className={styles.monthTriangle} fill='#bbb' color='#bbb'/>
                </div>

                <div className={styles.day}>
                    <input placeholder='Day'
                        onChange={(event) =>
                            changeTime(event.target.value, 'day')}
                    />
                </div>

                <div className={styles.year}>
                    <input placeholder='Year'
                        onChange={(event) =>
                            changeTime(event.target.value, 'year')}
                    />
                </div>

            </div>

            <div className={styles.errorMessage} ref={inCompleteBirthDate}>
                <CircleAlert size={18}/>
                <p>Please fill in a complete birthday</p>
            </div>

            <div className={styles.errorMessage} ref={inValidBirthDate}>
                <CircleAlert size={18}/>
                <p>Please enter a valid date</p>
            </div>

            <div className={styles.gender} onClick={showGenderList}
                ref={genderContainer}
            >

                <input placeholder='Gender' readOnly
                    value={clientDB.registration.gender}
                />

                <Triangle size={6} className={styles.genderTriangle} fill='#bbb' color='#bbb'/>

            </div>

            <div className={styles.errorMessage} ref={notSelectedGender}>
                <CircleAlert size={18}/>
                <p>Please select your gender</p>
            </div>

            <p className={styles.next}
                onClick={nextPage}
            >
                Next
            </p>
            <Link href='#' className={styles.why}>Why we ask for birthday and gender</Link>
            <section className={styles.bottom}>
                <div className={styles.language}>
                    <p>English (United States) </p>
                    <Triangle size={5} fill='#fff' className={styles.triangle}/>
                </div>
                <div>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </section>
            <section className={styles.basicInfoForeGround} ref={foreGround}
                onClick={(e) => closeForeGround(e)}
            >

                <div className={styles.monthList} ref={monthList}>
                    {months.map(month => <p key={month}
                        onClick={(event) =>
                            changeTime(event.target.innerHTML, 'month')}
                    >{month}</p>)}
                </div>

                <div className={styles.genderList} ref={genderList}>
                    {googleGenderValues.map(gender => <p key={gender}
                        onClick={(event) => 
                            dispatch({
                                type: 'changeRegistrationFirstLevel',
                                payload: {
                                    registrationCategory: 'gender',
                                    registrationValue: event.target.innerHTML
                                }
                            })
                        }
                    >{gender}</p>)}
                </div>

            </section>
        </div>
    );
};

export default BasicInformation;