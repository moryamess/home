import React from 'react';
import { Button, Form, Message, Container,Input } from 'semantic-ui-react';
import AutoSugg from './autoSuggest';
export default class Addmenu extends React.Component {

render(){
    return (
        <Container>
<form class='ui success form'>
  <div class='field'>
    <label>Food Item</label>
  
    <Input as={AutoSugg}  placeholder='Search...' />

  
  </div>
  <div class='ui success message'>
    <div class='content'>
      <div class='header'>Form Completed</div>
      <p>You&#x27;re all signed up for the newsletter</p>
    </div>
  </div>
  <button class='ui button' role='button'>
    Submit
  </button>
</form>
</Container>
    
    );
}

}