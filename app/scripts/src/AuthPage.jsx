var React = require('react');

var Header = require('./components/Header.jsx');
var AuthPage = React.createClass({
    render:function(){
        return(
            <div>
                <Header/>
                <div className="container">
                    <p>Please sign in with your instagram account if you want to list most popular posts on instagram.</p>
                </div>
            </div>
        );
    }
});
module.exports = AuthPage;