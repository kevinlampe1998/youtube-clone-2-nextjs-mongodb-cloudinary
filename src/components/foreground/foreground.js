'use client';

import styles from './foreground.module.css';
import { SquarePlay, Radio } from 'lucide-react';

const ForeGround = () => {
    return (
        <div className={styles.foreGround}>
            <section className={styles.create}>
                <div>
                    <SquarePlay size={22}/>
                    <p>Video hochladen</p>
                </div>
                <div>
                    <Radio size={19}/>
                    <p>Livestream starten</p>
                </div>
            </section>
        </div>
    );
};

export default ForeGround;