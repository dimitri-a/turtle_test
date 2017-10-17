import React, {Component} from 'react';
import Box from './Box';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;

    }



    render() {
        console.log('this.props=', this.props);
        return (
            <div className="Grid">

                <input id='val' type='text' placeholder="Enter command"/>

                <button onClick={this.props.process}>Go</button>

                <Box x={this.props.x} y ={this.props.y}></Box>

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
