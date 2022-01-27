import React, { Component } from "react";
import s from "./form.component.css";

class Form extends Component {
    render() {
        return <form className={s.form} method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name"></input>
        </form>;
    }
}
export default Form;