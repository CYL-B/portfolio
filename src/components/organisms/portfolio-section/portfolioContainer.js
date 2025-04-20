import React, { useState } from "react";
//Librairies pour le style
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { devices } from "../../utils/responsive";

import { Button } from "../../atoms/button";

const PortfolioContainerDiv = styled.div`
  border: 1px solid #ffffff;
  background: rgb(255 255 255 / 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(154 201 255 / 0.6);
  margin: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  @media${devices.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ShowProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  width: 100%;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
  @media${devices.tablet} {
    width: 40%;
    padding-bottom: 0px;
  }
`;
const ProjectsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 25px;
  gap:20px;
`;
const ShowProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:20px;
  align-content: space-around;
  width: 100%;
  border-top 6px solid #ffffff;
  padding-left: 20px;
  height: 100%;
  overflow-y: scroll;
     @media${devices.laptop} {
     width: 60%;
     border-left: 6px solid #ffffff;
       border-top 0px;
       padding-top:0px;
  }
`;

const ProjectImage = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const ProjectTitle = styled.p`
  font-size: 20px;
  font-family: Zilla Slab;
  font-weight: bold;
  text-transform: uppercase;
  color: #f6cd8b;
  @media${devices.tablet} {
    font-size: 35px;
  }
`;

const ProjectMainText = styled.p`
  font-size: 15px;
  font-family: Zilla Slab;
  font-weight: bold;
  color: #ffffff;
  @media${devices.tablet} {
    font-size: 20px;
  }
`;
const PortfolioProjectTitle = styled.p`
  font-size: 32px;
  font-family: Zilla Slab;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0px;
  @media${devices.tablet} {
    font-size: 40px;
  }
`;

const PortfolioProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ffffff;
  width: 100%;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.6s;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const PortfolioProjectLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: start;
  opacity: ${(props) => props.opacity};
  transform: ${(props) => props.transform};
  cursor: ${(props) => props.cursor};
  transition: all 0.6s;
  ${PortfolioProjectWrapper}:hover & {
    opacity: 1;
    cursor: pointer;
    transform: translate(0, 0);
  }
`;

const PortfolioProjectLink = styled.a`
  font-size: 20px;
  text-decoration: none;
  font-family: Zilla Slab;
  border-radius: 12px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px 35px;
  margin-bottom: 20px;
  border: 1px solid #ffffff;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ffffff;
    color: rgba(46, 64, 87, 0.74);
    cursor: pointer;
  }
  @media${devices.tablet} {
    font-size: 32px;
  }
`;

const ProjectFigure = styled.div`
  border: 1px solid #ffffff;
  max-width: 100%;
  padding: 10px;
  max-height: 50%;
  box-shadow: 0 0 10px rgba(154 201 255 / 0.6);
  border-radius: 12px;
`;

const PortfolioHeader = styled.p`
  font-size: 40px;
  font-family: Zilla Slab;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0px;
  padding: 20px 0px;
  text-align: center;
  border-bottom: 1px solid #ffffff;
  @media${devices.tablet} {
    font-size: 50px;
  }
`;

const PortfolioHeaderWord = styled.span`
  color: #f6cd8b;
  font-style: italic;
`;

export const PortfolioContainer = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbPortfolioProjects {
        edges {
          node {
            name
            alt
            url
            desc
            img
            socials {
              name
              url
              alt
            }
          }
        }
      }
    }
  `);

  const projects = data.allMongodbPortfolioProjects.edges;
  const [selectedProject, setSelectedProject] = useState(projects[0].node);

  const handleSelectedProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <PortfolioContainerDiv>
      <ShowProjectDiv>
        <ProjectFigure>
          <ProjectImage
            src={selectedProject && selectedProject.img}
            alt={selectedProject && selectedProject.alt}
            loading="lazy"
            srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
            // sizes="(max-width: 600px) 100vw, 600px"
          />
        </ProjectFigure>
        <div>
          <ProjectTitle>{selectedProject && selectedProject.name}</ProjectTitle>
          <ProjectMainText>
            {selectedProject && selectedProject.desc}
          </ProjectMainText>
          {/* <Button>More</Button> */}
        </div>
      </ShowProjectDiv>
      <ShowProjectsDiv>
        <PortfolioHeader>
          I <PortfolioHeaderWord> worked</PortfolioHeaderWord> on that
        </PortfolioHeader>
        <ProjectsListDiv>
          {projects.map((project) => {
            const socials = project.node.socials;
            return (
              <PortfolioProjectWrapper
                opacity={selectedProject === project.node ? 1 : 0.2}
              >
                <PortfolioProjectTitle
                  onClick={() => handleSelectedProject(project.node)}
                >
                  {project.node.name}
                </PortfolioProjectTitle>
                <PortfolioProjectLinksWrapper
                  transform={
                    selectedProject === project.node
                      ? "translate(0, 0)"
                      : "translate(0, -25px)"
                  }
                  cursor={selectedProject === project.node ? "pointer" : "none"}
                  opacity={selectedProject === project.node ? 1 : 0}
                >
                  {socials.map((social) => (
                    <PortfolioProjectLink href={social.url} target="blank">
                      {social.name}
                    </PortfolioProjectLink>
                  ))}
                </PortfolioProjectLinksWrapper>
              </PortfolioProjectWrapper>
            );
          })}
        </ProjectsListDiv>
      </ShowProjectsDiv>
    </PortfolioContainerDiv>
  );
};
