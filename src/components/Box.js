import React, {Component} from 'react';

export default class Box extends Component {

    constructor(props) {
        super();
        this.props = props;
    }

    //change style of div related to props
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

    render() {
        this.setClass();

        return (
            <div className="wrapper">
                <div className="box box1" ref="04"/>
                <div className="box box1" ref="03"/>
                <div className="box box1" ref="02"/>
                <div className="box box1" ref="01"/>
                <div className="box box1" ref="10"/>
                <div className="box box1" ref="14"/>
                <div className="box box1" ref="13"/>
                <div className="box box1" ref="12"/>
                <div className="box box1" ref="11"/>
                <div className="box box1" ref="00"/>
                <div className="box box1" ref="24"/>
                <div className="box box1" ref="23"/>
                <div className="box box1" ref="22"/>
                <div className="box box1" ref="21"/>
                <div className="box box1" ref="20"/>
                <div className="box box1" ref="34"/>
                <div className="box box1" ref="33"/>
                <div className="box box1" ref="32"/>
                <div className="box box1" ref="31"/>
                <div className="box box1" ref="30"/>
                <div className="box box1" ref="44"/>
                <div className="box box1" ref="43"/>
                <div className="box box1" ref="42"/>
                <div className="box box1" ref="41"/>
                <div className="box box1" ref="40"/>
            </div>
        )
    }
}
