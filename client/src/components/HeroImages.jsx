import React, { Component } from 'react';
import styled from 'styled-components'

const Grid = styled.div `
  display: flex;
  flex-wrap: wrap
  flex-direction: row;
  overflow: hidden;
  border:2px solid #021a40;
`
const SmallContainer = styled.div `
  display: flex;
  flex-wrap: wrap
  width: 50%;
  height: auto;
  overflow: hidden;
`

const HeaderImg = styled.img`
  width: 753.5px;
  height: 500px;
  border:2px solid black;
  vertical-align: middle;
  overflow: hidden;
  &:hover {
    -webkit-transform:scale(1.1);
    -moz-transform:scale(1.1);
    -ms-transform:scale(1.1);
    -o-transform:scale(1.1);
    transform:scale(1.1);
  }
`

const ImgWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`

const Img = styled.img`
  width: 374.5px;
  height: 248px;
  border:2px solid #021a40;
  vertical-align: middle;
  overflow: hidden;
  &:hover {
    -webkit-transform:scale(1.1);
    -moz-transform:scale(1.1);
    -ms-transform:scale(1.1);
    -o-transform:scale(1.1);
    transform:scale(1.1);
  }
`


const Button = styled.button`
  position: absolute;
  left: auto;
  right: 24px;
  bottom: 24px;
  height: 40px;
  width: 120px
  margin: 0;
  padding: 0;
  border-width: 0;
  border-color: #f2f2f2;
  background: #f2f2f2;
  font-weight: 400;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 12px;
  overflow: hidden;
  border-width: 0;
  border-radius: 4px;
  color: #000000;
  -webkit-transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

`;

Img.displayName = 'Img';
HeaderImg.displayName = 'HeaderImg'
const HeroImages = (props) => (
  <div>
     <Grid>
       <ImgWrapper>
        <HeaderImg onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[0])}} src={props.imagesForHero[0].imageSource}/>
        </ImgWrapper>
       <SmallContainer>
        <ImgWrapper>
          <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[1])}} src={props.imagesForHero[1].imageSource}/>
        </ImgWrapper>
        <ImgWrapper>
           <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[2])}} src={props.imagesForHero[2].imageSource}/>
        </ImgWrapper>
        <ImgWrapper>
           <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[3])}} src={props.imagesForHero[3].imageSource}/>
        </ImgWrapper>
        <ImgWrapper>
          <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[4])}} src={props.imagesForHero[4].imageSource}/>
          <Button className="show-images" onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[0])}}>View Photos</Button>
        </ImgWrapper>
        </SmallContainer>
      </Grid>


  </div>
);

export default HeroImages;