import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => { console.log(position); },
        (error) => { console.error(error); } 
    );
    return (
        <div>Hi There!</div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
