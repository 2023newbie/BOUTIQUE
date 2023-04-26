import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Aside.module.css'

const Aside = () => {
  return (
    <aside className={classes.side_nav}>
        <h3>CATEGORIES</h3>
        <ul>
          <h4>APPLE</h4>
          <li>
            <NavLink
              to="?type=all"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              All
            </NavLink>
          </li>
          <ul>
            <h5>IPHONE & MAC</h5>
            <li>
              <NavLink
                to="?type=iphone"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Iphone
              </NavLink>
            </li>
            <li>
              <NavLink
                to="?type=ipad"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Ipad
              </NavLink>
            </li>
            <li>
              <NavLink
                to="?type=macbook"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Macbook
              </NavLink>
            </li>
          </ul>
          <ul>
            <h5>WIRELESS</h5>
            <li>
              <NavLink
                to="?type=airpod"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Airpod
              </NavLink>
            </li>
            <li>
              <NavLink
                to="?type=watch"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Watch
              </NavLink>
            </li>
          </ul>
          <ul>
            <h5>OTHER</h5>
            <li>
              <NavLink
                to="?type=mouse"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Mouse
              </NavLink>
            </li>
            <li>
              <NavLink
                to="?type=keyboard"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Keyboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="?type=other"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Other
              </NavLink>
            </li>
          </ul>
        </ul>
      </aside>
  )
}

export default Aside