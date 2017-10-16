import React, {Component} from 'react';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;
    }


    render() {
        return (
            <div className="Grid">

                <input id='val' type='text'/>
                <button onClick={this.props.process}>Go</button>

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
