import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import { getNew, previousNew, nextNew } from "../API/api";
import moment from "moment";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newspaper: [],
      content: [],
      preNew: [],
      nexNew: [],
    };
  }

  async componentDidMount() {
    const newsId = this.props.match.params.id;

    const newspaper = await getNew({ newsId });
    this.setState({
      newspaper: newspaper.data,
      content: newspaper.data.content,
    });

    const preNew = await previousNew({ newsId });

    this.setState({
      preNew: preNew.data,
    });

    const nexNew = await nextNew({ newsId });
    console.log(nexNew);
    this.setState({
      nexNew: nexNew.data,
    });
  }

  render() {
    const { newspaper, content, preNew, nexNew } = this.state;
    if (nexNew !== null || preNew != null) {
      console.log(nexNew)
      var elmNew = content.map((element) => {
        if (typeof element.paragraph === "undefined") {
          return (
              <div style={{textAlign: 'center'}}>
                <img src={element.image} alt="abc" style={{maxWidth: '80%'}}/>
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
                      Đăng vào: {moment(newspaper.Created_date).format("LL")} &nbsp;
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
                    <button
                      type="button"
                      className="social-sharing-google-plus"
                    >
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
                  {preNew !== null ? (
                    <a href={`/news/${preNew.id}`}>{preNew.name}</a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="next-article">
                  <div>
                    SAU
                    <i className="fa fa-chevron-right"></i>
                  </div>
                  {nexNew !== null ? (
                    <a href={`/news/${nexNew.id}`}>{nexNew.name}</a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </article>
          </div>
          <WhatsNew />
        </div>
      );
    } else return null;
  }
}

export default New;
