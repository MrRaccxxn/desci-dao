
import { Dispatch, SetStateAction } from "react";
import { IPaper } from "../models/paper";

export interface ProjectSectionContextInterface {
    paper: IPaper | null;
    setPaper: Dispatch<SetStateAction<IPaper | null>>
    projectSectionState: ProjectSectionStateType;
    setProjectSectionState: Dispatch<SetStateAction<ProjectSectionStateType>>;
}

export enum ProjectSectionStateType {
    MyProjects = 'My Projects',
    UploadMetadata = 'Upload Metadata',
    Mint = 'Mint',
}