import React, {Component} from 'react';
import Box from './Box';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;
    }


    //triggers process on app.js
    handleClick = (e) => {
        console.log('grid.js handleClick , calls App.js::process()');
        this.props.process(document.getElementById('commandText').value)
    }


    render() {
        return (
            <div className="Grid">

                <input id='commandText' type='text' placeholder="enter command"/>
                <button onClick={this.handleClick}>Go</button>
                <Box x={this.props.x} y={this.props.y} init={this.props.init} facing={this.props.facing}
                     changePosition={this.props.changePosition}></Box>

                <pre>
                    {JSON.stringify(this.props.x, null, 2)},
                    {JSON.stringify(this.props.y, null, 2)}
                    {JSON.stringify(this.props.facing, null, 2)}
                </pre>


            </div>
        );
    }
}

export default Grid;
