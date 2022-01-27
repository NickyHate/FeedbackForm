import React, { Component } from "react";
import Form from "./form.component";
import s from "./app.component.css";

class MyComponent extends Component {
    render() {
        return <div className={s.intro}>
            <Form/>
        </div>;
    }
}
export default MyComponent;