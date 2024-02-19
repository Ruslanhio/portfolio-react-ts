import React from 'react';
import Project from "../components/project/Project";
import {projects, ProjectType} from "../helpers/projectsList";

interface ProjectsProps {
    projects: ProjectType[]
}

export const Projects = (props: ProjectsProps) => {
    console.log(projects)
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {props.projects.map((project) => {
                            return (
                                <Project
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    img={project.img}
                                    imgBig={project.imgBig}
                                    skills={project.skills}/>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Projects;