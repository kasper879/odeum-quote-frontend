import React, { Component } from 'react';
import {
  AppContainer,
  Header,
  MenuPanel,
  Menu,
  Tab,
  Footer
} from 'odeum-app'
import CreateNewQuote from './Components/createNewQuote';
import Cart from './Components/cart'; 
import Product from './Containers/products';

class App extends Component {

  render() {
    return (
      <AppContainer>
        <Header />
        <MenuPanel>
          <Menu label={'Tilbud'} icon={'home'} route={'/home'}>
            <Tab icon={'assignment'} label={'Opret Tilbud'}>
              <CreateNewQuote />
            </Tab>
            <Tab icon={'assignment'} label={'Tilbuds oversigt'}>
              Oversigt over alle tilbud
            </Tab>
          </Menu>
          <Menu label={'Kunde'} icon={'home'} route={'/kunde'}>
            <Tab icon={'assignment'} label={'Kunde oversigt'}>
              Oversigt over alle Kunder
            </Tab>
          </Menu>
          <Menu label={'Produkt'} icon={'home'} route={'/produkt'}>
          <Tab icon={'assignment'} label={'Produkt oversigt'}>
            Oversigt over alle produkter
            </Tab>
            </Menu>
            <Menu label={'Workspace'} icon={'home'} route={'/workspace'}>
            <Tab icon={'assignment'} label={'workspace'}>
              <Cart/>
              </Tab>
              <Tab icon={'assignment'} label={'produkt'}>
              <Product/>
              </Tab>
              </Menu>
        </MenuPanel>
      </AppContainer>
    );
  }
}

export default App;
