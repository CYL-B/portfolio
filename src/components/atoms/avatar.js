import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from 'gatsby';
import React from "react";
import { devices } from "../../components/utils/responsive";

const AvatarImg = styled.img`
border-radius: 50%;
box-shadow: 0px 4px 4px 0px #F6CD8B, -4px 4px 4px 0px #F6CD8B;
height: 250px;
object-fit: cover;
object-position: top;
width: 250px;

@media${devices.tablet}{
  height: 450px;
  width: 450px;
        },
`


export function Avatar(props) {
    const data = useStaticQuery(graphql`
    query Avatar {
      allMongodbPortfolioProfile {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  `)

  const profile = data.allMongodbPortfolioProfile.edges[0].node.url;

  return (
    <AvatarImg
      alt="Avatar"
      src={profile}
    />
  );
}