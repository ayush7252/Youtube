import { render } from '@testing-library/react-native';
import Header from '../Components/Header';

describe('Header Component', () => {
  test('renders the logo image', () => {
    const { getByTestId } = render(<Header />);
    const logo = getByTestId('Logo');
    expect(logo).toBeTruthy();
    expect(logo.props.source).toEqual(require('../assets/Youtube.png'));
  });

  test('renders the cast logo' , ()=> {
    const { getByTestId } = render(<Header />);
    const castLogo = getByTestId('CastLogo');
    expect(castLogo).toBeTruthy();
  });

  test('renders the notification icon', () => {
    const { getByTestId } = render(<Header />);
    const notificationIcon = getByTestId('NotificationIcon');
    expect(notificationIcon).toBeTruthy();
  });

  test('renders the search icon', () => { 
    const { getByTestId } = render(<Header />);
    const searchIcon = getByTestId('SearchIcon');
    expect(searchIcon).toBeTruthy();
  })
});
