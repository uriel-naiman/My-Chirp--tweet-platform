 function SingleTweet(props) {
    return(
        <div className="d-flex flex-column mt-3 shadow-lg rounded p-2"
            style={{backgroundColor: "#343A40"}}>
            <div className="d-flex justify-content-between">
                <div style={{color: "#6C757D", fontSize: "80%"}}>{props.tweet.userName}</div>
                <div style={{color: "#6C757D", fontSize: "80%"}}>{props.tweet.date}</div>
            </div>
            <div style={{wordWrap: 'break-word' }}>{props.tweet.content}</div>
        </div>
    );
}

export default SingleTweet;