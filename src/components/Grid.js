import React, {Component} from 'react';
import Box from './Box';
import { Button } from 'react-bootstrap';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;
    }


    //triggers process on app.js
    handleClick = (e) => {
        let inputText =document.getElementById('commandText').value;

        if (inputText.length >0) {
            this.props.process(inputText)
        }
    }


    render() {
        return (
            <div className="Grid space">
                <input id='commandText' type='text' className="edge" placeholder="enter command"/>
                <Button className="btn btn-success but" onClick={this.handleClick}>Go</Button>
                <Box x={this.props.x} y={this.props.y} init={this.props.init} facing={this.props.facing}
                     changePosition={this.props.changePosition}></Box>
            </div>
        );
    }
}

export default Grid;
