import React, {Component} from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {


    constructor(props) {
        super();
        this.props = props;
        this.state = {
            x: 0,
            y: 0,
            command: 'PLACE 3,,EAST MOVE',
            facing: 'NORTH'
        }
    }

    //processes commands
    process = () => {
        
        console.log('process');

        const val = document.getElementById('val').value;

        console.log('value', val);

        //this.setState({currentCommand: val});

        console.log('this.state.currentCommand=', this.state.command);

        const cmds = this.state.command.split(' ');
        console.log('cmds=', cmds);

        cmds.every(c => {
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

                case 'RIGHT':

                    switch (this.state.facing) {
                        case 'EAST':
                            this.setState({facing: 'SOUTH'});
                            break;

                        case 'SOUTH':
                            this.setState({facing: 'WEST'});
                            break;

                        case 'WEST':
                            this.setState({facing: 'NORTH'});
                            break;

                        case 'NORTH':
                            this.setState({facing: 'EAST'});
                            break;
                    }
                case 'REPORT':
                    console.log('x=', this.state.x);
                    console.log('y=', this.state.y);
                    console.log('facing=', this.state.facing);
                default:
                    break;
            }
        })


    }


    render() {
        return (
            <div className="App">
                <Grid x={this.state.x} y={this.state.y} facing={this.state.facing} process={this.process}/>
            </div>
        )
            ;
    }
}

export default App;
