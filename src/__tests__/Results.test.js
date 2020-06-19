import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import Results from '../components/Results';

describe('Results Test', () => {
    it('results', () => {
      let component = shallow(<Results />);
      expect(component.find('.results')).toBeDefined();
    });
  });