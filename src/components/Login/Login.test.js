import React from 'react';
import {shallow} from 'enzyme';
import Login from './Login';

describe('Login component tests', () => {
    test('Error message is shown when error is present', () => {
        const login = shallow(
            <Login onLogin={f => f} error="Invalid Credentials"/>
        );

        expect(login.find('p')).toHaveLength(1);
    });

    test('Error message is not shown when error is absent', () => {
        const login = shallow(
            <Login onLogin={f => f}/>
        );

        expect(login.find("p")).toHaveLength(0);
    });

    test('On input change of username, the entered text is saved in state', ()=> {
        const login = shallow(
            <Login onLogin={f => f}/>
        );

        expect(login.state().username).toEqual('');
        login.find("input").at(0).simulate('change', {target: {value: "a"}});
        expect(login.state().username).toEqual('a');
    });

    test('On input change of password, the entered text is saved in state', ()=> {
        const login = shallow(
            <Login onLogin={f => f}/>
        );

        expect(login.state().password).toEqual('');
        login.find("input").at(1).simulate('change', {target: {value: "a"}});
        expect(login.state().password).toEqual('a');
    });

    test('OnLogin is called with arguments when Login button is clicked', () => {
        const onLogin = jest.fn();

        const login = shallow(
            <Login onLogin={onLogin}/>
        );

        login.instance().setState({username: "arjun-username", password: "arjun-password"});

        login.find("button").simulate("click");
        expect(onLogin.mock.calls.length).toBe(1);
        expect(onLogin.mock.calls[0][0]).toBe("arjun-username");
        expect(onLogin.mock.calls[0][1]).toBe("arjun-password");
    });
});