import React from "react"
import Layout from "../components/layout"

import amazon from "../assets/amazon.png"
import burger from "../assets/burger.png"
import profiles from "../assets/profiles.png"
import Card from "../components/Card/Card"

export default function Home() {
  return (
    <Layout>
      <h1>Hi! Welcome to my website</h1>
      <h2>Projects</h2>
      <Card>
        <strong>Amazon Clone</strong>
        <p>Built with React, Firebase, and Material-UI</p>
        <img src={amazon} alt="Amazon" />
      </Card>
      <br />
      <Card>
        <strong>Burger Builder</strong>
        <p>Built with React, Redux, Firebase, and CSS Modules</p>
        <img src={burger} alt="Burger" />
      </Card>
      <br />
      <Card>
        <strong>Profiles REST API</strong>
        <p>Built with Python and Django REST Framework</p>
        <img src={profiles} alt="Profiles" />
      </Card>
    </Layout>
  )
}
