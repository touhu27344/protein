import baka from './style.module.css'
import {useEffect, useState} from "react";

type Props = {
    title: string
    author: string
    date: string
    id: number
    toeic?: number
}

const Index = (props: Props) => {
    const [heart, setHeart] = useState(0)
    const handleClick = () => {
        setHeart((prevHeart) => prevHeart + 1)
    }

    return (
        <div className={baka.aho}>
            <div>
                <p>Title: {props.title}</p>
            </div>
            <div>
                <p>Author: {props.author}</p>
            </div>
            <div>
                <p>Date: {props.date}</p>
            </div>
            <div>
                <p>Id: {props.id}</p>
            </div>
            {props.toeic && <div><p>TOEIC: {props.toeic}</p></div>}
            <div>
                <button onClick={handleClick}>{heart}♡</button>
            </div>
        </div>
    )
}

export default Index