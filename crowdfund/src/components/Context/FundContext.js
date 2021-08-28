import React,{useState,createContext} from 'react'

export const FundContext = createContext();

const FundProvider = (props) => {
    const [funddata, setFunddata] = useState({
        money:500,
        total_money:1000,
        backer:20,
        days_left:30
    }
    )

    return (
        <FundContext.Provider value={[funddata,setFunddata]} >
            {props.children}
        </FundContext.Provider>
    )
}

export default FundProvider;
