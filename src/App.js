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
            facing: 'EAST',
            init: false
        }
    }

    handleKeyDown = (e) => {
        console.log('handlekeydown');

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

    }

    //processes this.state.commands
    process = () => {
        let init = false;

        //const this.state.command = document.getElementById('val').value;

        console.log('input value', this.state.command);

       // this.setState({this.state.command: this.state.command});
        //todo remove
        //debugger;

        // is there a valid PLACE this.state.command?
        if (this.state.command.indexOf('PLACE') > -1) {
            const isValid = /^[A-Z]+ [0-4],[0-4] [A-Z]+$/.test(this.state.command)
            console.log('isValid=', isValid);

            if (!isValid) return;
            this.setState({init: true});
            init = true;

            let placeArr = this.state.command.split(' ');
            console.log('placeArr=', placeArr);

            //coordinates
            let coorArr = placeArr[1].split(',');

            this.setState({x: coorArr[0]});
            this.setState({y: coorArr[1]});
            this.setState({facing: placeArr[2]});
            console.log('coorArr=', coorArr);

        }

        console.log('this.state', this.state);
        //todo remove
        //debugger;

        //if there was a valid PLACE this.state.command
        if (init || this.state.init) {
            //todo remove
            debugger;
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

    }


    render() {
        return (
            <div className="App" onKeyDown={this.handleKeyDown}  tabIndex="0">
                <Grid x={this.state.x} y={this.state.y} facing={this.state.facing} init={this.state.init}
                      process={this.process} command={this.state.command} changeCommand={this.onChange} />
            </div>
        );
    }
}

export default App;


