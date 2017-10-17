import React, {Component} from 'react';

export default class Box extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    //change style of div related to props
    //set css for turtle
    setClass = () => {
        //todo remove
        //debugger;
        if (this.props.x >= 0 && this.props.y >= 0 && this.props.init) {

            //todo remove
            //debugger;
            //reset style
            for (let x = 0; x < 5; x++) {
                for (let y = 0; y < 5; y++) {
                    const rf = "" + x + y;
                    let ob = this.refs[rf];
                    ob.className = 'box box1';
                }
            }

            //select div
            const reference = "" + this.props.x + this.props.y;

            let obj = this.refs[reference];
            console.log('lo=', obj);

            if (obj) {

                //set style new:
                obj.className += ' ' + this.props.facing;
            }
        }
    }

    handleClick = (e) =>
    {
        console.log('BOX.js handleclick which box is clicked on ,e.target.id=',e.target.id);
        this.props.changePosition(e.target.id);
    }

    render() {
        this.setClass();

        return (
            <div className="wrapper">
                <div id="04" className="box box1" onClick={this.handleClick} ref="04"/>
                <div id="03" className="box box1" onClick={this.handleClick} ref="03"/>
                <div id="02" className="box box1" onClick={this.handleClick} ref="02"/>
                <div id="01" className="box box1" onClick={this.handleClick} ref="01"/>
                <div id="00" className="box box1" onClick={this.handleClick} ref="00"/>

                <div id="14" className="box box1" onClick={this.handleClick} ref="14"/>
                <div id="13" className="box box1" onClick={this.handleClick} ref="13"/>
                <div id="12" className="box box1" onClick={this.handleClick} ref="12"/>
                <div id="11" className="box box1" onClick={this.handleClick} ref="11"/>
                <div id="10" className="box box1" onClick={this.handleClick} ref="10"/>

                <div id="24" className="box box1" onClick={this.handleClick} ref="24"/>
                <div id="23" className="box box1" onClick={this.handleClick} ref="23"/>
                <div id="22" className="box box1" onClick={this.handleClick} ref="22"/>
                <div id="21" className="box box1" onClick={this.handleClick} ref="21"/>
                <div id="20" className="box box1" onClick={this.handleClick} ref="20"/>

                <div id="34" className="box box1" onClick={this.handleClick} ref="34"/>
                <div id="33" className="box box1" onClick={this.handleClick} ref="33"/>
                <div id="32" className="box box1" onClick={this.handleClick} ref="32"/>
                <div id="31" className="box box1" onClick={this.handleClick} ref="31"/>
                <div id="30" className="box box1" onClick={this.handleClick} ref="30"/>

                <div id="44" className="box box1" onClick={this.handleClick} ref="44"/>
                <div id="43" className="box box1" onClick={this.handleClick} ref="43"/>
                <div id="42" className="box box1" onClick={this.handleClick} ref="42"/>
                <div id="41" className="box box1" onClick={this.handleClick} ref="41"/>
                <div id="40" className="box box1" onClick={this.handleClick} ref="40"/>
            </div>
        )
    }
}
