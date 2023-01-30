import { ProjectBox } from "@/modules/dashboard/components/ProjectBox"
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
                        <li className="step step-secondary">Upload Metadata</li>
                        <li className="step step-secondary">Mint</li>
                    </ul>

                    <div className="flex flex-col items-center  w-full my-20">
                        <h2 className="py-3 mb-3 text-xl font-semibold">Preview of your paper</h2>
                        <div className="max-w-xl">
                            <ProjectBox />
                        </div>
                    </div>

                    <button onClick={() => setProjectSectionState(ProjectSectionStateType.UploadMetadata)}>Back</button>

                </div>
            </div>
        </div>
    </div>
}