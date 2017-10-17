import React, {Component} from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {

    constructor() {
        super();
        this.state = {
            x: 0,
            y: 0,
            command: '',
            facing: 'NORTH',
            init: false
        }
    }

    handleKeyDown = (e) => {
        switch (e.keyCode) {
            case 37:
                this.setState({x: this.state.x - 1});
                break;
            case 38:
                this.setState({y: this.state.y + 1});
                break;
            case 39:
                this.setState({x: this.state.x + 1});
                break;
            case 40:
                this.setState({y: this.state.y - 1});
                break;
        }

    }

    onChange = (cmd) => {
        this.setState({command: cmd});
    }


    //click to change position from clicking a box
    onChangePosition = (xy) => {
        this.setState({x: Number(xy.substring(0, 1))});
        this.setState({y: Number(xy.substring(1, 2))},() =>{
            this.process('PLACE ' + this.state.x + ',' + this.state.y + ',' + this.state.facing);
        });

    }

    //processes this.state.commands
    process = (cmd) => {
        let init = false;
        //todo remove
        debugger;
        this.setState({command: cmd}, () => {
            // check to see there a valid PLACE this.state.command?
            if (this.state.command.indexOf('PLACE') > -1) {
                const isValid = /^[A-Z]+ [0-4],[0-4],[A-Z]+$/.test(this.state.command)
                if (!isValid) return;
                this.setState({init: true});
                init = true;

                let placeArr = this.state.command.split(' ');
                //set position
                let coorArr = placeArr[1].split(',');
                this.setState({x: Number(coorArr[0])});
                this.setState({y: Number(coorArr[1])});
                this.setState({facing: coorArr[2]});
            }

            //if there was a valid PLACE this.state.command
            if (init || this.state.init) {
                switch (this.state.command) {
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
                                this.setState({y: this.state.y + 1}, () =>{console.log('hopefully y is changed!!',this.state)});
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
                                this.setState({facing: 'EAST'});
                                break;
                        }
                        break;

                    case 'REPORT':
                        console.log( this.state.x +','+ this.state.y +',' +this.state.facing);

                    default:
                        break;
                }
            }
        });


    }


    render() {
        return (
            <div className="App container" onKeyDown={this.handleKeyDown} tabIndex="0">
                <Grid x={this.state.x} y={this.state.y} facing={this.state.facing} init={this.state.init}
                      process={this.process} command={this.state.command} changeCommand={this.onChange}
                      changePosition={this.onChangePosition}/>
            </div>
        );
    }
}

export default App;


