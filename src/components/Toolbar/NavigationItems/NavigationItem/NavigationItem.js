import React from 'react'
import classes from './NavigationItem.module.css'

// const setActive = (props) => {

//   console.log(props.active);

//   if (props.active)
//     return classes.active
//   else
//     return null
// }

const navigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href="/" className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  )
}

export default navigationItem