import React from 'react';
import {Segment,Grid,Header,Image} from 'semantic-ui-react';
import FoodmenuTable from '../Container/menuTable';
var githubDB = require('../Githubdb/index').githubdb

const hostingIO=new githubDB('hostingIO','newentry4.json');

export default class Foodmenu extends React.Component {

    constructor(props){
        super(props)
        this.state={
            todaymenu:[]
        }
    }

    componentDidMount=()=>{

        hostingIO.getFileData().then();


    }


    render(){
        return (
            <div>
                <Grid>

                    <Grid.Row>
                        <Grid.Column width={4} only="computer">
                        <br/><br/>
                        <Image src="/tiffin.png"  size="medium"/>
                        </Grid.Column>
                        <Grid.Column width={2} only="mobile">
 

                        </Grid.Column>
                        <Grid.Column  computer={8} mobile={12}>
                        <Image src='/logo.png' size="large"  centered={true} />

                            <FoodmenuTable todaymenu={['a','b']} edit={false}/>
                        </Grid.Column>
                        <Grid.Column width={4} only="computer">
                        <br/><br/><br/>
                        <Image src="/thali.png"  size="medium" />

                        </Grid.Column>
                        <Grid.Column width={2} only="mobile">
 

                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column width={8} only="mobile">
                                <Image src="/tiffin.png"  size="small"/>
                            </Grid.Column>
                            <Grid.Column width={8} only="mobile">
                                <Image src="/thali.png"  size="medium"/>
                            </Grid.Column>

                        </Grid.Row>

                </Grid>
            </div>
        );
    }

}
