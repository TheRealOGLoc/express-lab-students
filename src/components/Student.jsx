import Score from "./Score";

const Student = (props) => {
    const {name, bio, scores} = props;
    const scoresEl = scores.map((score, index) => <Score score={score.score} date={score.date} key={index} /> )
    
    return (
        <>
            <div>{name}</div>
            <div>{bio}</div>
            {scoresEl}
        </>
    )
}

export default Student;