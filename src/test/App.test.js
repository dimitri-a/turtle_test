import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'react-test-renderer/shallow';
import App from '../App';

it('does it render', () => {

    const props = {
      addTodo: jest.fn()
    }

    const renderer = createRenderer();
    renderer.render(< App />)
    const output = renderer.getRenderOutput()

    expect(output.type).toBe('div');
   // expect(output.props.className).toBe('header')
    //
    // output.props.children.props.onSave('fsakhfkjsdh');
    // expect(props.addTodo).toBeCalled()

  });
