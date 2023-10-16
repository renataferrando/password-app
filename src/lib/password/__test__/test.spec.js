import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import Component from "../index";

const defaultProps = {
  number: false,
  character: false,
  uppercase: false,
  noConsecutive: false,
};

describe("Given Password component", () => {
  test("Should render as expected", () => {
    const { container } = render(<Component {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  test("When numberProp is set to true should show requirement", () => {
    const testProps = {
      ...defaultProps,
      number: true
    }
    render(
      <Component {...testProps}></Component>);
    const numberRequirement = screen.queryByText(/Has a number 0-9/i);
    expect(numberRequirement).toBeInTheDocument();
  });

  test('When type on input it should ....', () => {
    render(
      <Component {...defaultProps}></Component>);
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'Za' } });
      expect(input.value).toBe('Za')    
  })
});
