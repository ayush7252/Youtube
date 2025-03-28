import { render } from '@testing-library/react-native'
import Footer from '../Components/Footer'

describe('Footer component' , ()=>{
    it('renders the home logo', ()=>{
        const { getByTestId } = render(<Footer />)
        expect(getByTestId('Home')).toBeTruthy()
        expect(getByTestId('Shorts')).toBeTruthy()
        expect(getByTestId('Add')).toBeTruthy()
        expect(getByTestId('Subscription')).toBeTruthy()
        expect(getByTestId('Profile')).toBeTruthy()
    })
})