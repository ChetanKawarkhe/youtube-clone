import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext()

export default function AuthProvider({children}){
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [value,setValue] = useState("New")

  useEffect(() =>{
    fetchAlldata(value)
  },[])

  const fetchAlldata = (query)=>{                       //Query has the vaue New
    setLoading(true)
    fetchData(`search/?q=${query}`).then(({contents})=>{        
    console.log("My data has been retrieved after 1 second. ")
    console.log(contents)
      setData(contents)
      setLoading(false)
    })
    console.log("After data retreving statement executed. ")
  }
  return (
    <AuthContext.Provider value={{loading,data,value,setValue}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)