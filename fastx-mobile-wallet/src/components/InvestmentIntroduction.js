

import React, {Component} from 'react';
import { Grid, Image, Button, Card, Icon } from 'semantic-ui-react'

class InvestmentIntroduction extends Component {
  render() {
    const { viewParameters, setView } = this.props

    return (
        <div style={{backgroundColor:'rgb(187,187,187)',height:'100%'}}>
            <div className="page-header">
                
                <a className="button" onClick={setView.bind(this, 'Investment')}>
                <Icon name="chevron left" />
                Back
                </a>
                XXX
            </div>
            <div style={{height: '100px',backgroundColor:'#333'}}>

            </div>
            <p style={{textAlign:'center'}}>这里是一段介绍</p>
            <Card.Group style={{padding:'16px'}}>
                <Card style={{width:'100%'}}>
                    <Card.Content>
                        <Card.Header>
                            <Image avatar src={require('../img/eth.svg')} />
                            ETH
                        </Card.Header>
                        <Card.Description>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px',color:'green'}}>4.15%</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>ARP</div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px'}}>$46.07</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>$10k Est. Earnings</div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
            <div style={{padding:'16px',textAlign:'center'}}>
                <Button content='Invest Now' primary fluid size='big' style={{marginBottom:'16px'}}/>
                <a>Show Other Assets</a>
            </div>
            <Card.Group style={{padding:'16px'}}>
                <Card style={{width:'100%'}}>
                    <Card.Content>
                        <Card.Header>
                            <Image avatar src={require('../img/eth.svg')} />
                            ETH
                        </Card.Header>
                        <Card.Description>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px',color:'green'}}>4.15%</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>ARP</div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px'}}>$46.07</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>$10k Est. Earnings</div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
                <Card style={{width:'100%'}}>
                    <Card.Content>
                        <Card.Header>
                            <Image avatar src={require('../img/eth.svg')} />
                            ETH
                        </Card.Header>
                        <Card.Description>
                            <Grid columns={2} textAlign='center'>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px',color:'green'}}>4.15%</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>ARP</div>
                                    </div>
                                </Grid.Column>
                                <Grid.Column>
                                    <div>  
                                        <div style={{fontSize:'16px'}}>$46.07</div>
                                        <div style={{fontSize:'12px',color:'grey'}}>$10k Est. Earnings</div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
  }
}

export default InvestmentIntroduction;
