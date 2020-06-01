import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import Box from "./Box";
import TaskBar from "./TaskBar";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        imageCover: "",
        title: "",
        start_time: "",
        finish_time: "",
        address: "",
        locate: "",
        content: [],
      },

      optionsState: this.props.optionsState,
      value: [],
      boxes: [],
    };
  }

  componentDidMount() {
    const { boxes } = this.state;
    if (boxes.length === 0) {
      this.onAddBox();
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeTextBox = (e, index) => {
    const element = {
      image: "",
      paragraph: e.target.value,
    };

    const content = this.state.event.content;
    content[index] = element;

    this.setState({
      event: {
        content: content,
      },
    });
  };

  swapUpBoxes(boxes, index) {
    console.log(index);
    const temp = boxes[index];
    boxes[index] = boxes[index - 1];
    boxes[index - 1] = temp;
    return boxes;
  }

  swapDownBoxes(boxes, index) {
    const temp = boxes[index];
    boxes[index] = boxes[index + 1];
    boxes[index + 1] = temp;
    return boxes;
  }

  swapUpContent(content, index) {
    console.log(content);
    const temp = content[index];
    content[index] = content[index - 1];
    content[index - 1] = temp;
    return content;
  }

  swapDownContent(content, index) {
    const temp = content[index];
    content[index] = content[index + 1];
    content[index + 1] = temp;
    return content;
  }

  onAddBox = () => {
    const element = {
      image: "",
      paragraph: "",
    };

    var content = this.state.event.content;
    content.push(element);

    this.setState({
      boxes: [...this.state.boxes, Box],
      event: {
        content: content,
      },
    });
  };

  onUpBox = (index) => {
    if (index !== 0) {
      const boxes = this.swapUpBoxes(this.state.boxes, index);
      const content = this.swapUpContent(this.state.event.content, index);
      this.setState({
        boxes: boxes,
        event: {
          content: content,
        },
      });
    }
  };

  onDownBox = (index) => {
    if (index !== this.state.boxes.length - 1) {
      const boxes = this.swapDownBoxes(this.state.boxes, index);
      const content = this.swapDownContent(this.state.event.content, index);

      this.setState({
        boxes: boxes,
        event: {
          content: content,
        },
      });
    }
  };

  onDeleteBox = (index) => {
    const boxes = this.state.boxes;
    const content = this.state.event.content;

    if (boxes.length !== 1) {
      boxes.splice(index, 1);
      content.splice(index, 1);
      this.setState({
        boxes: boxes,
        event: {
          content: content,
        },
      });
    }
  };

  render() {
    const { boxes } = this.state;
    console.log(this.state);

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 dashboard-main">
        <TaskBar />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 dashboard-main-event">
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
            <h3>TẠO SỰ KIỆN</h3>

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

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Tên sự kiện
                </InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="text"
                name="title"
                onChange={this.onChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Loại sự kiện
                </InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                as="select"
                value={this.state.optionsState}
                name="category"
                onChange={this.onChange}
                selected={this.state.optionsState === this.state.value}
              >
                <option value="1">Mĩ thuật</option>
                <option value="2">Cho trẻ em</option>
                <option value="3">Văn học</option>
                <option value="4">Âm nhạc</option>
                <option value="5">Nhiếp ảnh, Phim, Video</option>
              </FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Thời gian
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="date"
                name="start_time"
                onChange={this.onChange}
              />
              <FormControl
                type="date"
                name="finish_time"
                onChange={this.onChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Địa điểm
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Username"
                aria-describedby="basic-addon1"
                type="text"
                name="address"
                onChange={this.onChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Khu vực
                </InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                as="select"
                value={this.state.optionsState}
                name="locate"
                onChange={this.onChange}
                selected={this.state.optionsState === this.state.value}
              >
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              </FormControl>
            </InputGroup>

            <div>
              {boxes.length !== 0 &&
                boxes.map((Box, index) => (
                  <Box
                    key={index}
                    index={index}
                    element={this.state.event.content[index]}
                    onDeleteBox={this.onDeleteBox}
                    onUpBox={this.onUpBox}
                    onDownBox={this.onDownBox}
                    onAddBox={this.onAddBox}
                    onChangeTextBox={this.onChangeTextBox}
                    onChangeTypeBox={this.onChangeTypeBox}
                  />
                ))}
            </div>

            <div className="mt-2">
              <Button variant="secondary" className="mr-2">
                Lưu
              </Button>
              <Button variant="secondary" className="mr-2">
                Xem thử
              </Button>
              <Button variant="secondary" className="mr-2">
                Xoá
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
