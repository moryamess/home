import React from 'react';
import {Segment,Grid,Header,Image} from 'semantic-ui-react';


export default class Foodmenu extends React.Component {

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

                            <Segment.Group>
                            <Header textAlign="center" as='h2' color="orange">
                                            Today's Men
                                            <Header.Subheader  className="ui aligned right " >
                                            <i className="menu-update-time">Last Updated on &nbsp;&nbsp;</i></Header.Subheader>                                     
                            </Header>
                                <Segment textAlign="center" vertical>Te eum doming eirmod, nominati pertinacia argumentum ad his.</Segment>
                                <Segment textAlign="center" vertical>Pellentesque habitant morbi tristique senectus.</Segment>
                                <Segment textAlign="center" vertical>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment>
                            </Segment.Group>
                        </Grid.Column>
                        <Grid.Column width={4} only="computer">
                        <br/><br/>
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
