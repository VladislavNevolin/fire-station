import classes from './Header.module.css'

export default function Header() {
    return(
        <header>
            <img src='/HeaderLogo.png' alt="СУ ФПС №2" className={classes.headerLogo} />
            <h2>Пожарная часть</h2>
            <p>Начальник части</p>
        </header>
    )
}