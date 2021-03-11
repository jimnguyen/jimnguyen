import React from "react"
import Layout from "../components/layout"
import Card from "../components/Card/Card"

import classes from "./resume.module.css"

export default function Resume() {
  return (
    <Layout>
      <section className={classes.resume}>
        <Card>
          <h1>JIM NGUYEN</h1>
          <h4>
            (425) 442-0267 | vjimnguyen@gmail.com |
            www.linkedin.com/in/jimvnguyen- | Bellevue, WA
          </h4>
          <h5>
            <strong>Education</strong>
          </h5>
          <hr />
          <strong>Western Washington University</strong>
          <br />
          <em>Graduated​​ August 2018</em>
          <br />
          Bachelor of Science in Computer Science
          <br />
          <h5>Software Projects</h5>
          <hr />
          {/* AMAZON CLONE */}
          <h6>
            Amazon Clone -{" "}
            <a href="https://amazon-clone.jimnguyen.dev">
              https://amazon-clone.jimnguyen.dev
            </a>
          </h6>
          <h6>
            <em>Jan 2021 to Jan 2021</em>
          </h6>
          <ul>
            <li>
              · Full-stack web app built with react, node, firebase and axios
              for HTTP requests
            </li>
            <li>
              · Includes secure login functionality, persistent user state and
              full user authentication using firebase
            </li>
            <li>
              · Uses Stripe API for payment processing and secure transactions
            </li>
            <li>· Deployed and hosted through firebase</li>
            <li>
              · Supported with a realtime database with unique order history
              management
            </li>
            <li>
              · Styled using Google’s Material-UI component library for a
              polished and elegant look
            </li>
            <li>
              · Uses modern react practices such as react hooks and functional
              components to manage state
            </li>
          </ul>
          {/* BURGER BUILDER */}
          <h6>
            Burger Builder -{" "}
            <a href="https://burger-builder.jimnguyen.dev">
              https://burger-builder.jimnguyen.dev
            </a>
          </h6>
          <h6>
            <em>Jan 2021 to Feb 2021</em>
          </h6>
          <ul>
            <li>
              · Responsive SPA built using react, react-router-dom, redux, axios
            </li>
            <li>
              · Features tokenized authentication, realtime database, and
              hosting served by Google’s firebase
            </li>
            <li>
              · Custom form, button, and input components. Keeps persistent user
              state even after refresh
            </li>
            <li>
              · Uses redux to manage global state and middleware (redux-thunk)
              for asynchronous functionality
            </li>
            <li>
              · Reworked to use react hooks and other modern react features
              (lazy loading, arrow functions)
            </li>
          </ul>
          {/* BURGER BUILDER */}
          <h6>Profiles API - </h6>
          <h6>
            <em>Jan 2021 to Jan 2021 </em>
          </h6>
          <ul>
            <li>
              · Backend REST API that offers complete user profile creation via
              email, name, and password
            </li>
            <li>
              · Developed using Python and Django REST Framework to create a
              secure API
            </li>
            <li>
              · Allows for users to post statuses and edit user data using HTTP
              requests via Django Viewsets
            </li>
            <li>· Deployed using AWS EC2 and updated using bash scripts</li>
            <li>
              · Offers superuser access using the Django admin built in
              functionality
            </li>
          </ul>
          {/* BURGER BUILDER */}
          <h6>
            Personal Website -{" "}
            <a href="https://jimnguyen.dev">https://jimnguyen.dev</a>
          </h6>
          <h6>
            <em>May 2020 to Present</em>
          </h6>
          <ul>
            <li>· Portfolio site built with react and Gatsby.js</li>
            <li>
              · Contains an integrated resume page, a showcase with personal
              projects, and photos of interests/hobbies
            </li>
            <li>· Deployed using surge.sh and hosted via Google Domains</li>
          </ul>
          <h6>
            Code Review -{" "}
            <a href="https://burger-builder.jimnguyen.dev">
              https://burger-builder.jimnguyen.dev
            </a>
          </h6>
          <h6>
            <em>Sept 2017 to June 2018 </em>
          </h6>
          <ul>
            <li>· Full-stack web developed using react and django</li>
            <li>
              · Features tokenized authentication and created a REST API on
              University owned Azure server
            </li>
            <li>
              · Implemented a line-by-line code highlighter (using highlight.js)
              to easily identify code snippets of interest
            </li>
            <li>
              · Created as a team with four other Computer Science seniors for a
              real client, used Agile methodologies
            </li>
          </ul>
          <h5>Skills</h5>
          <hr />
          <strong>
            <u>Languages/Frameworks/Software:</u>
          </strong>{" "}
          JavaScript, JSX, Java, Python, C/C++, HTML/CSS, Bootstrap,
          Material-UI, Reactjs, Redux, Firebase, Django, AWS, VSCode, Git,
          VMware, Nodejs, Bash
          <h5>Additional Experience</h5>
          <hr />
          <strong>
            <u>Computer Maintenance/Networks Troubleshooting</u>
          </strong>{" "}
          <ul>
            <li>
              · Repaired computers by means of removing malicious software and
              inspection of hardware
            </li>
            <li>
              · Created personalized seamless mesh networks to work in
              multi-level housing
            </li>
          </ul>
        </Card>
      </section>
    </Layout>
  )
}
