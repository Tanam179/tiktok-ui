import React from 'react';
import Header from '../components/header/Header';

const OnlyHeader = ({children}) => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default OnlyHeader;