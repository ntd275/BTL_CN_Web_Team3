import React, { Component } from 'react';
import WhatsNew from './WhatsNew';
import Calendar from './Calendar';
import "../CSS/calendarpage.css";
import { Table } from "react-bootstrap"
class Calendarpage extends Component {
    constructor(props){
        super(props);
        this.state =({
            events:[]
        })
    }
    
    render() {
        return (
            <div className="calendar-page">
                <div className="content">
                    <div className="big">
                        <h4>Lịch</h4>
                        <Calendar />
                        <div className="calendar-infor">
                            <Table >
                                <tr>
                                    <td><div className="bg-primary">&nbsp;</div></td>
                                    <td>Mĩ thuật</td>
                                    <td><div className="bg-secondary">&nbsp;</div></td>
                                    <td>Cho trẻ em</td>
                                </tr>
                                <tr>
                                    <td><div className="bg-success">&nbsp;</div></td>
                                    <td>Văn học</td>
                                    <td><div className="bg-danger">&nbsp;</div></td>
                                    <td>Âm nhạc</td>
                                </tr>
                                <tr>
                                    <td><div className="bg-warning">&nbsp;</div></td>
                                    <td>Nhiếp ảnh, phim, video</td>
                                    <td><div className="bg-info">&nbsp;</div></td>
                                    <td>Tổng hợp</td>
                                </tr>
                            </Table>
                        </div>
                    </div>
                    <WhatsNew />
                </div>
            </div>
        );
    }
}

export default Calendarpage;