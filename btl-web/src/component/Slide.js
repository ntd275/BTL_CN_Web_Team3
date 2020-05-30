import React, { useState, Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { trendEvents } from "../API/api";

const SlideChild = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = props.data;
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <a href={`/events/${data[0].id}`}>
          <img
            className="d-block w-100"
            src={data[0].image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[0].title}</h3>
            <p>
              <p>{data[0].content[0].paragraph.substr(0, 120)}...</p>
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href={`/events/${data[1].id}`}>
          <img
            className="d-block w-100"
            src={data[1].image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[1].title}</h3>
            <p>
              <p>{data[1].content[0].paragraph.substr(0, 120)}...</p>
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href={`/events/${data[1].id}`}>
          <img
            className="d-block w-100"
            src={data[2].image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data[2].title}</h3>
            <p>
              <p>{data[2].content[0].paragraph.substr(0, 120)}...</p>
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

class Slide extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await trendEvents();
    this.setState({
      data: res.data,
    });
  }

  render() {
    const { data } = this.state;
    if (data.length === 0) return null;
    else {
      return <SlideChild data={data} />;
    }
  }
}
export default Slide;
