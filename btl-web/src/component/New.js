import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import { getNew } from "../API/api";
import moment from "moment";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newspaper: [],
      content: [],
    };
  }

  async componentDidMount() {
    const newsId = this.props.match.params.id;
    const newspaper = await getNew({ newsId });
    console.log(newspaper.data[0]);
    this.setState({
      newspaper: newspaper.data[0],
      content: newspaper.data[0].content,
    });
  }

  render() {
    const { newspaper, content } = this.state;

    var elmNew = content.map((element) => {
      console.log(element.paragraph);
      if (typeof element.paragraph === "undefined") {
        return (
          <div style={{ textAlign: "center" }}>
            <div>
              <img src={element.image} alt="abc" />
            </div>
          </div>
        );
      } else {
        return <p className="text-justify">{element.paragraph}</p>;
      }
    });

    return (
      <div className="content">
        <div className="big add-option-big">
          <article>
            <header>
              <h1>{newspaper.name}</h1>
              <p style={{ display: "flex" }}>
                <div className="date" style={{ fontStyle: "italic" }}>
                  <small>
                    {moment(newspaper.Created_date).format("LL")} &nbsp;
                  </small>
                </div>
              </p>
            </header>
            <div>{elmNew}</div>

            <div className="social-sharing">
              <div className="social-sharing-box">
                <div style={{ margin: "auto" }}>
                  <button type="button" className="social-sharing-facebook">
                    <i className="fa fa-facebook-f pr-1 add-option-i"></i>
                    Facebook
                  </button>
                  <button type="button" className="social-sharing-twitter">
                    <i className="fa fa-twitter pr-1 add-option-i"></i>Twitter
                  </button>
                  <button type="button" className="social-sharing-google-plus">
                    <i className="fa fa-google-plus pr-1 add-option-i"></i>
                    Google +
                  </button>
                  <button type="button" className="social-sharing-instagram">
                    <i className="fa fa-instagram pr-1 add-option-i"></i>
                    Instagram
                  </button>
                </div>
              </div>
            </div>
            <div className="pre-next-box-article">
              <div className="pre-article">
                <div>
                  <i className="fa fa-chevron-left"></i>
                  TRƯỚC
                </div>
                <a href="123">Chiếu phim "The Meeting" của Alan Gilsenan</a>
              </div>
              <div className="next-article">
                <div>
                  SAU
                  <i className="fa fa-chevron-right"></i>
                </div>
                <a href="123">Chiếu phim "The Meeting" của Alan Gilsenan</a>
              </div>
            </div>
          </article>
        </div>
        <WhatsNew />
      </div>
    );
  }
}

export default New;
