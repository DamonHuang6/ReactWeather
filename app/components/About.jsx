var React = require("react");


var About =  (props) => {
    return (
    <div>
        <h3 className="text-center">About Component</h3>
        <p>This is a weather application built on React.</p>
        <p>Here are some tools I used:</p>
        <ul>
            <li>
                <a href="http://facebook.github.is/react">React</a> - This is the framwork I use to bulid the whole web app
            </li>
            <li>
                <a href="http://openweathermap.org">Open Weather Map</a> - I use open weather map to search for weather data by city name
            </li>
        </ul>
    </div>

    )
};



module.exports = About;