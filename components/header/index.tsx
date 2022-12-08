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
            <div>
                <p>現在のページ冥: {props.pageName}</p>
            </div>
            <nav className={classes.neko}>
                <ul >
                    <li><a href="/aho">Aho</a></li>
                    <li><a href="/baka">BAKA</a></li>
                    <li><a href="#">MANUKE</a></li>
                    <li><a href="#">NEKO</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header