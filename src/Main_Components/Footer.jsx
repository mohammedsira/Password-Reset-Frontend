import React from 'react'
import { NavLink } from 'react-router-dom' //importing NavLink for navigation
import './Main.css'; //importing style sheet

const Footer = () => {
  return (
    <>
      <footer className="py-4 bg-transparent">
        <div className="container">
          <p className="m-0 text-center text-dark">
            Copyright{" "}
            <NavLink to={"mailTo:mohammedsira18@gmai.com"} className={"fw-bold text-success"}>
              mohammedsira18@gmail.com
            </NavLink>{" "}
            2024. All rights Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer