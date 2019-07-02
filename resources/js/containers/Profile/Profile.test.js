import React from 'react';
import { shallow } from 'enzyme';
import ProfileComponent from './Profile.component';


describe('ProfileComponent', () => {
    const wrapper = shallow(<ProfileComponent classes={{}} />);
    it('shallow renders without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
