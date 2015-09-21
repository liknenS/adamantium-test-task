var React = require('react');
var Bar = require('react-chartjs').Bar;
var BarChart = require('react-d3-components').BarChart;
var CompareSection = React.createClass({
    getInitialState: function() {
        return{
            compareBy:'likes'
        }
    },
    changeCompare: function(option){
        console.log(option);
        this.setState({compareBy : option});
    },
    render: function () {
        var self = this;
        var labels = this.props.posts.map(function(e,i){
            return i+1;
        });
        var data = {
            labels: labels,
            datasets: [{
                data: this.props.posts.map(function (e, i) {
                    return e[self.state.compareBy];
                })
            }]
        };
        return (
            <div>
                <div className="btn-group btn-group-justified" role="group" >
                    <a className={"btn btn-default "+( this.state.compareBy == 'likes'?'active':'')}
                       onClick={self.changeCompare.bind(self,'likes')}
                       role="button">Likes</a>
                    <a className={"btn btn-default "+( this.state.compareBy == 'comments'?'active':'')}
                       onClick={self.changeCompare.bind(self,'comments')}
                       role="button">Comments</a>
                </div>
                <div>
                    <Bar data={data}/>
                </div>
            </div>
        );
    }
});
module.exports = CompareSection;