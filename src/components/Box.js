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
            <div className="wrapper">
                {/*<input className="box box1" type="text" ref="04" value="1"/>*/}

                <div>
                    <span>
                        <img src="../images/turtle-north.png"/>
                    </span>
                </div>


                <input type="text" className="box box1" ref="03" value="2"/>
                <input type="text" className="box box1" ref="02" value="3"/>
                <input type="text" className="box box1" ref="01" value="4"/>
                <input type="text" className="box box1" ref="10" value="5"/>
                <input type="text" className="box box1" ref="14" value="1"/>
                <input type="text" className="box box1" ref="13" value="2"/>
                <input type="text" className="box box1" ref="12" value="3"/>
                <input type="text" className="box box1" ref="11" value="4"/>
                <input type="text" className="box box1" ref="00" value="5"/>
                <input type="text" className="box box1" ref="24" value="1"/>
                <input type="text" className="box box1" ref="23" value="2"/>
                <input type="text" className="box box1" ref="22" value="3"/>
                <input type="text" className="box box1" ref="21" value="4"/>
                <input type="text" className="box box1" ref="20" value="5"/>
                <input type="text" className="box box1" ref="34" value="1"/>
                <input type="text" className="box box1" ref="33" value="2"/>
                <input type="text" className="box box1" ref="32" value="3"/>
                <input type="text" className="box box1" ref="31" value="4"/>
                <input type="text" className="box box1" ref="30" value="5"/>
                <input type="text" className="box box1" ref="44" value="1"/>
                <input type="text" className="box box1" ref="43" value="2"/>
                <input type="text" className="box box1" ref="42" value="3"/>
                <input type="text" className="box box1" ref="41" value="4"/>
                <input type="text" className="box box1" ref="40" value="5"/>


            </div>
        )
    }
}
