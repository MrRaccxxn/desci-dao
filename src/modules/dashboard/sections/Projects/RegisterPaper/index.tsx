import { ProjectSectionContext } from "@/modules/dashboard/context/ProjectSectionContext"
import { ProjectSectionContextInterface, ProjectSectionStateType } from "@/modules/dashboard/types/context/registerProjectFormContext"
import { IPaperForm } from "@/modules/dashboard/types/models/paper"
import _ from "lodash"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { MintPaper } from "./MintPaper"
import { UploadMetadata } from "./UploadMetadata"

export const RegisterPaper = () => {
    const { projectSectionState, setProjectSectionState, setPaper } = useContext(ProjectSectionContext) as ProjectSectionContextInterface
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaperForm>();

    const onSubmit = handleSubmit(async (data: IPaperForm) => {
        console.log(data)
        switch (projectSectionState) {
            case ProjectSectionStateType.UploadMetadata:
                if (_.isEmpty(data.paperFile) || _.isEmpty(data.thumbnail)) {
                    alert('empty')
                } else {
                    setPaper(data)
                    setProjectSectionState(ProjectSectionStateType.Mint)
                }
                return

            default:
                break;
        }
        console.log('data received', data)
        return
        setIsSubmitting(true)
        setIsSubmitting(false)
    });

    return <>
        {projectSectionState === ProjectSectionStateType.UploadMetadata && < UploadMetadata register={register} errors={errors} onSubmit={onSubmit} isSubmitting={isSubmitting} />}
        {projectSectionState === ProjectSectionStateType.Mint && < MintPaper />}
    </>
}