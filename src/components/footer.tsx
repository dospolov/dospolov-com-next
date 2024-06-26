import React from "react"
import Twitter from "./icons/twitter"
import Linkedin from "./icons/linkedin"
import Facebook from "./icons/facebook"

function Footer() {
  return (
    <footer>
      <div className="pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <a
                  href={`https://twitter.com/marat_dospolov`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href={`https://fb.com/dospolov`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href={`https://www.linkedin.com/in/dospolov`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Linkedin"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
            <div className="text-gray-400 text-sm mr-4">
              &copy; 2024 dospolov.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
