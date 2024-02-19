import React from 'react';
import './project.css'
import {ProjectType} from "../../helpers/projectsList";
import {Link} from "react-router-dom";

export const Project = ({title, img, id}: ProjectType) => {
    return (
        <Link to={id}>
            <li className="project">
                    <img src={img} alt={title} className="project__img"/>
                    <h3 className="project__title">{title}</h3>
            </li>
        </Link>
    );
};

export default Project;