var React = require('react');
window.jsonp = require('./lib/jsonp');

var parsedPath = /access_token=([^&]+)/.exec(location.href);
if (parsedPath) {
    var posts = require('./mocks/posts').posts;
    var ComparePage = require('./src/ComparePage.jsx');
    jsonp('https://api.instagram.com/v1/users/self?access_token=' + parsedPath[1],function(res){
        jsonp('https://api.instagram.com/v1/media/popular?access_token=' + parsedPath[1],function(response){
            React.render(<ComparePage posts={response.data.slice(0,10)} username={res.data.username}/>, document.body);
        });

    });

} else {
    var AuthPage = require('./src/AuthPage.jsx');
    React.render(<AuthPage/>, document.body);
}
