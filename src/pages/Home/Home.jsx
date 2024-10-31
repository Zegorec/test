import {Link, Outlet} from "react-router-dom";
import styles from './Home.module.scss';
export const Home = () => {
    return (
        <>
            <header className={styles.header}>
                Header
            </header>
            <main className={styles.main}>
                <aside className={styles.aside}>
                    <Link className={styles.link} to={`page1`}>Go to page 1</Link>
                    <Link className={styles.link} to={`page2`}>Go to page 2</Link>
                </aside>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </>
    )
}
