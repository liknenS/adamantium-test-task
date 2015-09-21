var React = require('react');

var BarChart = require('react-d3-components').BarChart;

var CompareSection = React.createClass({
    getInitialState: function () {
        return {
            active: 'likes'
        }
    },
    changeCompare: function (option) {
        this.setState({active: option});
    },
    render: function () {
        var self = this;
        var data = [{
            label: this.state.active,
            values: this.props.posts.map(function (e, i) {
                return {x: (i + 1).toString(), y: e[self.state.active]};
            })
        }];
        return (
            <div>
                <div className="btn-group btn-group-justified" role="group">
                    <a className={"btn btn-default "+( this.state.active == 'likes'?'active':'')}
                       onClick={self.changeCompare.bind(self,'likes')}
                       role="button">Likes</a>
                    <a className={"btn btn-default "+( this.state.active == 'comments'?'active':'')}
                       onClick={self.changeCompare.bind(self,'comments')}
                       role="button">Comments</a>
                </div>
                <div>
                    <BarChart data={data}
                              width={500}
                              height={300}
                              margin={{top: 30, bottom: 80, left: 80, right: 10}}/>
                </div>
            </div>
        );
    }
});

module.exports = CompareSection;