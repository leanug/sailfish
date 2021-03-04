import React from "react"
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`
  line-height: 1;

  ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
  }

  .social-icons-header {
    justify-content: start;
    font-size: 1.5rem;
  }

  .social-icons-sidebar {
    justify-content: start;
    font-size: 2rem;
  }

  .social-icons-footer {
      font-size: 2rem;
      margin-bottom: 2rem;
      justify-content: center;
  }
`

const SocialLinks = ({ styleClass = '.social-icons-header' } = {}) => (
  <Wrapper>
    <ul className={styleClass}>
      <li>
        <a href="https://twitter.com">
          <FaTwitter className="social-icon"></FaTwitter>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaFacebook className="social-icon"></FaFacebook>
        </a>
      </li>
      <li>
        <a href="https://github.com">
          <FaGithub className="social-icon"></FaGithub>
        </a>
      </li>
      <li>
        <a href="https://github.com">
          <FaLinkedinIn className="social-icon"></FaLinkedinIn>
        </a>
      </li>
    </ul>
  </Wrapper>
)

export default SocialLinks
