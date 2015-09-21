/** @jsx React.DOM */
var React = require('react');
console.log('hello');
var posts = require('./mocks/posts').posts;
var ComparePage = require('./src/ComparePage.jsx');
React.render(<ComparePage posts={posts}/>, document.body);