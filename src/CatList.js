// write your CatList component here
import React from "react"

const CatList = props => {
  console.log(props)
  const catList = props.catPics.map(cat => {
    return (
      <li>
        <img
          height="200px"
          width="200px"
          cat={cat}
          src={cat.url}
          alt="cat"
          key={cat.id}
        />
      </li>
    )
  })
  return <div>{catList}</div>
}

export default CatList
