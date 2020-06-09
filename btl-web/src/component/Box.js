import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import { uploadPhoto } from "../API/api";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.data.image,
      paragraph: this.props.data.paragraph,
      flag: this.props.data.image === undefined ? true : false,
    };
    this.onDeleteBox = this.onDeleteBox.bind(this);
  }

  componentDidMount() {
    this.setState({
      image: this.props.data.image,
      paragraph: this.props.data.paragraph,
      flag: this.props.data.image === undefined ? true : false,
    });
  }

  onDeleteBox() {
    this.props.onDeleteBox(this.props.index);
  }

  onUpBox = () => {
    this.props.onUpBox(this.props.index);
  };

  onDownBox = () => {
    this.props.onDownBox(this.props.index);
  };

  onAddBox = () => {
    this.props.onAddBox(this.props.index);
  };

  onChangeTextBox = (e) => {
    this.props.onChangeTextBox(e.target.value, this.props.index);
  };

  onChangeTypeBox = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.data.paragraph !== this.state.paragraph ||
      nextProps.data.image !== this.state.image
    ) {
      console.log(
        nextProps.data.paragraph !== this.state.paragraph,
        nextProps.data.image !== this.state.image,
        nextProps.data.image
      );
      this.setState({
        image: nextProps.data.image,
        paragraph: nextProps.data.paragraph,
        flag: nextProps.data.image === undefined ? true : false,
      });
    }
  }

  onChangeImageBox = (e) => {
    var image = e.target.files[0];
    const photo = new FormData();
    photo.append("photo", image, image.name);

    uploadPhoto({ photo }).then((result) => {
      let link = "http://" + result.data.link;
      this.props.onChangeImageBox(link, this.props.index);
      this.setState({
        image: link,
      });
    });
  };

  render() {
    return (
      <div className="mt-2">
        <div style={{ float: "right" }}>
          <Button variant="secondary" className="mr-2" onClick={this.onAddBox}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </Button>

          <Button variant="secondary" className="mr-2" onClick={this.onUpBox}>
            <i className="fa fa-arrow-up" aria-hidden="true"></i>
          </Button>

          <Button variant="secondary" className="mr-2" onClick={this.onDownBox}>
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
          </Button>

          <Button
            variant="secondary"
            className="mr-2"
            onClick={this.onChangeTypeBox}
          >
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </Button>

          <Button
            variant="secondary"
            className="mr-2"
            onClick={this.onDeleteBox}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </div>

        {this.state.flag ? (
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              rows="6"
              className="mt-2"
              name="paragraph"
              onChange={this.onChangeTextBox}
              value={this.state.paragraph}
            />
          </InputGroup>
        ) : (
          <InputGroup className="mb-3">
            <FormControl
              className="mt-2"
              type="file"
              onChange={this.onChangeImageBox}
            />
            <Image
              src={this.state.image}
              fluid
              style={{ maxWidth: "80%", margin: "auto" }}
            />
          </InputGroup>
        )}
      </div>
    );
  }
}

export default Box;
