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
            command: '',
            facing: 'EAST'
        }
    }

    //processes commands
    process = () => {

        const command = document.getElementById('val').value;

        console.log('input value', command);

        this.setState({command:command});

        //todo remove
        debugger;
        switch (command) {
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
                break;

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
                break;

            case 'REPORT':
                console.log('REPORT x=', this.state.x);
                console.log('REPORT y=', this.state.y);
                console.log('REPORT facing=', this.state.facing);

            default:
                break;
        }

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
