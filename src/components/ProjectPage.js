import React from 'react'
import projData from '../projectData/projects.json'

import ProjectLinkList from './ProjectLinkList'

import * as style from '../styles/projectpage.module.css'

export default function ProjectPage({children, slug}) {
  const stackIcon = <svg xmlns="http://www.w3.org/2000/svg" className={style.stackIcon} viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"><title>Stack</title></path></svg>;
  const projectPage = (slug) =>{  // needed so .find works 
    let project = projData.find(p => p.slug === slug);
    let projectLinks = project.projectLinks;

    return(    
      <div className={style.projectPage}>
        <h1>{project.title} <ProjectLinkList links={projectLinks}/></h1>
        <span className={style.details}>
          {project.projectType}{stackIcon} {project.stack.join(' | ')}
        </span>
        { children } 
      </div>
    );
  }
  
  return (
    projectPage(slug)
  )
}