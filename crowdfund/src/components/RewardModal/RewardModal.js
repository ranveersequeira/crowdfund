import React,{useContext, useState} from 'react'
import { Radio,Input,  Space } from 'antd';

import ReactDOM from 'react-dom'
import { SimpleButton } from '../Button/Button';
import { ModalOverlay,ModalContainer,
        StyledWrapper,FlexTitle,
        StyledSection,StyledTitle,
        StyledContainer,StyledDiv} from './StyledModal';
import Thanks from '../Thanks/Thanks';
import { FundContext } from '../Context/FundContext';


//TODO:
//I should use to render dynamically the reward options



const RewardModal = ({closeModal }) => {
    let noReward = true;
    const [value ,setValue] = useState(0)
    const [open,setOpen] = useState(false)

    const [funddata,setFunddata] = useContext(FundContext)



    const closeThanks = () => {
        setOpen(false)
    }

    const getValue = (e) => {
        e.preventDefault();
        let v = parseInt(e.target.value)

        setValue(v)

    }
    const thanksPage = () => {
        setOpen(true)
    }

    const goToThanks = (min) => {
        console.log(value,min)
        if(value < min ){
            alert(`Please enter more than ${min}`)
            return;
        }
         setFunddata({...funddata ,
                money:funddata.money + value,
                backer:funddata.backer + 1
        })
         setOpen(true)
    }

    return ReactDOM.createPortal(
        <>
        {open && <Thanks closeThanks={closeThanks}/>}
        <ModalOverlay onClick={closeModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <StyledWrapper>
                    <FlexTitle>
                        <h2>Back this Project</h2>
                        <button onClick={closeModal}>X</button>
                    </FlexTitle>
                    <p>Want to support us in bringing MasterCraft Bamboo Monitor Riser out in the world</p>
                    <div>
                        <Radio.Group >
                            <Space direction="vertical">

                            {/* Section 1 */}
                                <StyledSection>
                                    <Radio value={1}></Radio>
                                    <div>
                                        <h3>Pledge with no reward</h3>
                                    </div>
                                    <p>Choose to support us without a reward if you simply believe in our project. As a backer,you will be signed up to receive product updated via email.</p>
                                    <StyledContainer>
                                        <p>Enter your pledge</p>
                                        <StyledDiv>
                                            <span>$<Input disabled={noReward} type="number" /></span>
                                            <SimpleButton name="continue" className="className" onClick={thanksPage} />
                                        </StyledDiv>
                                    </StyledContainer>
                                </StyledSection>

                                {/* Section 2 */}

                                <StyledSection>
                                    <Radio value={2}></Radio>
                                    <StyledTitle>
                                        <h3>Bamboo Stand</h3>
                                        <span>Pledge with $25 or more</span>
                                    </StyledTitle>
                                    <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                                    <StyledContainer>
                                        <p>Enter your pledge</p>
                                        <StyledDiv>
                                            <span>$<Input  type="number" onChange={getValue}/></span>
                                            <SimpleButton name="continue" className="className" onClick={() => goToThanks(25)} />
                                        </StyledDiv>
                                    </StyledContainer>
                                </StyledSection>

                                {/* Section 3 */}

                                <StyledSection>
                                    <Radio value={3}></Radio>
                                    <StyledTitle>
                                        <h3>Black Edition Stand</h3>
                                        <span>Pledge with $75 or more reward</span>
                                    </StyledTitle>
                                    <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list.</p>
                                    <StyledContainer>
                                        <p>Enter your pledge</p>
                                        <StyledDiv>
                                            <span>$<Input  type="number" onChange={getValue}/></span>
                                            <SimpleButton name="continue" className="className" onClick={() => goToThanks(75)} />
                                        </StyledDiv>
                                    </StyledContainer>
                                </StyledSection>

                                {/* Section 4 */}
                                <StyledSection>
                                    <Radio value={4}></Radio>
                                    <StyledTitle>
                                        <h3>Mahogany Special Edition</h3>
                                        <span>Pledge with $200 and more reward</span>
                                    </StyledTitle>
                                    <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                                    <StyledContainer>
                                        <p>Enter your pledge</p>
                                        <StyledDiv>
                                            <span>$<Input disabled={noReward} type="number" onChange={getValue}/></span>
                                            <SimpleButton name="continue" className="className" onClick={thanksPage} />
                                        </StyledDiv>
                                    </StyledContainer>
                                </StyledSection>
                            </Space>
                        </Radio.Group>
                    </div>
                </StyledWrapper>
            </ModalContainer>
        </ModalOverlay> </>,
        document.getElementById('portal')
    )
}


export default RewardModal
