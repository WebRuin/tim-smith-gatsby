import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const ExternalLink = props => (
  <a href={props.link} target="_blank">
    <FontAwesomeIcon icon={faLink} /> {props.desc}
  </a>
)

export default ExternalLink
