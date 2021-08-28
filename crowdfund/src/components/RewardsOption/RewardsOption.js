import React,{useState} from 'react'
import data from '../../config/data'
import Styled from 'styled-components'
import Theme from '../theme/Theme'
import { SimpleButton } from '../Button/Button'
import RewardModal from '../RewardModal/RewardModal'

const RewardsOption = () => {
    const [open,setOpen] = useState(false)

    const closeModal = () => {
        setOpen(false)
    }

    const showModal = () => {
        setOpen(true)
    }
    const [rewards] = useState(data);
    return (
        <>
        {open && <RewardModal closeModal={closeModal} />}
        {rewards.map((reward => {
            const {id,name,pledge,desc,left} = reward;
            return(
                <StyledArticle key={id}>
                <StyledDiv1>
                    <h2>{name}</h2>
                <span>Pledge ${pledge} or more</span>
                </StyledDiv1>
                <p>{desc}</p>
                <StyledDiv2>
                <p><span>{left}</span> left</p>
                {!left  ?
                    <SimpleButton className="out-stock btn" name="Out of Stock"></SimpleButton> :
                    <SimpleButton className=" btn" name="Select Reward" onClick={showModal} ></SimpleButton>
                }
                </StyledDiv2>
                </StyledArticle>
            )
        }))}

        </>
    )
}

export default RewardsOption

const StyledArticle = Styled.article`
border:1px solid gray;
padding:1.5rem;
width:90%;
border:0.5px solid gray;
margin:1.5rem;
border-radius:12px;
`
const StyledDiv1 = Styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
flex-direction:row;
& span {
    color:${Theme.primary.moderate}
}
@media ${Theme.mediaQueries.mobile}{
    display:flex;
    flex-direction:column;
}


`
const StyledDiv2 = Styled.div`
display:flex;
justify-content:space-between;
align-items:flex-start;
flex-direction:row;
& p{
    font-size:1.2rem;
}
& span {
    font-weight:700;
}
@media ${Theme.mediaQueries.mobile}{
    display:flex;
    flex-direction:column;
}
`
