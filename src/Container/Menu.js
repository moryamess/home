import React from 'react';
import {Segment,Grid,Header,Image} from 'semantic-ui-react';
import FoodmenuTable from './menuTable';
import githubDB from '../Githubdb'
import moment from 'moment'
var fileName=moment().format("YYYYMMDD").concat('.json')
const hostingIO=new githubDB('hostingIO',fileName);

export default class Foodmenu extends React.Component {

    constructor(props){
        super(props)
        this.state={
            todaymenu:[]
        }
    }

    componentDidMount=()=>{

        hostingIO.getFileData().then((res)=>{


            this.setState({todaymenu:res[moment().format("YYYYMMDD")]})
        });


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
                        <Grid>
                            <Grid.Row>
                            <FoodmenuTable todaymenu={this.state.todaymenu} edit={false}/>
                            </Grid.Row>
                        </Grid>
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
