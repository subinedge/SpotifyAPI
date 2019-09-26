import React from 'react';
import '../App.css';

class Filter extends React.Component{
    render() {
        return (
            <div style={{margin:'20px'}}>
              <img/>
              <input type="text" placeholder="Search Songs"/> 
            </div>
        );
    }
}

export default Filter;
