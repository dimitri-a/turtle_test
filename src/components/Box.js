import React, {Component} from 'react';

export default class Box extends Component {

    constructor(props) {
        super();
        this.props = props;
        console.log('this.props=', this.props);
    }

    setClass = (x, y) => {

        if (this.props.x === x && this.props.y === y) {
            console.log('bingo this.props=', this.props);
            return 'boxyellow';
        }
        else {
            return 'box box1';
        }
    }


    render() {
        return (
            <div className="wrapper">
                <div className={this.setClass(0, 4)}>1</div>
                <div className={this.setClass(0, 3)}>2</div>
                <div className={this.setClass(0, 2)}>3</div>
                <div className={this.setClass(0, 1)}>4</div>
                <div className={this.setClass(0, 0)}>5</div>

                <div className={this.setClass(1, 4)}>1</div>
                <div className={this.setClass(1, 3)}>1</div>
                <div className={this.setClass(1, 2)}>1</div>
                <div className={this.setClass(1, 1)}>1</div>
                <div className={this.setClass(1, 0)}>1</div>

                <div className={this.setClass(2, 4)}>1</div>
                <div className={this.setClass(2, 3)}>1</div>
                <div className={this.setClass(2, 2)}>1</div>
                <div className={this.setClass(2, 1)}>1</div>
                <div className={this.setClass(2, 0)}>1</div>

                <div className={this.setClass(3, 4)}>1</div>
                <div className={this.setClass(3, 3)}>1</div>
                <div className={this.setClass(3, 2)}>1</div>
                <div className={this.setClass(3, 1)}>1</div>
                <div className={this.setClass(3, 0)}>1</div>

                <div className={this.setClass(4, 4)}>1</div>
                <div className={this.setClass(4, 3)}>1</div>
                <div className={this.setClass(4, 2)}>1</div>
                <div className={this.setClass(4, 1)}>1</div>
                <div className={this.setClass(4, 0)}>1</div>
            </div>
        )
    }
}
