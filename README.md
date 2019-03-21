A simple App to search and view YouTube videos.

# To run
clone this repo
npm install
npm start

# Tools Used
- [Create React App](https://github.com/facebook/create-react-app).
- YouTube API
- axios
- [Semantic-UI](https://cdnjs.com/libraries/semantic-ui)


# Skills Learned
1. YouTube API from [Google Developer](console.developers.google.com)
- Create an account if necessary
- Create a new project
- Enable APIs --> search for youtube --> 
- select YouTube Data API v3 --> WEb browser (Javascript) --> public data
- Click what credentials do I need? --> copy API key
- Optional: restrict API key to --> HTTP referrers example: localhost:XXXX 
- [YouTube API docs](https://developers.google.com/youtube/v3/docs/search/list)
2. Improved knowledge of Semantic-UI usage
3. Deeply Nested Callbacks - **state is held in highest parent component**
- When communicating information from a child back up to a parent
  USE A CALLBACK through props
    - example: onVideoSelect starts in the App --> Video list --> Video Item
        - within App ==> create function -> pass as parentPropName={this.callbackFxn} NO PARENTHESIS
        - within first child -> receive prop -> pass as parentPropName={parentPropName} SIMPLE PASS
        - within final child -> prop={callbackFxn(param)} WITH PARENTHESIS and PARAM