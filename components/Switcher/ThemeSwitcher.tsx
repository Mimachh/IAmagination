
"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@/components/Icons'

const ThemeSwitcher = () => {
    const [ mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) {
         return null;
    }
    return (
        <>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light" )}
                className={`rounded-full p-1.5 border md:border-white border-black dark:border-yellow-500
                ${theme === "light" ? "bg-primaryDark text-black md:text-white" : " text-yellow-500"}
                  z-30 fixed left-0 bottom-0 mb-4 ml-4
                `}
                >
                    {
                        theme === "dark" ?
                        <SunIcon className='fill-dark'/>
                        : <MoonIcon className={"fill-light"} />
                    }
                </button>
        </>
    );
};

export default ThemeSwitcher;