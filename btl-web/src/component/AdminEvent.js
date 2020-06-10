import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";

import "../CSS/calendarpage.css";
import "../CSS/dashboard.css";
import Box from "./Box";
import Select from "react-select";
import moment from "moment";

import {
  createEvent,
  deleteEvent,
  editEvent,
  uploadPhoto,
  getEventAdmin,
  getEvent,
} from "../API/api";

class AdminEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      image: "",
      title: "",
      start_time: "",
      finish_time: "",
      address: "",
      locate: "",
      content: [],
      category: null,

      boxes: [],

      optionsCategory: [
        { value: "1", label: "Mĩ thuật" },
        { value: "2", label: "Cho trẻ em" },
        { value: "3", label: "Văn học" },
        { value: "4", label: "Âm nhạc" },
        { value: "5", label: "Nhiếp ảnh, Phim, Video" },
      ],
      optionsLocate: [
        { value: "Hà Nội", label: "Hà Nội" },
        { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
      ],
      value: [],

      flagDelete: 0,
      flagSave: 0,
      setoff: 0,
    };
  }

  componentDidMount() {
    if (this.props.match.path === "/admin-create-event") {
      const { boxes } = this.state;
      if (boxes.length === 0) {
        this.onAddBox();
      }
    } else {
      const eventsId = this.props.match.params.id;

      getEventAdmin({ eventsId }).then((result) => {
        console.log(result.data[0]);
        if (result.data[0] !== undefined) {
          const event = result.data[0];
          this.setState({
            id: event.id,
            image: event.image,
            title: event.title,
            start_time: event.start_time,
            finish_time: event.finish_time,
            address: event.address,
            locate: event.locate,
            content: event.content,
            category: event.category,
          });

          var boxes = this.state.boxes;
          for (let i = 0; i < this.state.content.length; i++) {
            boxes = [...boxes, Box];
          }
          this.setState({
            boxes: boxes,
          });
        } else {
          getEvent({ eventsId }).then((result) => {
            if (result !== []) {
              const event = result.data;
              this.setState({
                id: event.id,
                image: event.image,
                title: event.title,
                start_time: event.start_time,
                finish_time: event.finish_time,
                address: event.address,
                locate: event.locate,
                content: event.content,
                category: event.category,
              });
              var boxes = this.state.boxes;
              console.log(this.state);
              for (let i = 0; i < this.state.content.length; i++) {
                boxes = [...boxes, Box];
              }
              this.setState({
                boxes: boxes,
              });
            }
          });
        }
      });
    }
  }

  swapUpBoxes(boxes, index) {
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

  onAddBox = (index = 0) => {
    const element = {
      image: undefined,
      paragraph: undefined,
    };
    var content = this.state.content;
    var boxes = this.state.boxes;

    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index),
    ];

    content = insert(content, index + 1, element);
    boxes = insert(boxes, index + 1, Box);

    this.setState({
      boxes: boxes,
      content: content,
    });
  };

  onUpBox = (index) => {
    if (index !== 0) {
      const boxes = this.swapUpBoxes(this.state.boxes, index);
      const content = this.swapUpContent(this.state.content, index);
      this.setState({
        boxes: boxes,
        content: content,
      });
    }
  };

  onDownBox = (index) => {
    if (index !== this.state.boxes.length - 1) {
      const boxes = this.swapDownBoxes(this.state.boxes, index);
      const content = this.swapDownContent(this.state.content, index);

      this.setState({
        boxes: boxes,
        content: content,
      });
    }
  };

  onDeleteBox = (index) => {
    const boxes = this.state.boxes;
    const content = this.state.content;

    if (boxes.length !== 1) {
      boxes.splice(index, 1);
      content.splice(index, 1);
      this.setState({
        boxes: boxes,
        content: content,
      });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeImage = (e) => {
    var image = e.target.files[0];
    const photo = new FormData();
    photo.append("photo", image, image.name);

    uploadPhoto({ photo }).then((result) => {
      let link = "http://" + result.data.link;
      this.setState({
        image: link,
      });
    });
  };

  onChangeTextBox = (paragraph, index) => {
    const { content } = this.state;

    content[index] = {
      image: undefined,
      paragraph: paragraph,
    };

    this.setState({
      content: content,
    });
  };

  onSubmit = () => {
    const {
      id,
      image,
      title,
      start_time,
      finish_time,
      address,
      locate,
      content,
      category,
    } = this.state;
    if (id !== null) {
      editEvent({
        id,
        image,
        title,
        start_time,
        finish_time,
        address,
        locate,
        content,
        category,
      }).then((result) => {
        this.setState({
          flagSave: 1,
          id: result.data.id,
        });
      });
    } else {
      createEvent({
        image,
        title,
        start_time,
        finish_time,
        address,
        locate,
        content,
        category,
      }).then((result) => {
        this.setState({
          flagSave: 1,
          id: result.data.id,
        });
      });
    }
  };

  onDelete = () => {
    const { id } = this.state;
    if (id !== null) {
      deleteEvent({ id }).then((result) => {
        if (result.data.message === "Event successfully deleted")
          this.setState({
            setoff: 1,
          });
        else {
          this.setState({
            flagDelete: 2,
          });
        }
      });
    } else {
      this.setState({
        flagDelete: 1,
      });
    }
  };

  elmAlertDelete = () => {
    let { flagDelete } = this.state;
    if (flagDelete === 1)
      return (
        <div class="alert alert-danger" role="alert">
          Bài viết chưa được lưu!
        </div>
      );
    else if (flagDelete === 2) {
      return (
        <div class="alert alert-danger" role="alert">
          Xoá bài viết không thành công!
        </div>
      );
    } else return <></>;
  };

  elmAlertSave = () => {
    let { flagSave } = this.state;
    if (flagSave === 2)
      return (
        <div class="alert alert-danger" role="alert">
          Tạo bài viết không thành công!
        </div>
      );
    else if (flagSave === 1) {
      return (
        <div class="alert alert-success" role="alert">
          Lưu thành công!
        </div>
      );
    } else return <></>;
  };

  onChangeImageBox = (image, index) => {
    const { content } = this.state;
    console.log(image);
    content[index] = {
      image: image,
      // paragraph: undefined,
    };

    this.setState({
      content: content,
    });
  };

  handleChangeCategory(value) {
    this.setState({
      category: value.value,
    });
  }

  handleChangeLocate(value) {
    this.setState({
      locate: value.value,
    });
  }

  searchCategory = () => {
    const { optionsCategory } = this.state;
    for (let i = 0; i < optionsCategory.length; i++) {
      if (optionsCategory[i].value === this.state.category) {
        return optionsCategory[i];
      }
    }
  };

  searchLocate = () => {
    const { optionsLocate } = this.state;
    for (let i = 0; i < optionsLocate.length; i++) {
      if (optionsLocate[i].value === this.state.locate) {
        return optionsLocate[i];
      }
    }
  };

  render() {
    const { boxes } = this.state;
    if (this.state.setoff !== 1) {
      if (this.state.category != null) {
        return (
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 dashboard-event">
            <h3>TẠO SỰ KIỆN</h3>
            {this.elmAlertDelete()}
            {this.elmAlertSave()}
            <InputGroup className="mb-3">
              <FormControl
                className="mt-2"
                ref="file"
                type="file"
                name="image"
                multiple
                onChange={this.onChangeImage}
              />
              <Image
                src={this.state.image}
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
                value={this.state.title}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Loại sự kiện
                </InputGroup.Text>
              </InputGroup.Prepend>

              <Select
                id="ducpb"
                onChange={(value) => this.handleChangeCategory(value)}
                options={this.state.optionsCategory}
                defaultValue={this.searchCategory()}
              />
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
                value={this.state.start_time}
              />
              <FormControl
                type="date"
                name="finish_time"
                onChange={this.onChange}
                value={moment(this.state.finish_time).format("MM-DD-YYYY")}
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
                value={this.state.address}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1" style={{ width: "120px" }}>
                  Khu vực
                </InputGroup.Text>
              </InputGroup.Prepend>

              <Select
                id="ducpb"
                onChange={(value) => this.handleChangeLocate(value)}
                options={this.state.optionsLocate}
                defaultValue={this.searchLocate()}
              />
            </InputGroup>

            <div>
              {boxes.length !== 0 &&
                boxes.map((Box, index) => (
                  <Box
                    key={index}
                    index={index}
                    data={this.state.content[index]}
                    onDeleteBox={this.onDeleteBox}
                    onUpBox={this.onUpBox}
                    onDownBox={this.onDownBox}
                    onAddBox={this.onAddBox}
                    onChangeTextBox={this.onChangeTextBox}
                    onChangeImageBox={this.onChangeImageBox}
                  />
                ))}
            </div>

            <div className="mt-2">
              <Button
                variant="secondary"
                className="mr-2"
                type="submit"
                onClick={this.onSubmit}
              >
                Lưu
              </Button>
              <Button
                variant="secondary"
                className="mr-2"
                type="submit"
                onClick={this.onDelete}
              >
                Xoá
              </Button>
            </div>
          </div>
        );
      } else return null;
    } else {
      return (
        <div style={{ height: "60vh" }}>
          <p>
            Bài viết đã được xoá. Tạo sự kiện mới{" "}
            <a href="/admin-create-event">tại đây</a>!
          </p>
        </div>
      );
    }
  }
}

export default AdminEvent;
