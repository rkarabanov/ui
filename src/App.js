import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfPart: 1,
        };
    }

    onClickedChangeNumber(number) {
        this.setState({numberOfPart: number});
    }


  render() {

        const text = this.state.numberOfPart === 1 ? (<ul className="list-group list-group-flush col col-lg-6 col-sm-9">
            <li className="list-group-item list-group-item-warning">1. Модель стандартов Web - HTML, CSS, JavaScript</li>
            <li className="list-group-item list-group-item-warning">2. Теория цвета</li>
            <li className="list-group-item list-group-item-warning">3. Создание каркаса сайта</li>
            <li className="list-group-item list-group-item-warning">4. Цветовые ссхемы и макеты дизайна</li>
            <li className="list-group-item list-group-item-warning">5. Полиграфия в дизайне</li>
        </ul>) : (<ul className="list-group list-group-flush col col-lg-6 col-sm-9">
            <li className="list-group-item list-group-item-warning">6. Основы HTML</li>
            <li className="list-group-item list-group-item-warning">7. Выбор правильного doctype для документов HTML</li>
            <li className="list-group-item list-group-item-warning">8. Разметка текстового контента в HTML</li>
        </ul>);
    return (
      <div className="App">
        <header className="App-header">
            <div className="App-header-title">
                <h1 className="App-title">План курса "Веб-дизайн и юзабилити"</h1></div>
            <div className="App-header-button-bar">
                <button type="button" className="btn btn-warning" onClick={()=>this.onClickedChangeNumber(1)}>Глава 1</button>
                <button type="button" className="btn btn-warning"  onClick={()=>this.onClickedChangeNumber(2)}>Глава 2</button>
            </div>
        </header>
        <h2 className="App-title-body">Глава {this.state.numberOfPart}</h2>
          <div className="container">
              <div className="row justify-content-md-center">
          {text}
              </div>
          </div>

          <div className="container">
              <div className="row justify-content-md-center">
                  <form className={"col col-lg-6 col-sm-9"}>
                      <div className="form-group">
                          <label htmlFor="email">Email*</label>
                          <input type={"email"} className={"form-control"} id={"email"}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="textarea">Вопрос к курсу</label>
                          <textarea className={"form-control"} required={true} id={"textarea"}/>
                      </div>
                      <button type={"submit"} className={"btn btn-warning"}>Отправить</button>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
