import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      paragraph: "",
      flag: "true",
    };
  }
  componentDidMount() {
    this.setState({
      image: this.props.element.image,
      paragraph: this.props.element.paragraph,
    });
  }

  onDeleteBox = () => {
    this.props.onDeleteBox(this.props.index);
  };

  onUpBox = () => {
    this.props.onUpBox(this.props.index);
  };

  onDownBox = () => {
    this.props.onDownBox(this.props.index);
  };

  onAddBox = () => {
    this.props.onAddBox();
  };

  onChangeTextBox = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeTextBox = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <div className="mt-2">
        <div style={{ float: "right" }}>
          <Button variant="secondary" className="mr-2" onClick={this.onAddBox}>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </Button>

          <Button variant="secondary" className="mr-2" onClick={this.onUpBox}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </Button>

          <Button variant="secondary" className="mr-2" onClick={this.onDownBox}>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </Button>

          <Button
            variant="secondary"
            className="mr-2"
            onClick={this.onChangeTextBox}
          >
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </Button>

          <Button
            variant="secondary"
            className="mr-2"
            onClick={this.onDeleteBox}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
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
              ref="uploadImg"
              type="file"
              name="selectedFile"
              onChange={this.onChange}
            />
            <Image
              src={this.state.imageCover}
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
