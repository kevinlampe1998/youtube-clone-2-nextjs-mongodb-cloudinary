'use client';

import SideBar from "./studio-left-side-bar/side-bar";
import styles from './page.module.css';

const Studio = () => {
    return (
        <div className={styles.studio}>
            <SideBar/>
            <div>
                <div>StudioPages StudioPages StudioPages</div>
                <div>StudioPages StudioPages StudioPages</div>
                <div>StudioPages StudioPages StudioPages</div>
                <div>StudioPages StudioPages StudioPages</div>
                <div>StudioPages StudioPages StudioPages</div>
            </div>
        </div>
    );
};

export default Studio;