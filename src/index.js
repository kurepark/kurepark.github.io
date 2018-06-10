import React from 'react';
import ReactDom from 'react-dom';
import Counter from './components/Counter';

/*function log(){
    console.log(1111);
}*/
ReactDom.render(
    <div>
        <Counter onClick={() => {
        console.log(1111);
    }}>{1000}</Counter>
    </div>, document.getElementById('app'));

