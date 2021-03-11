import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  const footerStyle = {
    padding: "6rem 0 4rem 0",
    backgroundColor: "#262626",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
    height: "1em",
  }

  return (
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: `60%`,
        padding: `0 1rem`,
      }}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Jim Nguyen</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/resume/">Resume</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
      {/* <footer style={footerStyle}>
        <h3 style={{ color: `white`, textAlign: "top" }}>Jim Nguyen</h3>
      </footer> */}
    </div>
  )
}
