import React, { Component } from 'react';
import ProductsFields from './renderProductFields'; 
import { H1, LabelWrapper, Label } from '../../Styles/createNewQuote';
import { ButtonPanel, Button } from 'odeum-ui';

class AddProduct extends Component {
    render() {
        return (
            <div>
                <H1>Vælg produkter:</H1>
                <LabelWrapper>
                    <Label marginRight="195px;">Produkt</Label>
                    <Label marginRight="29px;">Antal</Label>
                    <Label marginRight="25px;">Rabat (i kr.)</Label>
                    <Label>Pris</Label>
                </LabelWrapper>
                <ProductsFields />
            </div>
        )
    }
}

export default AddProduct; 