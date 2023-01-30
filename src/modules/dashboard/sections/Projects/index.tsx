import React, { useContext } from "react"
import { ProjectBox } from "../../components/ProjectBox"
import { ProjectSectionContext } from "../../context/ProjectSectionContext"
import { ProjectSectionContextInterface, ProjectSectionStateType } from "../../types/context/registerProjectFormContext"
import { MyProjects } from "./MyProjects"
import { RegisterPaper } from "./RegisterPaper"
import { UploadMetadata } from "./RegisterPaper/UploadMetadata"

export const ProjectSection = () => {
    const { projectSectionState } = useContext(ProjectSectionContext) as ProjectSectionContextInterface

    return (
        <>
            {projectSectionState === ProjectSectionStateType.MyProjects && <MyProjects />}
            <RegisterPaper />
        </>
    )
}