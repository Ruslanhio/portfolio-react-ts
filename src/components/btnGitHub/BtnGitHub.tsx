import React from 'react';
import './btnGitHub.css'
import gitHubIcon from "./gitHub-black.svg";

interface BtnGItHubType  {
    link: string
}

export const BtnGitHub = ({link}:BtnGItHubType) => {
    return (
        <a href={link} target='blank' className="btn-outline">
            <img src={gitHubIcon} alt=""/>
            GitHub repo
        </a>
    );
};

