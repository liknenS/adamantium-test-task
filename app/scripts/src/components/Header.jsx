var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Most popular on instagram</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                <a href="?username=Mikita">{this.props.username || 'Sign in with instagram.'}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
module.exports = Header;