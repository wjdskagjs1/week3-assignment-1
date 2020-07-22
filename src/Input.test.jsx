import React from 'react';

import { render, fireEvent, getByLabelText, getByDisplayValue } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const { getByText } = render((
    <Item
      value="기존 할 일"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('기존 할 일')).not.toBeNull();

  fireEvent.change(getByLabelText('할 일'), {
    target: { value: '무언가 하기'},
  });

  expect(onChange).toBeCalled();

  fireEvent.click(getByText('추가'));

  expect(handleClick).toBeCalled();
});
