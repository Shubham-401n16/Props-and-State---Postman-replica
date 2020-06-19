import React from 'react';
import Form from '../components/Form';
import { configure } from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Test Form', () => {
    it('Form html test', () => {
        const component = render(<Form />);
        const selected = component.find('button.buttonselected');
        const getButton = component.find('button#buttonget');
        const postButton = component.find('button#buttonpost');
        const putButton = component.find('button#buttonput');
        const patchButton = component.find('button#buttonpatch');
        const deleteButton = component.find('button#buttondelete');
        const inputBox = component.find('input.input-box');
        const submitButton = component.find('button.submit');

        expect(selected.text()).toBe('GET');
        expect(selected).toMatchObject(getButton);
        expect(postButton.text()).toBe('POST');
        expect(patchButton.text()).toBe('PATCH');
        expect(putButton.text()).toBe('PUT');
        expect(deleteButton.text()).toBe('DELETE');
        expect(inputBox.text()).toBeFalsy();
        expect(submitButton.text()).toBe('Submit');
    })

    it('input exists', () => {
      let component = shallow(<Form />);
      let input = component.find('.url-entry');
      
      expect(input).toBeDefined();
      expect(input.text()).toBe('API URL:');
    });
  
    it('buttons exist', () => {
      let component = shallow(<Form />);
      
      let buttons = component.find('button');
      expect(buttons).toBeDefined();
    })
})