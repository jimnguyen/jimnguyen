import React from "react"
import Layout from "../components/layout"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  clickableIcon: {
    cursor: "pointer",
    marginRight: "20px",
  },
}))

export default function Contact() {
  const classes = useStyles()

  const handleLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/in/jimvnguyen-/"
  }

  const handleGithub = () => {
    window.location.href = "https://www.github.com/jimnguyen"
  }

  const handleInstagram = () => {
    window.location.href = "https://www.instagram.com/jimxnguyen"
  }

  return (
    <Layout>
      <div>
        <h1>Email me at the address below</h1>
        <p>
          <a href="mailto:vjimnguyen@gmail.com">vjimnguyen@gmail.com</a>
        </p>
        <p>
          <LinkedInIcon
            fontSize="large"
            onClick={handleLinkedIn}
            className={classes.clickableIcon}
          />
          <GitHubIcon
            fontSize="large"
            onClick={handleGithub}
            className={classes.clickableIcon}
          />
          <InstagramIcon
            fontSize="large"
            onClick={handleInstagram}
            className={classes.clickableIcon}
          />
        </p>
      </div>
    </Layout>
  )
}
