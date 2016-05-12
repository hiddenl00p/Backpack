import React from 'react';
import Form from './Form.jsx';
import FormGroup from './FormGroup.jsx';
import Label from './Label.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';
import GridRow from './GridRow.jsx';
import Description from './Description.jsx';
import MultipleChoice from './MultipleChoice.jsx';
import Option from './Option.jsx';
import GridColumn from './GridColumn.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup name="start">
          <h1>Welcome</h1>
          <p>Hello text</p>
          <Button keyboard="enter">Start</Button>
        </FormGroup>
        <FormGroup name="mail">
          <Label>1. Mail</Label>
          <Description>Enter your mail</Description>
          <Input type="email" required="true">Please enter mail</Input>
        </FormGroup>
        <FormGroup name="password">
          <Label>2. Password</Label>
          <Input type="password" required="true">Please enter password</Input>
        </FormGroup>
        <FormGroup name="choose multiple"
        logic={
          {
            action: 'hide',
            field: 'mail',
            rule: {'ne': ['']}
          }
        }>
          <Label>3. Choose multiple</Label>
          <MultipleChoice multiple="true">
            <Option keyboard="a">Option 1</Option>
            <Option keyboard="s">Option 2</Option>
            <Option keyboard="d">Option 3</Option>
            <Option keyboard="f">Option 4</Option>
          </MultipleChoice>
        </FormGroup>
        <FormGroup name="choose one" >
          <Label>4. Choose one</Label>
          <MultipleChoice required="true">
            <Option keyboard="a">Option 1</Option>
            <Option keyboard="s">Option 2</Option>
            <Option keyboard="d">Option 3</Option>
            <Option keyboard="f">Option 4</Option>
          </MultipleChoice>
        </FormGroup>
        <FormGroup name="end">
          <h1>End</h1>
          <p>World text</p>
          <Button keyboard="enter" type="submit">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}
