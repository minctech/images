import React, { Component } from 'react';
import styled from 'styled-components'

const Grid = styled.div `
  display: flex;
  flex-wrap: wrap
  flex-direction: row;
`
const SmallContainer = styled.div `
  display: flex;
  flex-wrap: wrap
  width: 50%;
  height: auto;
`

const HeaderImg = styled.img`
  width: 750px;
  height: 500px;
  border: 1px solid black;
  padding: 0px;
`


const Img = styled.img`
  width: 375px;
  height: 250px;
  border: 1px solid black;
  padding: 0px;
`
Img.displayName = 'Img';
HeaderImg.displayName = 'HeaderImg'
const HeroImages = (props) => (
  <div>
     <Grid>

        <HeaderImg onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[0])}} src={props.imagesForHero[0].imageSource}/>

        <SmallContainer>
          <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[1])}} src={props.imagesForHero[1].imageSource}/>

           <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[2])}} src={props.imagesForHero[2].imageSource}/>

           <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[3])}} src={props.imagesForHero[3].imageSource}/>

          <Img onClick={()=>{props.changeCurrentPhoto(props.imagesForHero[4])}} src={props.imagesForHero[4].imageSource}/>

        </SmallContainer>
      </Grid>


  </div>
);

export default HeroImages;