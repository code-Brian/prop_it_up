import React from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor  } = props
    return (
        <div>
            <h1>{ firstName } { lastName }</h1>
            <ul>
                <li>{ age }</li>
                <li>{ hairColor }</li>
            </ul>
        </div>
    )
}

export default PersonCard