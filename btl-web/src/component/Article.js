import React, { Component } from "react";
import WhatsNew from "./WhatsNew";
import { FaComments } from "react-icons/fa";

class Article extends Component {
  render() {
    return (
      <div className="content">
        <div className="big add-option-big">
          <article>
            <header>
              <h1>
                ”Tỏa 3″ từ góc nhìn giám tuyển: Sẽ đa dạng và gợi ra nhiều câu
                hỏi
              </h1>
              <p style={{ display: "flex" }}>
                <div className="date" style={{ fontStyle: "italic" }}>
                  <small>03/04/2020 &nbsp;</small>
                </div>
                <div>
                  <FaComments />
                  <small> (10)</small>
                </div>
              </p>
            </header>
            <div>
              <p className="text-justify">
                Từ 20 tháng 12 năm 2019 đến 23 tháng 2 năm 2020, Trung tâm Nghệ
                thuật đương đại Vincom – VCCA sẽ mở cửa đón khán giả đến với
                triển lãm nghệ thuật đương đại được trông đợi nhất trong năm –
                TỎA 3. TỎA 3 giới thiệu tới công chúng hơn 50 tác phẩm phong phú
                của các nghệ sỹ trong nước và quốc tế đang sinh sống tại Việt
                Nam. Nghệ sỹ lớn tuổi nhất sinh năm 1979, còn lại đều khá trẻ,
                sinh từ năm 1986 trở về sau này.
              </p>
              <p className="text-justify">
                Trước triển lãm gần kề, giám tuyển Mizuki Endo bày tỏ quan điểm
                về nghệ thuật: “Tác phẩm nghệ thuật luôn luôn thay đổi, và nhiệm
                vụ của nó không phải là để cho tất cả mọi người có thể hiểu
                được. Chúng ta đang sống trong toàn cầu hóa, vì thế mỗi tác phẩm
                cần soi xét không chỉ góc nhìn địa phương, mà còn cần có tính
                quốc tế. Nghệ thuật, bởi vậy, cần có sự đa dạng.”
              </p>
              <div style={{ textAlign: "center" }}>
                <div>
                  <img
                    src="https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <small style={{ fontStyle: "italic" }}>
                    “Chuyển động 4” của hoạ sĩ Công Kim Hoa
                  </small>
                </div>
              </div>

              <p className="text-justify">
                Hai vị giám tuyển, Mizuki Endo từ VCCA và giám tuyển độc lập Đỗ
                Tường Linh đã thống nhất với nhau về tiêu chí đa dạng và quốc tế
                hóa khi cùng chọn các nghệ sỹ tham gia triển lãm. Do đó các nghệ
                sỹ tham gia TỎA 3 không chỉ mang quốc tịch Việt Nam. “Sự đa dạng
                về xuất xứ có thể đem đến cái nhìn nửa từ bên trong, nửa từ bên
                ngoài, và như thế sẽ có thêm các góc nhìn và hiểu biết khác nhau
                về nghệ thuật Việt Nam”, giám tuyển Mizuki Endo giải thích về lý
                do lựa chọn các nghệ sỹ nước ngoài.
              </p>

              <p className="text-justify">
                Cũng với tiêu chí đa dạng, sẽ có các tác phẩm nhiều kích cỡ lớn
                nhỏ ở các thể loại hội họa, điêu khắc, sắp đặt, video art, sử
                dụng nhiều chất liệu phong phú như đất sét, đồ họa máy tính, ảnh
                chụp, video, gỗ. Đáng chú ý có Quỳnh Lâm dùng hoa tươi làm chất
                liệu vẽ trực tiếp lên tường.
              </p>

              <div style={{ textAlign: "center" }}>
                <div>
                  <img
                    src="https://hanoigrapevine.com/wp-content/uploads/2019/12/29-e1577248419407.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <small style={{ fontStyle: "italic" }}>
                    “Chuyển động 4” của hoạ sĩ Công Kim Hoa
                  </small>
                </div>
              </div>
            </div>
            <div className="social-sharing">
              <div className="social-sharing-box">
                <button type="button" className="social-sharing-facebook">
                  <i className="fa fa-facebook-f pr-1 add-option-i"></i>Facebook
                </button>
                <button type="button" className="social-sharing-twitter">
                  <i className="fa fa-twitter pr-1 add-option-i"></i>Twitter
                </button>
                <button type="button" className="social-sharing-google-plus">
                  <i className="fa fa-google-plus pr-1 add-option-i"></i>Google
                  +
                </button>
                <button type="button" className="social-sharing-instagram">
                  <i className="fa fa-instagram pr-1 add-option-i"></i>Instagram
                </button>
              </div>
            </div>
            <div className="pre-next-box-article">
              <div className="pre-article">
                <div>
                  <img
                    src="https://hanoigrapevine.com/wp-content/themes/Newspaper/images/icons/similar-left@2x.png"
                    alt=""
                    className="img-pre-article"
                  />
                  TRƯỚC
                </div>
                <a href="123">Chiếu phim "The Meeting" của Alan Gilsenan</a>
              </div>
              <div className="next-article">
                <div>
                  SAU
                  <img
                    src="https://hanoigrapevine.com/wp-content/themes/Newspaper/images/icons/similar-right@2x.png"
                    alt=""
                    className="img-next-article"
                  />
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

export default Article;
