import WhatsNew from "./WhatsNew";
import { Link } from "react-router-dom";
import { FaComments } from "react-icons/fa";
import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../CSS/slick.css';

const events = [
  {
    _id: {
      $oid: "5ebe958f59a9762824e769cf",
    },
    id: 1,
    user_create: "1",
    image:
      "https://hanoigrapevine.com/wp-content/uploads/2020/04/interview-with-World-Press-Photo-700x357.jpg",
    title: "Triển lãm nghệ thuật hửng nắng",
    start_time: {
      $date: "2020-04-25T17:00:00.000Z",
    },
    finish_time: {
      $date: "2019-07-09T17:00:00.000Z",
    },
    address: "Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
    locate: "Hà Nội",
    content: [
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        image:
          "https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
    ],
    category: "1",
    created_date: {
      $date: "2020-03-02T17:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "5ebe958f59a9762824e769cf",
    },
    id: 1,
    user_create: "1",
    image:
      "https://hanoigrapevine.com/wp-content/uploads/2020/04/interview-with-World-Press-Photo-700x357.jpg",
    title: "Triển lãm nghệ thuật hửng nắng",
    start_time: {
      $date: "2020-04-25T17:00:00.000Z",
    },
    finish_time: {
      $date: "2019-07-09T17:00:00.000Z",
    },
    address: "Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
    locate: "Hà Nội",
    content: [
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        image:
          "https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
    ],
    category: "1",
    created_date: {
      $date: "2020-03-02T17:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "5ebe958f59a9762824e769cf",
    },
    id: 1,
    user_create: "1",
    image:
      "https://hanoigrapevine.com/wp-content/uploads/2020/04/interview-with-World-Press-Photo-700x357.jpg",
    title: "Triển lãm nghệ thuật hửng nắng",
    start_time: {
      $date: "2020-04-25T17:00:00.000Z",
    },
    finish_time: {
      $date: "2019-07-09T17:00:00.000Z",
    },
    address: "Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
    locate: "Hà Nội",
    content: [
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        image:
          "https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
    ],
    category: "1",
    created_date: {
      $date: "2020-03-02T17:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "5ebe958f59a9762824e769cf",
    },
    id: 1,
    user_create: "1",
    image:
      "https://hanoigrapevine.com/wp-content/uploads/2020/04/interview-with-World-Press-Photo-700x357.jpg",
    title: "Triển lãm nghệ thuật hửng nắng",
    start_time: {
      $date: "2020-04-25T17:00:00.000Z",
    },
    finish_time: {
      $date: "2019-07-09T17:00:00.000Z",
    },
    address: "Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
    locate: "Hà Nội",
    content: [
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        image:
          "https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
    ],
    category: "1",
    created_date: {
      $date: "2020-03-02T17:00:00.000Z",
    },
  },
  {
    _id: {
      $oid: "5ebe958f59a9762824e769cf",
    },
    id: 1,
    user_create: "1",
    image:
      "https://hanoigrapevine.com/wp-content/uploads/2020/04/interview-with-World-Press-Photo-700x357.jpg",
    title: "Triển lãm nghệ thuật hửng nắng",
    start_time: {
      $date: "2020-04-25T17:00:00.000Z",
    },
    finish_time: {
      $date: "2019-07-09T17:00:00.000Z",
    },
    address: "Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
    locate: "Hà Nội",
    content: [
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
      {
        image:
          "https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg",
      },
      {
        paragraph:
          "Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với triển lãm nghệ thuật đương đại được trông đợi nhất trong năm – TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ, sinh từ năm 1986 trở về sau này.",
      },
    ],
    category: "1",
    created_date: {
      $date: "2020-03-02T17:00:00.000Z",
    },
  },
];

const Event = () => {
  return (
    <div className="row-normal-add-option">
      <div className="card-normal-add-option">
        <a href="/12">
          <img
            src="https://hanoigrapevine.com/wp-content/uploads/2020/04/interview-with-World-Press-Photo-700x357.jpg"
            alt="abc"
            className="new-img"
          />
          <div>
            <h3 style={{ marginBottom: "0" }}>
              Triển lãm nghệ thuật hửng nắng
            </h3>
          </div>
        </a>
        <div style={{ display: "flex" }}>
          <div className="date" style={{ fontStyle: "italic" }}>
            <small>Thời gian: 12-12-2020 - 13-12-2020 - &nbsp;</small>
          </div>
          <div>
            <FaComments />
            <small> (10)</small>
          </div>
        </div>
        <div>
          <small style={{ fontStyle: "italic" }}>
            Địa điểm: Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội
          </small>
        </div>
      </div>
    </div>
  );
};

const Events = (props) => {
  var data = props.data;
  var name = props.name;
  var newsTemplate;
  var settings = {
    dots: false,
    infinite: false,
    accessibility: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (data.length > 0) {
    newsTemplate = data.map(function (item, index) {
      return (
        <div key={index}>
          <Event data={item} />
        </div>
      );
    });
  }
  return (
    <div className="news">
      <div className="title-add-option">
        <Link to="/eventscat/1/1" className="link-eventscat">
          {name}
        </Link>
      </div>
      <Slider {...settings}>{newsTemplate}</Slider>
    </div>
  );
};

class Categories extends Component {
  render() {
    return (
      <div className="content">
        <div className="big add-option-big">
          <Events name={"Mĩ thuật"} data={events} />
          <Events name={"Cho trẻ em"} data={events} />
          <Events name={"Văn học"} data={events} />
          <Events name={"Âm nhạc"} data={events} />
          <Events name={"Nhiếp ảnh, phim, video"} data={events} />
        </div>
        <WhatsNew />
      </div>
    );
  }
}
export default Categories;