import { useEffect, useState } from "react";


export default function useSessionStorage(key, value) {
    const [state, setState] = useState(() => sessionStorage.getItem(key) === null ? value : JSON.parse(sessionStorage.getItem(key)));

    useEffect(() => {
            sessionStorage.setItem(key, JSON.stringify(state));
    }, [key, state])
    
    return [state, setState];
}   