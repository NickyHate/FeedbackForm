import React, { Component } from "react";
import s from "./form.component.css";

class Form extends Component {
    render() {
        return <form className={s.form} method="post">
            <div className={s.inputContainer}>
                <label for="name">Имя:</label>
                <input type="text" id={s.name} name="user_name"></input>
                <div className={s.validation}></div>
            </div>
            <div className={s.inputContainer}>
                <label for="surname">Компания:</label>
                <input type="text" id={s.surname} name="user_surname"></input>
            </div>
            <div className={s.inputContainer}>
                <label for="email">Email:</label>
                <input type="text" id={s.email} name="user_email"></input>
            </div>
            <div className={s.inputContainer}>
                <label for="date">Дата:</label>
                <input type="text" id={s.date} name="user_date"></input>
            </div>
            <div className={s.textareaContainer}>
                <label for="textarea">Введите текст:</label>
                <textarea id={s.textarea} name="user_textarea"></textarea>
            </div>  
            <div className={s.btnContainer}>
                <input type="submit" id={s.postBtn}></input> 
            </div>                     
        </form>;
    }
}
export default Form;