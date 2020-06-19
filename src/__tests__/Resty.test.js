import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import Resty from '../components/RESTy';


describe('Resty test', () => {
  it('url test', () => {
    let resty = mount(<Resty />);

    resty.find('#url').simulate('change', {target: {value: 'testurl'}});
    expect(resty.state('url')).toBe('testurl');
    expect(resty.find('#url').props().value).toBe('testurl');
  });

  it('buttons can be clicked to change state', () => {
    let resty = mount(<Resty />);

    expect(resty.state('method')).toBe('GET');

    });
  });