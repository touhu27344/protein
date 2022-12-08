import classes from "../../styles/style.module.css";

type Props = {
    pageName: string
}

const Header = (props: Props) => {
    const agenda = () => {
        alert('カラビナが一番！')
    }
    return (
        <div>
            <header className={classes.header}>
                <button onClick={agenda} >
                    <strong>あじぇんだ～＾</strong>
                </button>
            </header>
            <nav className={classes.neko}>
                <ul >
                    <li><a href="/aho">AHO</a></li>
                    <li><a href="/baka">BAKA</a></li>
                    <li><a href="/login">LOGIN</a></li>
                    <li><a href="/neko">NEKO</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
