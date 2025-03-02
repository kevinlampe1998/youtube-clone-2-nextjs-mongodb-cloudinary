'use client';

import styles from './page.module.css';
import { Triangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import months, { monthDays } from '@/lib/months';

const BasicInformation = () => {
    const [ birthDate, setBirthDate ] = useState({
        month: '', day: '', year: ''
    });
    const foreGround = useRef();
    const monthList = useRef();

    useEffect(() => {
        months.every(month => birthDate.month !== month) && setBirthDate(prev =>
            ({ ...prev, month: '' }))
    }, [birthDate.month]);

    useEffect(() => {
        console.log(birthDate);
    });

    const showMonthList = () => {
        foreGround.current.style.display = 'block';
        monthList.current.style.display = 'block';
    };

    const closeForeGround = (e) => {
        const monthPTagList = [...monthList.current.children];

        !(monthPTagList.some(monthPTag => monthPTag === e.target)) &&
            (foreGround.current.style.display = 'none');
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

                <div className={styles.month} onClick={showMonthList}>
                    <input placeholder='Month' className={styles.monthInput}
                        onChange={(e) => setBirthDate((prev) =>
                            ({ ...prev, month: e.target.value }))}
                        value={birthDate.month}
                    />
                    <Triangle size={6} className={styles.monthTriangle} fill='#bbb' color='#bbb'/>
                </div>

                <div className={styles.day}>
                    <input placeholder='Day'/>
                </div>

                <div className={styles.year}>
                    <input placeholder='Year'/>
                </div>

            </div>

            <div className={styles.gender}>
                <input placeholder='Gender'/>
                <Triangle size={6} className={styles.genderTriangle} fill='#bbb' color='#bbb'/>
                <div className={styles.genderList}>
                    <p>Female</p>
                    <p>Male</p>
                    <p>Rather not say</p>
                    <p>Custom</p>
                </div>
            </div>

            <p className={styles.next} onClick={() => router.push('/frontend/google-create-a-account/basic-information')}>Next</p>
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
                        onClick={() => setBirthDate(prev => ({ ...prev, month }))}
                    >{month}</p>)}
                </div>
            </section>
        </div>
    );
};

export default BasicInformation;