// import {useEffect, useState} from "react"

import Login from './components/Login'

function App(){
  // const [data,setData] = useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:8081/users")
  //   .then(res=>res.json())
  //   .then(data => setData(data))
  //   .catch(err=> console.log(err))
  // },[])

  return(
    <>
      <Login/>
    </>
  )
}

export default App

