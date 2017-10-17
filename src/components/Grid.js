import React, {Component} from 'react';
import Box from './Box';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;
        console.log('this.props',this.props);


    }


    handleChange = (e) =>{
        //todo remove
        console.log('this.props=',this.props);
        //debugger;
        
        this.props.changeCommand(e.target.value)
    }


    render() {
        console.log('this.props=', this.props);
        return (
            <div className="Grid">

                <input id='val' type='text' value={this.props.command} onChange={this.handleChange} placeholder="enter command"/>

                <button onClick={this.props.process}>Go</button>

                <Box x={this.props.x} y ={this.props.y} init={this.props.init} facing={this.props.facing} changePosition={this.props.changePosition}></Box>

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
