import React from "react";
import { FaComments } from "react-icons/fa";

function New() {
  return (
    <div className="row-normal" style={{ marginBottom: "0px" }}>
      <img src="images/images1.jpg" alt="abc" className="new-img" />
      <div className="info-new">
        <div>
          <div>
            <h3>Triển lãm nghệ thuật cửng dái</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div className="date" style={{ fontStyle: "italic" }}>
              <small>03/04/2020 &nbsp;</small>
            </div>
            <div>
              <FaComments />
              <small> (10)</small>
            </div>
          </div>
        </div>

        <div>
          <p>
            02/04 - 30/04 - Triển lãm nghệ thuật nhằm nâng cao nhận thức cộng
            đồng về hội chứng tự kỷ
          </p>
          <button
            type="button"
            className="btn btn-danger"
            style={{ backgroundColor: "#9acd32", border: "none" }}
          >
            Primary
          </button>
        </div>
      </div>
    </div>
  );
}

export default New;
