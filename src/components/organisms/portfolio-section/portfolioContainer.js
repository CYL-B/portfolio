import React, { useState } from "react";
//Librairies pour le style
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { devices } from "../../utils/responsive";

import { Button } from "../../atoms/button";

const PortfolioContainerDiv = styled.div`
  border: 1px solid #ffffff;
  border-radius: 12px;
  margin: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  @media${devices.tablet} {
    flex-direction: row;
  }
`;

const ShowProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
   @media${devices.tablet} {
     width: 40%;
  }
`;
const ProjectsListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 25px;
`;
const ShowProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  border-left: 6px solid #ffffff;
  padding-left: 20px;
  height: 100%;
  overflow-y: scroll;
     @media${devices.tablet} {
     width: 60%;
  }
`;

const ProjectImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProjectTitle = styled.p`
  font-size: 40px;
  font-family: Zilla Slab;
  font-weight: bold;
  text-transform: uppercase;
  color: #f6cd8b;
`;

const ProjectMainText = styled.p`
  font-size: 20px;
  font-family: Zilla Slab;
  font-weight: bold;
  color: #ffffff;
`;
const PortfolioProjectTitle = styled.p`
  font-size: 58px;
  font-family: Zilla Slab;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0px;
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
  opacity: ${(props) => props.opacity };
  transform: ${(props) => props.transform };
  cursor: ${(props) => props.cursor };
  transition: all 0.6s;
  ${PortfolioProjectWrapper}:hover & {
    opacity: 1;
    cursor: pointer;
    transform: translate(0, 0);
  }
`;

const PortfolioProjectLink = styled.a`
  font-size: 32px;
  text-decoration: none;
  font-family: Zilla Slab;
  border-radius: 12px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px 35px;
  margin-bottom: 20px;
  border: 1px solid #ffffff;
  &:hover {
    background-color: #ffffff;
    color: rgba(46, 64, 87, 0.74);
    cursor: pointer;
  }
`;

const ProjectFigure = styled.div`
  border: 1px solid #ffffff;
  width: 100%;
  padding: 10px;
  max-height: 50%;
`;

const PortfolioHeader = styled.p`
  font-size: 70px;
  font-family: Zilla Slab;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  margin: 0px;
  padding-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #ffffff;
`;

const PortfolioHeaderWord = styled.span`
  color: #f6cd8b;
  font-weight: italic;
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
    
  }

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
          <Button>More</Button>
        </div>
      </ShowProjectDiv>
      <ShowProjectsDiv>
        <PortfolioHeader>
          My <PortfolioHeaderWord>Projects</PortfolioHeaderWord>
        </PortfolioHeader>
        <ProjectsListDiv>
          {projects.map((project) => {
            const socials = project.node.socials;
            return (
              <PortfolioProjectWrapper opacity={selectedProject === project.node ? 1 : 0.2}>
                <PortfolioProjectTitle onClick={() => handleSelectedProject(project.node)}>
                  {project.node.name}
                </PortfolioProjectTitle>
                <PortfolioProjectLinksWrapper transform={selectedProject === project.node ? "translate(0, 0)" : "translate(0, -25px)"} cursor={selectedProject === project.node ? "pointer" : "none"} opacity={selectedProject === project.node ? 1 : 0}>
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
