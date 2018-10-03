import React from 'react';
import { Header,Icon, Table, Button, TableHeaderCell } from 'semantic-ui-react'

const headers={
    label:"Delete",
    color:"blue",
    edit:true
};
export default class FoodmenuTable extends React.Component {

   generateHeader=()=>{

    if(this.props.edit)
        return  <Table.HeaderCell  textAlign="center" >
                    <Header as='h2' color="blue">
                        <Header.Content >
                            Delete
                        </Header.Content>   
                    </Header>
                </Table.HeaderCell>
    

   }

    
   
    generateMenu=()=>{

            var self=this;
        
            if(self.props.todaymenu.length===0)
            {
                return <Table.Row key="blank" warning={true} > 
                <Table.Cell textAlign="center" key="blank" >Menu for today not set</Table.Cell>
                </Table.Row>
            }
        return self.props.todaymenu.map((item)=>{
                        
                    if(self.props.edit)
                    {
                        return <Table.Row key={item}> 
                        <Table.Cell textAlign="center" key={item} >{item}</Table.Cell>
                        <Table.Cell > 
                            <Button disabled={this.props.deleteitem} onClick={this.props.removeFoodItem} deleteitem={item}>Delete</Button></Table.Cell>   
                        </Table.Row>
                        
                    }

                        return <Table.Row key={item}> 
                        <Table.Cell textAlign="center" key={item} >{item}</Table.Cell>

                        </Table.Row>
        }); 

    }






    render(){
        return (
<Table key="orange" unstackable={true} color="orange" celled basic={this.props.edit?"very":false}>
    <Table.Header >
      <Table.Row >
        <Table.HeaderCell  textAlign="center">
        <Header as='h2' color="orange" >
            <Header.Content >
                Today's Menu
                <Header.Subheader color="grey">Updated on</Header.Subheader>
            </Header.Content>   
        </Header>       
        </Table.HeaderCell>
                {this.generateHeader()}
      </Table.Row>
            

    </Table.Header>

    <Table.Body>
            {this.generateMenu()}

    </Table.Body>
  </Table>
                  );
    }

}
