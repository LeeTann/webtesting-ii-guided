import React from 'react'

function Players(props) {
    if(!props.players || !props.players.length > 0) {
        return <h3>No players available</h3>
    }

    return (
        <>
            <h3>Player List</h3>
            {props.players && props.players.map(p => (
                <div key={p.id}>{p.name}</div>
            ))}
        </>
    )
}

export default Players