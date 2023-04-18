import React,{useState} from 'react'
import Context from './Context'

function Provider({children}) {
    const [ userLogin, setUserLogin] = useState({
        isLogin:'',
        userStatus:''
    })
  return (
    <Context.Provider value={{userLogin,setUserLogin}}>
        {children}
    </Context.Provider>
  )
}

export default Provider