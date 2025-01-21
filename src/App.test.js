import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import userEvent from '@testing-library/user-event';
import BookingForm from './Components/BookingForm';


function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



test('Renders the BookingPage heading', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});

test('Initialize / Update Times', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  //const testTime = [];

  const reserveButton = screen.getByTestId('reserve');
  fireEvent.click(reserveButton);

  //const chooseTime = screen.getByLabelText('Choose time');
  //const option = screen.getByRole('option', {name: testTime});
 // userEvent.selectOptions(chooseTime, option);
  //expect (screen.getByRole('option', {name: testTime}).selected).toBe(true);
});

test('Tests the form validation', () => {
  render(<BookingForm/>);

  const date = screen.getByLabelText('date');
  fireEvent.click(date);
  
  const time = screen.getByLabelText('Choose time');
  const guests = screen.getByLabelText('Number of guests');
  const occasion = screen.getByLabelText('Occasion');
  const firstName = screen.getByLabelText('First name');
  const lastName = screen.getByLabelText('Last name');
  const email = screen.getByLabelText('Email');
    expect(isEmailValid('test@example.com')).toBe(true);
    expect(isEmailValid('invalid-email')).toBe(false);
    expect(isEmailValid('test@.com')).toBe(false);

  expect(date, time, guests, occasion, firstName, lastName, email).toBeInTheDocument();

  describe('button', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn();
      const { getByText } = render(<Button label="Submit" onClick={handleClick} />);
      fireEvent.click(getByText('Reserve'));
      expect(handleClick).toHaveBeenCalled();
    });

    it('is disabled when disabled prop is true', () => {
      const { getByText } = render(<Button label="Submit" disabled />);
      expect(getByText('Reserve')).toBeDisabled();
    });
  });
});
