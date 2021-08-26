import React from 'react'
import RewardSelection from '../RewardSelection/RewardSelection'

const RewardModal = (props) => {
    return (
        <>
            <h2>Back this Project</h2>
            <p>`Want to Support ${props.cause}` out in the world </p>
            <RewardSelection />
            <RewardSelection />
            <RewardSelection />
            <RewardSelection />
        </>
    )
}

export default RewardModal
