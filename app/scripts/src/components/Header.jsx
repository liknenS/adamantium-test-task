var React = require('react');
var Header = React.createClass({
    componentDidMount: function() {

    },
    render: function () {
        var url = "https://instagram.com/oauth/authorize/?client_id=9ed9e2f2f7014048bc8b261baed15a4c&redirect_uri=http://localhost:8880/&response_type=token";
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Most popular on instagram</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href={this.props.username?'#':url}>{this.props.username || 'Sign in with instagram.'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
module.exports = Header;