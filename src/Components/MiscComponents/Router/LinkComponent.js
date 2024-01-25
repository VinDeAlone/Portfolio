import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { setURLPath } from '../../../Redux/Actions/URLPath'

const LinkComponent = (props) => {

  const [styles, setStyles] = useState({ color: "black", backgroundColor: "rgb(106, 90, 205)" })
  const [text, setText] = useState("<=Link=>")
  const [nav, setNav] = useState("/")

  useEffect(() => {
    if ("styles" in props) {
      setStyles(props.styles)
    }
    if ("text" in props) {
      setText(props.text)
    }
    if("navigateTo" in props){
      setNav(props.navigateTo)
    }
  }, [styles,text,nav])

  let dispatch = useDispatch()

  let navigateTo = (data) => {
    dispatch(setURLPath(data))
  }

  return (
    <Button style={styles} onClick={() => navigateTo(nav)}>
      {text}
    </Button>
  )
}

export default LinkComponent
