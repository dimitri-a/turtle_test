import React, {Component} from 'react';

export default class Box extends Component {
    render() {

        var indents = [];
        for (var i = 0; i < 25; i++) {
            indents.push(<div className="box box1">1</div>);
        }
        console.log('indents=',indents);
        return (
            <div className="wrapper">
            {indents}
            </div>
        )
    }


}
