import { useEffect, useState } from "react";


export default function useLocalStorage(key, value) {
    const [state, setState] = useState(() => localStorage.getItem(key) === null ? value : JSON.parse(localStorage.getItem(key)));

    useEffect(() => {
            localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])
    
    return [state, setState];
}   