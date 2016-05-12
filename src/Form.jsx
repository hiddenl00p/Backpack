import React from 'react';
import GridRow from './GridRow.jsx';
import Button from './Button.jsx';
import {partsOfElementInViewport, elementInViewport, goToAnchor, forEach, elementInFocus} from './functions.js';

export default class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answeredQuestions: [],
      allQuestions: []
    };
  }

  // navbar actions
  navigate(action){
    if(action === "next"){
      var id = this.state.currentQuestion + 1
    }else if(action === "previous"){
      var id = this.state.currentQuestion - 1
    }

    if((this.state.allQuestions.length > id) && (id >= 0)){
      goToAnchor(id);
      this.setState({
        currentQuestion: id
      });
    }
  }

  // go to specific question
  goToQuestion(id){
    goToAnchor(id);
    this.setState({
      currentQuestion: id
    });
  }

  // store if question has been answered
  answerQuestion(id, value){

    // save to arry

    // update progress
  }

  render() {

    const progress = this.state.answeredQuestions.length

    // add properties to question groups
    var questions = React.Children.map(this.props.children, (child) => {

      var id = this.props.children.indexOf(child)
      return React.cloneElement(child, {
        id: id,
        active: id === this.state.currentQuestion,
        onClick: this.goToQuestion.bind(this, id),
        onInput: this.answerQuestion.bind(this, id)
      });
    });

    return (
      <div>

      <nav className="navbar navbar-light bg-faded">
        <progress className="progress" value={progress || 0.1} max={questions.length}>100%</progress>
        <p>{progress + " from " + questions.length} questions answered</p>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item active">
            <Button  onClick={this.navigate.bind(this, "previous")} className="nav-link">Up</Button>
          </li>
          <li className="nav-item active">
            <Button onClick={this.navigate.bind(this, "next")} className="nav-link" href="#">Down</Button>
          </li>
        </ul>
      </nav>

      <div className="container">
        <GridRow>
          <form className="form">
            {questions}
          </form>
        </GridRow>
      </div>

      </div>
    );
  }

  // add classes when scrolling
  handleScroll(){
    var elements = document.getElementsByClassName('form-group');
    forEach(elements, (index, el) => {

      elementInFocus(el)

      if(partsOfElementInViewport(el)){
        el.classList.add("visible");
      }else{
        el.classList.remove("visible");
      }

      if(elementInViewport(el)){
        el.classList.add("active");
        // this.setState({
        //   currentQuestion: el.id
        // })
      }else{
        el.classList.remove("active");
      }
    });
    console.log(this.state.currentQuestion)
  }

  //
  componentDidMount() {
    var questions = React.Children.map(this.props.children, (child) => {
      return {
        id: this.props.children.indexOf(child),
        name: child.props.name
      }
    });
    this.setState({
      allQuestions: questions
    });
    console.log(questions);
    document.addEventListener('scroll', this.handleScroll.bind(this));
  }
}
