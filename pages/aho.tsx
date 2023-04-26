import Index from "../components/board";

const Aho = () => {
    const boardsData = [
        {
            title: 'boke',
            author: 'manuke',
            date: '2022/03/02',
            id: 0,
            toeic: 630,
        },
        {
            title: 'TOEIC630点',
            author: '谷田',
            date: '2022/04/99',
            id: 1,
        },
        {
            title: 'TOEIC630点',
            author: '谷田',
            date: '2022/04/99',
            id: 1,
            toeic: 515,
        },
        {
            title: 'TOEIC630点',
            author: '谷田',
            date: '2022/04/99',
            id: 1,
        },
        {
            title: 'TOEIC999999999999900点',
            author: '谷田',
            date: '2022/04/99',
            id: 1,
        },
        {
            title: 'TOEIC300点',
            author: '谷田',
            date: '2022/04/99',
            id: 1,
        },
    ]
    const boards = boardsData.map((board) => {
        return <Index title={board.title} author={board.author} date={board.date} id={board.id} toeic={board.toeic} />
    })
    return (
        <div>
            <div>
                <p>Aho</p>
            </div>
            {boards}
        </div>
    )
}

export default Aho
