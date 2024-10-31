import {useEffect, useState} from "react";

export const Tab2 = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log('значение таймера изменено')
            setState(state + 1)
        }, 1000)
    }, []);

    return (
        <div>
            <ul>
                Задание:
                <li>поправить работу таймера</li>
            </ul>
            прошло секунд: {state}
        </div>
    )
}
