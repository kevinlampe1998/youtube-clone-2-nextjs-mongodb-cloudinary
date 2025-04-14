'use client';

import SideBar from "./studio-left-side-bar/side-bar";
import styles from './page.module.css';
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "@/components/context-provider/context-provider";
import { useRouter } from "next/navigation";
import ForeGround from "./studio-foreground/page";
import Dashboard from "./studio-pages/dashboard/page";
import Content from "./studio-pages/content/page";


const topics = {
    dashboard: <Dashboard/>,
    content: <Content/>
};

const Studio = () => {
    const { clientDB, dispatch } = useContext(Context);
    const studio = useRef();
    const router = useRouter();
    const [ currentTopic, setCurrentTopic ]= useState('content');

    useEffect(() => {
        clientDB.user && (studio.current.style.background = '#282828');
    }, []);

    return (
        <div className={styles.studio} ref={studio}>

            {

                clientDB.others.studioHeader ?

                <SideBar/> : <></>

            }

            {

                clientDB.others.studioHeader ?

                    <div className={styles.currentPage}
                    >{topics[currentTopic]}</div> : <></>

            }

            <ForeGround/>

        </div>
    );
};

export default Studio;