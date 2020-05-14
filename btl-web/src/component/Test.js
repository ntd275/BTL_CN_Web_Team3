import React, { Component } from 'react';
import axios from "axios";
class Test extends Component {
    call = () => {
        axios.get("http://localhost:3000/events").then((res) => {
            alert(res.data);
            console.log(res.data);
        })
    }
    render() {
        this.call();
        return (
            <div>
                <h3>Abc</h3>
            </div>
        );
    }
}

export default Test;