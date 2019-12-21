import React, { Component } from "react";
import styled from "styled-components";
import { Image } from "./Image";
import { Label } from "./Label";

const Card = styled.div`
  width: 300px;
  height: 550px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  position: relative;
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ddd;
  border-radius: 25px;
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 5px;
`;

const IconImage = styled.img`
  width: 25px;
  height: 25px;
`;

const Button = styled.button`
 padding: 10px;
 margin: 2px;
 background-color: coral;
 color: white;
 font-weight: 500;
`;
let a = { a: 1, b1: 2, c1: { c11: 1 } };

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }

  render() {
    console.log(this.props);
    const { imageUri, name } = this.props;
    const { isSelected } = this.state;

    return (
      <Card onClick={()=> this.setState({isSelected:!isSelected})}>
        <Image src={imageUri} />

        <Label>{name}</Label>
        <IconWrapper>
          <IconImage
            src={
              isSelected
                ? require("../../assets/like.svg")
                : require("../../assets/heart.svg")
            }
          />
        </IconWrapper>
          <Button> Go to Cart</Button>
      </Card>
    );
  }
}
export { Product };
