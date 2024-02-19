import React, {useEffect, useState} from 'react';


interface LocalStorageType {
    key: string,
    defaultValue: string
    saved: string | null
}

function getStorageValue(key: string, defaultValue: string) {
    let saved = localStorage.getItem(key);
    if (saved) {
        let initial = JSON.parse(saved);
        return initial || defaultValue
    }
}
export const useLocalStorage = (key:string, defaultValue: string) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]

};
