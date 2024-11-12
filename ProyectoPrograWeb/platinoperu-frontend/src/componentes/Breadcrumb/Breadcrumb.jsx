import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ path }) => {
    return (
        <div className="breadcrumb">
            {path.split('>').map((item, index) => (
                <span key={index}>
                    {item.trim()}
                    {index < path.split('>').length - 1 && ' > '}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumb;
