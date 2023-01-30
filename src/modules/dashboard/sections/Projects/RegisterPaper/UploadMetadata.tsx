import { FormInput } from "@/common/components/form/FormInput"
import { ProjectSectionContext } from "@/modules/dashboard/context/ProjectSectionContext"
import { ProjectSectionContextInterface, ProjectSectionStateType } from "@/modules/dashboard/types/context/registerProjectFormContext"
import { IPaperForm } from "@/modules/dashboard/types/models/paper"
import { useContext } from "react"
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form"

export const UploadMetadata = ({ register, errors, onSubmit, isSubmitting }: { register: UseFormRegister<IPaperForm>, errors: Partial<FieldErrorsImpl<IPaperForm>>, onSubmit: () => void, isSubmitting: boolean }) => {
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
                    <h1 className="text-black font-bold text-2xl">ADD Research Paper</h1>

                    <ul className="w-full steps steps-horizontal lg:steps-horizontal self-center">
                        <li className="step step-primary">Upload Metadata</li>
                        <li className="step">Mint</li>
                    </ul>
                    <hr className="my-10" />
                    <div>
                        <div>

                            <FormInput<IPaperForm>
                                id="title"
                                type="text"
                                name="title"
                                label="Title *"
                                placeholder="Title"
                                className="mb-2 w-full text-gray-300 text-3xl appearance-none bg-transparent border-none focus:outline-none"
                                register={register}
                                rules={{ required: 'You must enter a title.' }}
                                errors={errors}
                            />
                        </div>
                    </div>
                    <button onClick={() => setProjectSectionState(ProjectSectionStateType.Mint)}>Next</button>

                </div>
            </div>
        </div>
    </div>
}