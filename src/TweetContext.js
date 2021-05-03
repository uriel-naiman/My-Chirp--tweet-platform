import React from 'react';

const TweetContext = React.createContext({
  tweet: '',
  onTweetChange: () => {}
});

export default TweetContext;