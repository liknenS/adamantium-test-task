var React = require('react');

var countFormatSuffixs = ['', 'K', 'M'];
function countFormat(count) {
    var i = 0;
    while (count >= 1000) {
        i++;
        count = Math.floor(count / 1000);
    }
    return count + countFormatSuffixs[i];

}

var PostsTable = React.createClass({
    render: function () {
        var rows = this.props.posts.map(function (p, i) {
            return (
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td><img className="preview_image" src={p.images.low_resolution.url}/></td>
                    <td>{p.user.username}</td>
                    <td>{countFormat(p.likes.count)}</td>
                    <td>{countFormat(p.comments.count)}</td>
                </tr>
            );
        });
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Preview</th>
                    <th>Username</th>
                    <th>Likes</th>
                    <th>Comments</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        );
    }
});
module.exports = PostsTable;