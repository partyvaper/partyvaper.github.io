/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            itch
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif", "png"]}
        src="../images/profile.webp"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      />
      <div>
        <p>Written by <strong>{author?.name}</strong></p>
        <p>{author?.summary || null}</p>
        <p>
          <a target="_blank" href={`https://github.com/${social?.github || ``}`}>
            GitHub
          </a>
          {" | "}
          <a target="_blank" href={`https://${social?.itch || ``}.itch.io`}>
            Itch.io
          </a>
          {" | "}
          <a target="_blank" href={`https://twitter.com/${social?.twitter || ``}`}>
            Twitter
          </a>
        </p>
      </div>
    </div>
  )
}

export default Bio
