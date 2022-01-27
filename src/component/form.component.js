import React, { Component } from "react";
import s from "./form.component.css";

class Form extends Component {
    render() {
        return <form className={s.form} method="post">
            <div className={s.inputContainer}>
                <label for="name">Имя:</label>
                <input type="text" id={s.name} name="user_name"></input>
            </div>
            <div className={s.inputContainer}>
                <label for="surname">Фамилия:</label>
                <input type="text" id={s.surname} name="user_surname"></input>
            </div>
        </form>;
    }
}
export default Form;