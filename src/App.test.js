import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Exception from './components/Exception';
import Photo from './components/Photo';
import PhotoGallery from './components/PhotoGallery';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('PhotoGallery', () => {
  it('renders an exception if the gallery is empty', () => {
    const wrapper = shallow(<PhotoGallery photos={[]}/>);
    expect(wrapper.contains(<Exception msg='Oops! This photo gallery is empty.' />)).toEqual(true);
  });
})

describe('Photo', () => {
  it('renders a caption', () => {
    const wrapper = shallow(<Photo url='' caption='sample caption'/>);
    const caption = <h3>sample caption</h3>;
    expect(wrapper.find('.image').length).toEqual(1);
    expect(wrapper.find('.caption').length).toEqual(1);
  });
  it('does not render an empty caption', () => {
    const wrapper = shallow(<Photo url='' caption=''/>);
    const caption = <h3>sample caption</h3>;
    expect(wrapper.find('.image').length).toEqual(1);
    expect(wrapper.find('.caption').length).toEqual(0);
  });
})

describe('Exception', () => {
  it('renders a message', () => {
    const wrapper = shallow(<Exception msg='sample message'/>);
    const msg = <div>sample message</div>;
    expect(wrapper.contains(msg)).toEqual(true);

  });
})
