import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Players from './Players'

describe('<Players />', () => {
    it('should render "No players available" when no players provided', () => {
        const { getByText } = render(<Players />)

        expect(getByText(/no players/i)).toBeInTheDocument()
    })
})