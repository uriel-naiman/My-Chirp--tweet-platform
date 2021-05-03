import SingleTweet from "./SingleTweet";
import TweetContext from '../TweetContext';
import {useState, useEffect} from "react";
 
const TweetList = (props) => {
    const { updateList } = props;
    const [reload, setReload] = useState(setInterval(updateList, 5000));
    // useEffect(() => {
    //       return () => {
    //         setReload(clearInterval());
    //     }
    // }, []);
    
    return (
        <TweetContext.Consumer>
         {(context) => {
             console.log(context);
          return (
        <div className="w-50 mx-auto">
            {context.tweetArray.sort((first, second) => { 
                return (new Date(second.date).getTime() - new Date(first.date).getTime()); 
            }).map(tweet => 
            <SingleTweet
              tweet={tweet}/>
            )}
        </div>
        )
        }}
        </TweetContext.Consumer>
    );
}

export default TweetList;