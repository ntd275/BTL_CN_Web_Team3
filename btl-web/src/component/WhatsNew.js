import React, { Component } from "react";
import WhatsNewHN from "./WhatsNewHN";
import WhatsNewHCM from "./WhatsNewHCM";
import WhatsNewAll from "./WhatsNewAll";

class WhatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
    };
  }
  changeHN = () => {
    if (this.state.option !== 1)
      this.setState({
        option: 1,
      });
  };
  changeHCM = () => {
    if (this.state.option !== 2)
      this.setState({
        option: 2,
      });
  };
  changeAll = () => {
    if (this.state.option !== 2)
      this.setState({
        option: 3,
      });
  };
  render() {
    if (this.state.option === 1) {
      return (
        <div className="small">
          <div className="title">
            <a href>Có gì hôm nay</a>
          </div>
          <hr />
          <div className="btn-group button-group btn-new">
            <button
              type="button"
              onClick={this.changeHN}
              className="btn btn-success "
            >
              Hà Nội
            </button>
            <button
              type="button"
              onClick={this.changeHCM}
              className="btn btn-success"
            >
              HCM
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.changeAll}
            >
              Lịch đầy đủ
            </button>
          </div>
          <WhatsNewHN />
        </div>
      );
    } else if (this.state.option === 2) {
      return (
        <div className="small">
          <div className="title">
            <a href>Có gì hôm nay</a>
          </div>
          <hr />
          <div className="btn-group button-group btn-new">
            <button
              type="button"
              onClick={this.changeHN}
              className="btn btn-success"
            >
              Hà Nội
            </button>
            <button
              type="button"
              onClick={this.changeHCM}
              className="btn btn-success"
            >
              HCM
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.changeAll}
            >
              Lịch đầy đủ
            </button>
          </div>
          <WhatsNewHCM />
        </div>
      );
    } else {
      return (
        <div className="small">
          <div className="title">
            <a href>Có gì hôm nay</a>
          </div>
          <hr />
          <div className="btn-group button-group btn-new">
            <button
              type="button"
              onClick={this.changeHN}
              className="btn btn-success"
            >
              Hà Nội
            </button>
            <button
              type="button"
              onClick={this.changeHCM}
              className="btn btn-success"
            >
              HCM
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.changeAll}
            >
              Lịch đầy đủ
            </button>
          </div>
          <WhatsNewAll />
        </div>
      );
    }
  }
}

export default WhatsNew;
