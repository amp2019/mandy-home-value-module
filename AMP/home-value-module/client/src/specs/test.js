import React from 'react';
import Enzyme, { mount, render, shallow} from 'enzyme';
import {App, Button, DropDownArrow, Child} from '../components/App.jsx';
// import Modal from '..//components/Modal.jsx';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ComparableHomesItem from '../components/ComparableHomesItem.jsx';

Enzyme.configure({adapter: new Adapter});

  // Shallow rendering 
  test('Should successfully mount App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // Shallow rendering 
  it('Should render the app component correctly', () => {  
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });

  // full DOM rendering
  test('should pass a full DOM render', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  // Shallow rendering for styled components
  test('Should successfully mount Button Styled Component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBe(true);
  });
  test('Should successfully mount DropDownArrow Styled Component', () => {
    const wrapper = shallow(<DropDownArrow />);
    expect(wrapper.exists()).toBe(true);
  });

  // Snapshot test of styled components
  test('Should cotain a button styled component', () => {
    const tree = renderer.create('<Button />').toJSON();
    expect(tree).toMatchSnapshot();
  });

  // child component should be hidden upon rendering 
  test('Should not show child component upon rendering', () => {
    const wrapper = shallow(<App />);
    const isHidden = wrapper.state().isHidden;
    expect(isHidden).toEqual(true);
  });
  
  // imported components
  it('Should contain imported Components', () => {
    const wrapper = shallow(<App />);
    const ZestimateRow = renderer.create('<ZestimateRow />').toJSON();
    expect(ZestimateRow).toMatchSnapshot();
  });
  
  test('Should have properties in state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('isHidden')).toEqual(true);
    expect(wrapper.state('propertyData')).toEqual([{}]);
    expect(wrapper.state('comparableHomesData')).toEqual([{}]);
    expect(wrapper.state('localHomesData')).toEqual([{}]);
  });
  // invoking lifecycle method. 
  it('Should call componentDidMount', () => {
    const mount = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount).toHaveBeenCalled();
    mount.mockRestore();
  });

  it('Should set isHidden property to state to false when user clicks on button', () => {
    const mount = jest.spyOn(App.prototype, 'toggleHidden');
    var wrapper = shallow(<App />);
    wrapper.find('#hi').simulate('click');
    expect(App.prototype.toggleHidden).toHaveBeenCalled();
    console.log(wrapper.state('comparableHomesData'));
    expect(wrapper.state('isHidden')).toBe(false);
    mount.mockRestore();
  });


  // it('Test', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.contains(<div></div>)).toEqual(true);
  // })

  // should have 4 properties in state ???


  //should fetch data state(<propertyname>).length

  // should render data 

  // should show child component when button is clicked
  // it('Should render child component', () => {
  //   const wrapper = shallow(<Button />);
  //   const app = shallow(<App />);
  //   wrapper.simulate('click');
  //   expect(app.state('isHidden')).toEqual(false);
  // });

  // test('Should show child component upon toggleing isHidden', () => {
  //   const wrapper = shallow(<Child />);
  //   const isHidden = wrapper.state().isHidden;
  //   expect(isHidden).toEqual(false);
  // });
});