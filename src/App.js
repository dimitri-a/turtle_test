import React, {Component} from 'react';
import './App.css';
import Grid from './components/Grid';

class App extends Component {

    constructor() {
        console.log('app.js constructor');
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
        console.log('app.js handlekeydown');

        switch (e.keyCode) {
            case 37:
                console.log('key left');
                this.setState({x: this.state.x - 1});
                break;
            case 38:
                console.log('key up');
                this.setState({y: this.state.y + 1});
                break;
            case 39:
                console.log('key right');
                this.setState({x: this.state.x + 1});
                break;
            case 40:
                console.log('key down');
                this.setState({y: this.state.y - 1});
                break;
        }

    }

    onChange = (cmd) => {
        this.setState({command: cmd});
        console.log('app.js onchange');
    }


    //click to change position from clicking a box
    onChangePosition = (xy) => {
        console.log('APP.js onChangePosition , ref value=', xy);

        this.setState({x: Number(xy.substring(0, 1))});
        this.setState({y: Number(xy.substring(1, 2))},() =>{
            this.process('PLACE ' + this.state.x + ',' + this.state.y + ' ' + this.state.facing);
        });

    }

    //processes this.state.commands
    process = (cmd) => {
        let init = false;

        console.log('app.js this should be the command from the Grid comp, command=', cmd);

        console.log('APP.js starting App.process()');
        console.log('APP.js ,check to see setstate this.state', this.state);

        this.setState({command: cmd}, () => {
            // check to see there a valid PLACE this.state.command?
            //todo remove
            debugger;
            console.log('check state in react TAB');
            if (this.state.command.indexOf('PLACE') > -1) {
                const isValid = /^[A-Z]+ [0-4],[0-4] [A-Z]+$/.test(this.state.command)
                console.log('APP.js regex for PLACE isValid=', isValid);

                if (!isValid) return;

                this.setState({init: true});
                init = true;

                let placeArr = this.state.command.split(' ');

                //set position
                let coorArr = placeArr[1].split(',');
                this.setState({x: Number(coorArr[0])});
                this.setState({y: Number(coorArr[1])});
                this.setState({facing: placeArr[2]});

                console.log('app.js process, new x value=', coorArr[0]);
                console.log('app.js process, new y value=', coorArr[1]);

            }

            //if there was a valid PLACE this.state.command
            if (init || this.state.init) {
                console.log('app.js start init this.state.command = ', this.state.command);
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
                                console.log('NORTH facing this.state=', this.state);
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
                        console.log('REPORT x=', this.state.x);
                        console.log('REPORT y=', this.state.y);
                        console.log('REPORT facing=', this.state.facing);

                    default:
                        break;
                }
            }

            console.log('APP.JS test these values again:this.state=', this.state);

        });


    }


    render() {
        console.log('app.js start render');
        return (
            <div className="App" onKeyDown={this.handleKeyDown} tabIndex="0">
                <Grid x={this.state.x} y={this.state.y} facing={this.state.facing} init={this.state.init}
                      process={this.process} command={this.state.command} changeCommand={this.onChange}
                      changePosition={this.onChangePosition}/>
            </div>
        );
    }
}

export default App;


