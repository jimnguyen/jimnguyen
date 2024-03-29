import React from "react"
import Layout from "../components/layout"

import amazon from "../assets/amazon.png"
import burger from "../assets/burger.png"
import profiles from "../assets/profiles.png"
import restaurant from "../assets/restaurant.jpeg"
import Card from "../components/Card/Card"

export default function Home() {
  return (
    <Layout>
      <h1>Hi! Welcome to my website</h1>
      <h2>Projects</h2>
      <Card>
        <strong>
          <a href="http://restaurantreview-frontend.s3-website.us-east-2.amazonaws.com/">
            Restaurant Reviews
          </a>
        </strong>
        <p>Built with React, Spring Boot, MySQL, AWS</p>
        <img src={restaurant} alt="Restaurant" />
      </Card>
      <Card>
        <strong>
          <a href="https://amazon-clone.jimnguyen.dev">Amazon Clone</a>
        </strong>
        <p>Built with React, Firebase, and Material-UI</p>
        <img src={amazon} alt="Amazon" />
      </Card>
      <br />
      <Card>
        <strong>
          <a href="https://burger-builder.jimnguyen.dev">Burger Builder</a>
        </strong>
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
