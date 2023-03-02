// function returns an object
// return the length of tweet
// return the amount of hashtags and an array of them(unique)
// return the amount of mentions and an array of them(unique)


// Please do not change the name of this function
function getTweetData (tweet) {

    const splitTweet = tweet.split(" ");
    const tweetLength = tweet.length;
    let tagCount = 0;
    let mentionCount = 0;
    const tagArray = []
    const mentionArray = []

    for(let word in splitTweet){
      if(splitTweet[word].startsWith("#")) {
        tagCount++
        if(!tagArray.includes(splitTweet[word])){
          tagArray.push(splitTweet[word])
        }
      }
      if(splitTweet[word].startsWith("@")){
        mentionCount++
        if(!mentionArray.includes(splitTweet[word])){
          mentionArray.push(splitTweet[word])
        }
      }
    }

  return {tags: tagArray, mentions: mentionArray, tagCount: tagCount, mentionCount: mentionCount, length: tweetLength}
};

module.exports = getTweetData;