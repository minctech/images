import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';
import HeroImages from '../client/src/components/HeroImages.jsx';
import PopGallery from '../client/src/components/PopGallery.jsx';
import TinyGallery from '../client/src/components/TinyGallery.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });



describe('Examining the syntax of Jest tests', () => {

  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

// test to see if the main page renders and has heroImages
describe('App render', () => {
  let wrapper = mount(<App/>);
  it ('Should render app', () => {

    expect(wrapper.exists()).toBe(true);
  })

  it ('displays five images on home page', () => {
   expect(wrapper.contains('HeroImages')).toBe(true)
  })
})

//onComponentDidMount renders a listing
describe('onComponentDidMount functionality', () => {
  let wrapper;
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
})

//test to see if clicking one of the heroImages triggers the onToggle function
describe('Hero Images Click', () => {
 const renderedComponent = shallow(<App/>);
  it('Hero Images should render', () => {
    const wrapper = mount(<HeroImages/>);
    expect(wrapper.exists()).toBe(true);
  })

  it ('when an image is clicked onToggle should be triggered', () => {
   const onToggle = jest.fn();
   renderedComponent.find(HeroImages).simulate('click');
   expect(onToggle).toHaveReturned()
  })
})

//test to see if clicking show images button triggers the on
describe('test show images button triggers', () => {
 it('when show images button is clicked onToggle should be triggered', () => {
  const onToggle = jest.fn();
  const renderedComponent = shallow(<App />);
  renderedComponent.find('.show-images').simulate('click');
  expect(onToggle).toHaveReturned();
 })
})

//test for rendering of PopGallery
describe('testing for proper rendering of PopGallery', () => {
  const renderedComponent = shallow(<PopGallery />);
  it('test to see if PopGallery has rendered well', () => {
    expect(renderedComponent.exists()).toBe(true)
  })

  it('test to see if images have description div', () =>{
    expect(renderedComponent.find(".description").length).toBeGreaterThanOrEqual(30)
  })

  it('test to see if TinyGallery has rendered', () => {
    expect(renderedComponent.find('.tiny-gallery').length).toBe(1)
  })

  it('test to see if image tracker has rendered', () => {
    expect(renderedComponent.find('.image-tracker').length).toBeGreaterThanOrEqual(30)
  })
})


// test for next button click in PopGallery
describe('next button click on PopGallery', () => {
  it('the next button is clicked it should move next in the gallery', () => {
    const nextButton = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.next').simulate('click');
    expect(nextButton).toHaveReturned();
   })

})

// test for back button click in PopGallery
describe('back button click on PopGallery', () => {
  it('the back button is clicked it should move next in the gallery', () => {
    const backButton = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.back').simulate('click');
    expect(backButton).toHaveReturned();
   })

})

//test for x button click in PopGallery
describe('x button click on PopGallery', () => {
  it('when x button is clicked onToggle should be triggered', () => {
    const onToggle = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.x-button').simulate('click');
    expect(onToggle).toHaveReturned();
   })
})

//test for onhover function on HeroImages
describe('test on hover function on HeroImages', () => {
  it('when images are hovered on in heroImages css a css change happens', () => {
    const onToggle = jest.fn();
    const renderedComponent = shallow(<PopGallery />);
    renderedComponent.find('.hero-image').simulate('"mouseover"');
    expect(onToggle).toHaveReturned();
   })

})

//test for onhover for TinyGallery
describe('test on hover function on TinyGallery', () => {
  it('when images are hovered on in tiny gallery css a css change happens', () => {
    const onToggle = jest.fn();
    const renderedComponent = shallow(<TinyGallery />);
    renderedComponent.find('.tiny-images').simulate('"mouseover"');
    expect(onToggle).toHaveReturned();
   })
})


