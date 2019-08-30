import React, { Component } from 'react';
import styled from 'styled-components'

const Grid = styled.div `
  display: flex;
  flex-wrap: wrap
  flex-direction: row;
  overflow: hidden;
   -webkit-filter: brightness(100%);
  &:hover {
    -webkit-filter: brightness(70%);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
  }
`
const SmallContainer = styled.div `
  display: flex;
  flex-wrap: wrap
  width: 50%;
  height: auto;
  overflow: hidden;
`

const HeaderImg = styled.img`
  width: 750px;
  height: 500px;
  border:1px solid #021a40;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -ms-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
  vertical-align: middle;
  overflow: hidden;
  &:hover {
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
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
  width: 375px;
  height: 250px;
  border:1px solid #021a40;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -ms-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
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
  height: 25px;
  width: 100px;
  border-radius: 5px;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  z-index: 1;
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
          <Button className="show-images" onClick={props.onToggle}>Show Images</Button>
        </ImgWrapper>
        </SmallContainer>
      </Grid>


  </div>
);

export default HeroImages;