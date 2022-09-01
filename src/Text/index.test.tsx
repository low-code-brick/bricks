import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './index';

describe('<Text />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Text>{msg}</Text>);
    // @ts-ignore
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
