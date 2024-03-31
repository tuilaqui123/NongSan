import React from "react";
import { Link } from "react-router-dom";

const RouterButton = ({ onClick, children, path }) => {
    return (
        <Link to={path}>
            <button
                type="button"
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    );
};

export default RouterButton;