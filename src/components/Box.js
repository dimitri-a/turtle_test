import React, {Component} from 'react';

export default class Box extends Component {

    constructor(props) {
        super();
        this.props = props;
        console.log('this.props=', this.props);
    }

    //change style of div related to props
    setClass = () => {
        if (this.props.x >= 0 && this.props.y >= 0 && this.props.init) {
            //select div
            const reference = "" + this.props.x + this.props.y;

            //todo remove
            //debugger;
            //select div corresponding to x,y
            let obj = this.refs[reference];
            console.log('lo=', obj);

            if (obj) {
                console.log('in the house');
                obj.className = 'boxyellow';
                console.log('this.props.x=', this.props.x);
                console.log('this.props.y=', this.props.y);
                console.log('reference', reference);
            }
        }
    }

    render() {
        //todo remove
        // debugger;
        this.setClass();

        return (
            <div className="wrapper" >
                {/*<input className="box box1" type="text" ref="04" value="1"/>*/}

                {/*<img src="../images/turtle-north.png"/>*/}
                <div className="box box1 east" ref="04" />
                <div className="box box1" ref="03" />
                <div className="box box1" ref="02" />
                <div className="box box1" ref="01" />
                <div className="box box1" ref="10" />
                <div className="box box1" ref="14" />
                <div className="box box1" ref="13" />
                <div className="box box1" ref="12" />
                <div className="box box1" ref="11" />
                <div className="box box1" ref="00" />
                <div className="box box1" ref="24" />
                <div className="box box1" ref="23" />
                <div className="box box1" ref="22" />
                <div className="box box1" ref="21" />
                <div className="box box1" ref="20" />
                <div className="box box1" ref="34" />
                <div className="box box1" ref="33" />
                <div className="box box1" ref="32" />
                <div className="box box1" ref="31" />
                <div className="box box1" ref="30" />
                <div className="box box1" ref="44" />
                <div className="box box1" ref="43" />
                <div className="box box1" ref="42" />
                <div className="box box1" ref="41" />
                <div className="box box1" ref="40" />


            </div>
        )
    }
}
