import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';
import HeroImages from '../client/src/components/HeroImages.jsx';
import PopGallery from '../client/src/components/PopGallery.jsx';
import TinyGallery from '../client/src/components/TinyGallery.jsx';

Enzyme.configure({ adapter: new Adapter() });


// App functionality and rendering
describe('App render', () => {
  let wrapper = mount(<App />);
  it('Should render app', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('displays heroImages on home page', () => {
    expect(wrapper.find(HeroImages).length).toBe(1);
  });

  // const props = {
  //   images: images[1]
  // };
  wrapper = shallow(<App />);
  it('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getListing');
    instance.componentDidMount();
    expect(instance.getListing).toHaveBeenCalledTimes(1);
  });

  it('when show images button is clicked onToggle should be triggered', () => {
    const onToggle = jest.fn();
    wrapper.find('.show-images').simulate('click');
    expect(onToggle).toHaveReturned();
  });
});


// testing for HeroImages functionality and rendering
describe('HeroImages functionality', () => {
  const renderedComponent = shallow(<App />);
  it('Hero Images should render', () => {
    const wrapper = mount(<HeroImages />);
    expect(wrapper.exists()).toBe(true);
  });

  it('when an image is clicked onToggle should be triggered', () => {
    const onToggle = jest.fn();
    renderedComponent.find(HeroImages).simulate('click');
    expect(onToggle).toHaveReturned();
  });

  it('when images are hovered on in heroImages css a css change happens', () => {
    const cssChange = jest.fn();
    const renderedComponent = shallow(<HeroImages />);
    renderedComponent.find('.hero-image').simulate('mouseover');
    expect(cssChange).toHaveReturned();
  });

  it('when an image is clicked the HeroImages, it will pop up the gallery on that specific image ', () => {
    const onToggle = jest.fn();
    const changeCurrentImage = jest.fn();
    const renderedComponent = shallow(<HeroImages />);
    renderedComponent.find('.hero-image').simulate('click');
    expect(onToggle).toHaveReturned();
    expect(changeCurrentImage).toHaveReturned();
  });
});


// PopGallery rendring and fucntionality
describe('testing for proper rendering and functionality of PopGallery', () => {
  const renderedComponent = shallow(<PopGallery />);
  it('test to see if PopGallery has rendered well', () => {
    expect(renderedComponent.exists()).toBe(true);
  });

  it('test to see if images have description div', () => {
    expect(renderedComponent.find('.description').length).toBeGreaterThanOrEqual(30);
  });

  it('test to see if TinyGallery has rendered', () => {
    expect(renderedComponent.find('.tiny-gallery').length).toBe(1);
  });

  it('test to see if image tracker has rendered', () => {
    expect(renderedComponent.find('.image-tracker').length).toBeGreaterThanOrEqual(30);
  });

  it('the next button is clicked it should move next in the gallery', () => {
    const nextButton = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.next').simulate('click');
    expect(nextButton).toHaveReturned();
  });

  it('the back button is clicked it should move next in the gallery', () => {
    const backButton = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.back').simulate('click');
    expect(backButton).toHaveReturned();
  });

  it('when x button is clicked onToggle should be triggered', () => {
    const onToggle = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.x-button').simulate('click');
    expect(onToggle).toHaveReturned();
  });
});


// TinyGallery functionailty and rendering
describe('test on hover function on TinyGallery', () => {
  const renderedComponent = shallow(<TinyGallery />);
  it('test to see if TinyGallery has rendered well', () => {
    expect(renderedComponent.exists()).toBe(true);
  });

  it('test to see if images have description div', () => {
    expect(renderedComponent.find('.tiny-image').length).toBeGreaterThanOrEqual(30);
  });

  it('when images are hovered on in tiny gallery css a css change happens', () => {
    const cssChange = jest.fn();
    renderedComponent.find('.tiny-image').simulate('mouseover');
    expect(cssChange).toHaveReturned();
  });

  it('when an image is clicked the TinyImages, it will jump to that specific image ', () => {
    const changeCurrentImage = jest.fn();
    const renderedComponent = shallow(<TinyGallery />);
    renderedComponent.find('.tiny-image').simulate('click');
    expect(changeCurrentImage).toHaveReturned();
  });
});
