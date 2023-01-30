import { ProjectSectionContext } from "@/modules/dashboard/context/ProjectSectionContext"
import { ProjectSectionContextInterface, ProjectSectionStateType } from "@/modules/dashboard/types/context/registerProjectFormContext"
import { useContext } from "react"

export const MintPaper = () => {
    const { setProjectSectionState } = useContext(ProjectSectionContext) as ProjectSectionContextInterface

    return <div className="ml-60 max-h-screen overflow-auto">
        <div className="px-6 py-8">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-3xl p-8 mb-5">
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li><a onClick={() => setProjectSectionState(ProjectSectionStateType.MyProjects)}>My Projects</a></li>
                                <li>Add Paper</li>
                            </ul>
                        </div>
                    </div>

                    <ul className="w-full steps steps-horizontal lg:steps-horizontal self-center">
                        <li className="step step-primary">Upload Metadata</li>
                        <li className="step step-primary">Mint</li>
                    </ul>
                    <hr className="my-10" />

                    <button onClick={() => setProjectSectionState(ProjectSectionStateType.UploadMetadata)}>Back</button>

                </div>
            </div>
        </div>
    </div>
}