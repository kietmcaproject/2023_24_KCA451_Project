import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="footer">
            <div className="container flex footer-container">
                <a className="hover-link" href="Portfolio.html" target="_blank" rel="noreferrer">About Me</a>
                <a className="hover-link" href="https://www.linkedin.com/in/shivam-kumar-208a4b192" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a className="hover-link" href="https://twitter.com/Shivam1472?t=fcLIW7HOxVLd429f8BYpqQ&s=09" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a className="hover-link" id="visitorCounter"></a>
            </div>
        </div>
    </div>
  )
}
