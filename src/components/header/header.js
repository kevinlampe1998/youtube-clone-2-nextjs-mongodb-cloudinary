'use client';

import Logged from "./logged/logged";
import Unlogged from "./unlogged/unlogged";
import { useContext, useEffect } from "react";
import { Context } from "../context-provider/context-provider";
import StudioRelated from "./studio-related/studio-related";
import { usePathname } from "next/navigation";
import styles from './header.module.css';

const Header = () => {
    const { clientDB, dispatch } = useContext(Context);
    const pathname = usePathname();

    useEffect(() => {
        console.log('header pathname', pathname);
    });

    return (

        <div className={styles.header}>
            {

                (clientDB.user && pathname === '/frontend/studio') ?

                <StudioRelated/> : clientDB.user ? 

                <Logged/> : <Unlogged/>


            }
        </div>

    );
};

export default Header;