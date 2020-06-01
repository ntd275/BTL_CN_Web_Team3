import React, { Component } from "react";
import WhatsNewHN from "./WhatsNewHN";
import WhatsNewHCM from "./WhatsNewHCM";
import { Link } from "react-router-dom";

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
            <Link to="/calendar" extrac>
            <button
              type="button"
              className="btn btn-success"
            >
              Lịch đầy đủ
            </button>
            </Link>
          </div>
          <WhatsNewHN />
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
            >
              Lịch đầy đủ
            </button>
          </div>
          <WhatsNewHCM />
        </div>
      );
    } 
  }
}

export default WhatsNew;
