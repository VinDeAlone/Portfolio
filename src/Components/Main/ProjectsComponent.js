import React, { useState } from 'react'

const ProjectsComponent = () => {

  const [styles, setStyles] = useState({
    common : {
      color : "red"
    }
  })

  return (
    <div>
      <b style={styles.common}> = Under construction :( </b>
    </div>
  )
}

export default ProjectsComponent
