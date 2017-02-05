var React = require("react");
var {Link} = require("react-router");

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>here are a few examples to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Beijing">Beijing</Link>
                </li>
                <li>
                    <Link to="/?location=Durham">Durham, NC</Link>
                </li>
            </ol>
        </div>
    )
};
module.exports = Examples;