import {Tab1, Tab2} from "./components";

import styles from './Page1.module.scss';
export const Page1 = () => {
    return (
        <div className={styles.wrapper}>
            <ul>
                Задание:
                <li>Необходимо сделать переключатель между табов по кнопке</li>
            </ul>
            <div className={styles.buttons}>
                <button>
                    select tab 1
                </button>
                <button>
                    select tab 2
                </button>
            </div>
            <div className={styles.content}>
                {/*<Tab1 />*/}
                {/*<Tab2 />*/}
            </div>
        </div>
    )
}
