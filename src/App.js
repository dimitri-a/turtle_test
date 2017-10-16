import React, {Component} from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            x: 1,
            y: 1,
            command: 'MOVE',
            facing: 'NORTH'
        }
    }

    //processes commands
    process = () => {

        const val = document.getElementById('val').value;

        console.log('input value', val);

        console.log('this.state.command=', this.state.command);

        const cmds = this.state.command.split(' ');

        console.log('command array items =', cmds);


        cmds.every(c => {

            console.log('hello');
            //todo remove
            debugger;
            switch (c) {
                case 'PLACE':
                    break;

                case 'MOVE':

                    switch (this.state.facing) {
                        case 'EAST':
                            this.setState({x: this.state.x + 1});
                            break;

                        case 'SOUTH':
                            this.setState({y: this.state.y - 1});
                            break;

                        case 'WEST':
                            this.setState({x: this.state.x - 1});
                            break;

                        case 'NORTH':
                            this.setState({y: this.state.y + 1});
                            break;
                    }
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
                            console.log('sss');
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
        );
    }
}

export default App;
