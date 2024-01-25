import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

const RouterComponent = (props) => {

    const [urls, setUrls] = useState([])
    const[urlLength, setUrlLength] = useState(0)
    const [elements, setElements] = useState([])
    const [elementLength, setElementLength] = useState(0)

    let getUrl = useSelector(state => state.urlPathReducer)

    useEffect(()=>{
        if("urls" in props){
            setUrls(props.urls)
            setUrlLength(props.urls.length)
        }
        if("elements" in props){
            setElements(props.elements)
            setElementLength(props.elements.length)
        }
    },[getUrl])

    

  return (
    <>
      {
        urlLength === elementLength && elementLength >0 && elementLength <=20 ? 
        urls.map((url,i) => url === getUrl ? elements[i] : null)
        : null
      }
    </>
  )
}

export default RouterComponent
