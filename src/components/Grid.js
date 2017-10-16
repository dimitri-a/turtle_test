import React, {Component} from 'react';

class Grid extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            x: 0,
            y: 0,
            command: '',
            facing: ''
        }
    }

    //processes commands
    process = () => {

        const val = document.getElementById('val').value;

        console.log('value', val);

        this.setState({currentCommand: val});

        console.log('this.state.currentCommand=', this.state.currentCommand);

        this.state.currentCommand.each(c => {
            switch (c) {
                case 'PLACE':

                    break;

                case 'MOVE':
                    this.state.facing === 'LEFT' ? this.setState({x: this.state.x - 1}) : this.setState({x: this.state.x + 1})
                    break;

                case 'LEFT':

                    switch (this.state.facing) {
                        case 'EAST':
                            this.setState({facing: 'NORTH'});
                            break;

                        case 'SOUTH':
                            this.setState({facing: 'EAST'});
                            break;

                        case 'WEST':
                            this.setState({facing: 'SOUTH'});
                            break;

                        case 'NORTH':
                            this.setState({facing: 'WEST'});
                            break;
                    }

                default:
                    break;
            }
        })


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
