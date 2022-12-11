import React from "react";
import PropTypes from "prop-types";
const Languages = ({ languages }) => {
    return (
        <div>
            <h3>Top 6 Languages:</h3>
            {(console.log("I am mounting!"),
              languages.map((language, index) => <p key={index}> {language} </p>))
            }
        </div>
    );
};
Languages.propTypes = {
    languages : PropTypes.array.isRequired,
};
export default Languages;