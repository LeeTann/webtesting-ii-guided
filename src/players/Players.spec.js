import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Players from './Players'

describe('<Players />', () => {
    it('should render "No players available" when no players provided', () => {
        const { getByText } = render(<Players />)

        expect(getByText(/no players/i)).toBeInTheDocument()
    })

    it('should render a provided list of players', () => {
        const players = [
            { id: 1, name: 'Nate'}, 
            { id: 2, name: 'Lee' },
            { id: 3, name: 'Rebby'}
        ]
        const { getAllByTestId } = render(<Players players={players} />)

        const playerNames = getAllByTestId('player-name').map(n => n.textContent)
        const names = players.map(p => p.name)

        expect(playerNames).toHaveLength(players.length)
        expect(playerNames).toEqual(names)
    })
})