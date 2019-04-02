
import React, {Component} from 'react';
import { Header, Image, List, Search, Icon } from 'semantic-ui-react'

class InvestmentAdd extends Component {
  render() {
    const { viewParameters, setView } = this.props

    return (
        <div>
            <div className="page-header">
                <a className="button" onClick={setView.bind(this, 'Investment')}>
                <Icon name="chevron left" />
                Back
                </a>
                All Assets
            </div>
            <Search
                className="header-search"
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            // results={results}
            // value={value}
            // {...this.props}
            />
            <List divided verticalAlign='middle' style={{padding:'16px'}}>
                <List.Item style={{padding: '16px 0'}} onClick={setView.bind(this,'InvestmentIntroduction',{})}>
                    <List.Content floated='left' style={{
                            color: 'rgb(9,82,220)',
                            fontSize: '16px',
                            lineHeight: '32px'
                    }}>4.15%</List.Content>
                    <Image avatar src={require('../img/dai.svg')} />
                    <List.Content>
                        <div style={{fontSize:'16px'}}>DAI</div>
                        <div style={{fontSize:'12px',color:'grey'}}>Compound</div>
                    </List.Content>
                    <List.Content floated='right'>
                        <div style={{fontSize:'16px',color:'red'}}>-$12.34</div>
                        <div style={{fontSize:'12px',color:'grey'}}>123.34DAI</div>
                    </List.Content>
                </List.Item>
                <List.Item style={{padding: '16px 0'}} onClick={setView.bind(this,'InvestmentIntroduction',{})}>
                    <List.Content floated='left' style={{
                            color: 'rgb(9,82,220)',
                            fontSize: '16px',
                            lineHeight: '32px'
                    }}>4.15%</List.Content>
                    <Image avatar src={require('../img/eth.svg')} />
                    <List.Content>
                        <div style={{fontSize:'16px'}}>ETH</div>
                        <div style={{fontSize:'12px'}}>Compound</div>
                    </List.Content>
                    <List.Content floated='right'>
                        <div style={{fontSize:'16px',color:'green'}}>+$12.34</div>
                        <div style={{fontSize:'12px',color:'grey'}}>123.34ETH</div>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
  }
}

export default InvestmentAdd;
