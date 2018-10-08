import React from 'react';

import FoodmenuTable from './menuTable';
import { Button, Divider, Form, Input, Radio, Select, TextArea, Container } from 'semantic-ui-react';
import githubDB from '../Githubdb'
import moment from 'moment';

var fileName=moment().format("YYYYMMDD").concat('.json')
const hostingIO=new githubDB('hostingIO',fileName);


export default class Addmenu extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentFoodItem:"",
      todaymenu:[],
      foodItemInput:{
        error:false,
        disabled:false
      },
      disableDelete:false
      
    }
  }

  setSelected = (value) => {
    this.setState({ value:value.value },
      ()=>{
        console.log(`Option selected:`, this.state.value);

      });
  }

  addMenuItem=()=>{

    if(this.state.currentFoodItem.trim()==="")
    {  
        this.setState({currentFoodItem:"",
          foodItemInput:Object.assign({},{error:true},this.state.foodItemInput)});
        return;
      }
      else
      this.setState({
        todaymenu:this.state.todaymenu.concat([this.state.currentFoodItem]),
        currentFoodItem:"",
        saveloading:false,
        foodItemInput:Object.assign({},{error:false},this.state.foodItemInput)
      });
  }

  removeFoodItem=(event,data)=>{

    var temp=this.state.todaymenu;
    var index=temp.indexOf(data.deleteitem)
    var newMenu=temp.slice(0,index);
    newMenu=newMenu.concat(temp.slice(index+1));

    
    this.setState({todaymenu:newMenu})


  }

  saveMenu=()=>{
    this.setState({saveloading:true,
      disableDelete:true,
      foodItemInput:Object.assign({},{disabled:true},this.state.foodItemInput)
    },
    ()=>{
      hostingIO.updateFileContent(this.state.todaymenu,"Aaj cha special").
      then(()=>{
          this.setState({
            saveloading:false
          })
      })
    })



 
  }

  componentDidMount=()=>{
    hostingIO.getFileData().then((res)=>{
        if(res.status && res.status===-1){
          hostingIO.createFile();
        }
        else{
          this.setState({todaymenu:res[moment().format("YYYYMMDD")]})
        }
    })
  }
render(){
  const value=0
  return (
        <Container>
          <br/>
          <br/>
          <FoodmenuTable todaymenu={this.state.todaymenu}
            disableDelete={this.state.disableDelete}
            removeFoodItem={this.removeFoodItem}
          edit={true}/>
          <Divider />
          <Form >
              <Form.Group >
    <Form.Field >
        <Input 
          label="Add Food Here"

          onChange={currentFoodItem=>{ this.setState({currentFoodItem: currentFoodItem.target.value})}} 
          placeholder="Food Name"
          value={this.state.currentFoodItem}
          {...this.state.foodItemInput}
          />
    </Form.Field>
    <Form.Field  >
      <Button content="Add" onClick={this.addMenuItem}/>
      </Form.Field>
      <Form.Field  >
      <Button onClick={this.saveMenu} loading={this.state.saveloading} content="Save" primary/>
      </Form.Field>
 
    </Form.Group>
    
    </Form>
    </Container>
    );
}

}