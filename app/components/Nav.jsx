var React = require("react");
var {Link, IndexLink} = require("react-router");



var Nav = () => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold", color: "red"}}>Get Weather</IndexLink>
            <Link to="About" activeClassName="active" activeStyle={{fontWeight: "bold", color: "red"}}>About </Link>
            <Link to="Examples" activeClassName="active" activeStyle={{fontWeight: "bold", color: "red"}}>Examples </Link>
        </div>
    );
};

module.exports = Nav;