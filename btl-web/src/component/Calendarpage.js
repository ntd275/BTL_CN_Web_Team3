import React, { Component } from 'react';
import WhatsNew from './WhatsNew';
import Calendar from './Calendar';
import "../CSS/calendarpage.css";
class Calendarpage extends Component {
    render() {
        return (
            <div className="calendar-page">
                <div className="content">
                    <div className="big">
                        <h4>Lịch</h4>
                        <Calendar/>
                    </div>
                    <WhatsNew />
                </div>
            </div>
        );
    }
}

export default Calendarpage;