import React, { Component } from 'react';
import WhatsNewHN from "./WhatsNewHN"
import WhatsNewHCM from "./WhatsNewHCM"

class WhatsNew extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            option :1
        })
    }
    changeHN=()=>{
        if (this.state.option !==1) this.setState({
            option :1
        });
    }
    changeHCM=()=>{
        if (this.state.option !==2) this.setState({
            option :2
        });
    }
    render() {
        if (this.state.option === 1) {
            return (
                <div className="small">
                    <div className="title">
                        <a href>Có gì hôm nay</a>
                    </div>
                    <hr />
                    <div className="button-group">
                        <div className="hanoi">
                            <button onClick={this.changeHN}>Hà Nội</button>
                        </div>
                        <div className="tphcm">
                            <button onClick={this.changeHCM}>TP HCM</button>
                        </div>
                        <div className="lichdaydu">
                            <button><a href>Lịch dầy đủ</a></button>
                        </div>
                    </div>
                    <WhatsNewHN />
                </div>
                
            );
        }
        else {
            return (
                <div className="small">
                    <div className="title">
                        <a href>Có gì hôm nay</a>
                    </div>
                    <hr />
                    <div className="button-group">
                        <div className="hanoi">
                            <button onClick={this.changeHN}>Hà Nội</button>
                        </div>
                        <div className="tphcm">
                            <button onClick={this.changeHCM}>TP HCM</button>
                        </div>
                        <div className="lichdaydu">
                            <button><a href>Lịch dầy đủ</a></button>
                        </div>
                    </div>
                    <WhatsNewHCM />
                </div>
            );
        }
    }
}

export default WhatsNew;