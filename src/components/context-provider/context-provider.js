'use client';

import { useReducer, useEffect } from "react";
import { createContext } from "react";
import BASE_URL from "@/lib/base-url";

const reducer = (state, action) => {

    console.log('reducer: action', action);

    if (action.type === 'setSignIn') {
        return { ...state, signIn: { ...state.signIn,
            [action.payload.category]: action.payload.value }};
    }

    if (action.type === 'setUser') console.log('reducer: User logged in');
    if (action.type === 'setUser') return { ...state, user: action.payload };
   
    if (action.type === 'changeFirstName') {
        return { ...state, registration: {
            ...state.registration, firstName: action.payload
        }};
    }

    if (action.type === 'changeLastName') {
        return { ...state, registration: {
            ...state.registration, lastName: action.payload
        }};
    }
    
    if (action.type === 'changeTime') {
        return {
            ...state, registration: {
                ...state.registration, birthDate: {
                    ...state.registration.birthDate,
                        [action.payload.timeCategory]: action.payload.timeValue
                }
            }
        };
    }

    if (action.type === 'changeRegistrationFirstLevel') {
        return { ...state, registration: {
            ...state.registration,
                [action.payload.registrationCategory]:
                    action.payload.registrationValue
        }};
    }

    return state;
};

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [ clientDB, dispatch ] = useReducer(reducer, {
        user: null,
        signIn: {
            recognition: '',
            password: ''
        },
        registration: {
            firstName: '',
            lastName: '',
            birthDate: {
                month: '',
                day: '',
                year: ''
            },
            gender: '',
            emailAddress: '',
            password: '',
        }
    });

    const cookieChecker = async () => {
        const res = await fetch(`${BASE_URL}/backend/users/single/check-cookie`);
        const data = await res.json();

        console.log(' cookieChecker data', data);

        data.success && dispatch({ type: 'setUser', payload: data.user });
    };

    useEffect(() => {
        cookieChecker();

        

    }, []);

    useEffect(() => {
        console.log('ContextProvider clientDB', clientDB);
    }, [clientDB]);

    return (
        <Context.Provider value={{ clientDB, dispatch }}>
            { children }
        </Context.Provider>
    );
};

export default ContextProvider;