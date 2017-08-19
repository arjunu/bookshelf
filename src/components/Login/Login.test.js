import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

describe('Login component tests', () => {
    test('', () => {
        const login = shallow(
            <Login onLogin={f => f}/>
        );

        expect(login.find('p')).to.have.length(0);
    });
});