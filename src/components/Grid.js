import React, {Component} from 'react';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            x: 0,
            y: 0,
            command: '',
            direction: ''
        }
    }

    //processes commands
    process = () => {

        const val = document.getElementById('val').value;

        console.log('value', val);

        this.setState({currentCommand: val});

        console.log('this.state.currentCommand=', this.state.currentCommand);

        switch (this.state.currentCommand) {
            case 'MOVE':
                this.state.direction === 'LEFT' ? this.setState({x: this.state.x - 1}) : this.setState({x: this.state.x + 1})
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <div className="Grid">

                <input id='val' type='text'/>
                <button onClick={this.process}>Go</button>

                <pre>
              {JSON.stringify(this.state.currentPosition, null, 2)}
            </pre>


            </div>
        );
    }
}

export default Grid;
