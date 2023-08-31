import React from "react";
import resume from '../data/resume';
import Resumeitem from './Resumeitem';

function Resume() {
    return (
        <div className="resume">
            {resume.map(job=> (
                <Resumeitem 
                    title={job.title}
                    company={job.company}
                    role={job.role}
                    stack={job.stack}
                    link={job.link}
                />
            ))}
        </div>
    )
};

export default Resume;