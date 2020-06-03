import React, { Component } from 'react';
import moment from "moment";
import "../CSS/calenda.css"
import { AllEvents } from "../API/api";
class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            showCalendarTable: true,
            showMonthTable: false,
            dateObject: moment(),
            allmonths: moment.months(),
            showYearNav: false,
            selectedDay: null,
            allevents: []
        });
    }
    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };
    year = () => {
        return this.state.dateObject.format("Y");
    };
    currentDay = () => {
        return this.state.dateObject.format("D");
    };
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
        return firstDay;
    };
    month = () => {
        return this.state.dateObject.format("MMMM");
    };
    showMonth = (e, month) => {
        this.setState({
            showMonthTable: !this.state.showMonthTable,
            showCalendarTable: !this.state.showCalendarTable
        });
    };
    setMonth = month => {
        let monthNo = this.state.allmonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("month", monthNo);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showCalendarTable: !this.state.showCalendarTable
        });
    };
    MonthList = props => {
        let months = [];
        props.data.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setMonth(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let monthlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                    <tr>
                        <th colSpan="4">Select a Month</th>
                    </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    };
    showYearEditor = () => {
        this.setState({
            showYearNav: true,
            showCalendarTable: !this.state.showCalendarTable
        });
    };

    onPrev = () => {
        let curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.subtract(1, curr)
        });
    };
    onNext = () => {
        let curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.add(1, curr)
        });
    };
    setYear = year => {
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showYearNav: !this.state.showYearNav,
            showMonthTable: !this.state.showMonthTable
        });
    };
    onYearChange = e => {
        this.setYear(e.target.value);
    };
    getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }
    YearTable = props => {
        let months = [];
        let nextten = moment()
            .set("year", props)
            .add("year", 12)
            .format("Y");

        let tenyear = this.getDates(props, nextten);

        tenyear.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setYear(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let yearlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                    <tr>
                        <th colSpan="4">Select a Yeah</th>
                    </tr>
                </thead>
                <tbody>{yearlist}</tbody>
            </table>
        );
    };
    onDayClick = (e, d) => {
        this.setState(
            {
                selectedDay: d
            },
            () => {
                console.log("SELECTED DAY: ", this.state.selectedDay);
            }
        );
    };
    async componentDidMount() {
        const event = await AllEvents()
        this.setState({
            allevents: event.data.map((value) => {
                return {
                    start_time: value.start_time,
                    category: value.category,
                    title: value.title
                }
            })
        })
    }
    check = () => {
        // console.log(this.state.allevents)
        // let dayinthismonth = this.state.allevents.filter((element) => {  
        //      //Những sự kiện xảy ra trong tháng hiện tại
        //      return ((new Date(element.start_time)).getUTCMonth()===new Date().getMonth())&&
        //      ((new Date(element.start_time)).getUTCFullYear()===new Date().getFullYear())
        //     // return element.start_time.getDate() === this.state.dateObject.format("M") &&
        //     //     element.start_time.getYear() === this.year();
        // })
        // console.log(dayinthismonth)
        // dayinthismonth.forEach((element)=>{
        //     console.log(moment(element.start_time).format("D"))
        // })
        // for (let i =1;i<=31;i++){
        //     if (parseInt(moment(element.start_time).format("D")) === i) {
        //         console.log("an roi"+i)
        //     }
        // }
    }
    render() {
        const weekdayshort = moment.weekdaysShort();
        let { allevents } = this.state;
        let thismonth = this.state.dateObject.format("M");
        let dayinthismonth = this.state.allevents.filter((element) => {  //những sự kiện xảy ra trong tháng này
            return ((new Date(element.start_time)).getUTCMonth()===new Date().getMonth())&&
            ((new Date(element.start_time)).getUTCFullYear()===new Date().getFullYear())
       })   
        let weekdayshortname = weekdayshort.map(day => {
            return <th key={day}>{day}</th>;
        });
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        let daysInMonth = [];
        for (let i = 1; i <= this.daysInMonth(); i++) {
            let currentDay = i == this.currentDay() ? "today" : "";
            let count = 0;
            let eventType = " ";
            dayinthismonth.forEach(element => {
                if (new Date(element.start_time).getUTCDate() === i) {
                    count++;
                    eventType = "eventType" + element.category;
                    console.log("an roi"+i)
                }
            });
            if (count > 1) eventType = "eventType6"
            let selectedClass = (i == this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={i} className={`calendar-day ${currentDay} ${eventType}`}>
                    <span
                        onClick={e => {
                            this.onDayClick(e, i);
                        }}
                    >
                        {i}
                    </span>
                </td>
            );
        }
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                // let insertRow = cells.slice();
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <div className="tail-datetime-calendar">
                <div className="calendar-navi">
                    <span
                        onClick={e => {
                            this.onPrev();
                        }}
                        class="calendar-button button-prev"
                    >&lt;</span>
                    {!this.state.showMonthTable && !this.state.showYearEditor && (
                        <span
                            onClick={e => {
                                this.showMonth();
                            }}
                            className="calendar-label"
                        >
                            {this.month()},
                        </span>
                    )}
                    <span
                        className="calendar-label"
                        onClick={e => {
                            this.showYearEditor();
                        }}
                    >
                        {this.year()}
                    </span>
                    <span
                        onClick={e => {
                            this.onNext();
                        }}
                        className="calendar-button button-next"
                    >&gt;</span>
                </div>
                <div className="calendar-date">
                    {this.state.showYearNav && <this.YearTable props={this.year()} />}
                    {this.state.showMonthTable && (
                        <this.MonthList data={moment.months()} />
                    )}
                </div>

                {this.state.showCalendarTable && (
                    <div className="calendar-date">
                        <table className="calendar-day">
                            <thead>
                                <tr>{weekdayshortname}</tr>
                            </thead>
                            <tbody>{daysinmonth}</tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}

export default Calendar;