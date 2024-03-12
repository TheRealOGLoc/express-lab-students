const Score = (props) => {
    const {date, score} = props
    return (
        <>
            <div>{date}</div>
            <div>{score}</div>
        </>
    )
}

export default Score