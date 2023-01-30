import Image from "next/image";
import { IPaper, IPaperForm } from "../../types/models/paper";

export const ProjectBox = ({ paper }: { paper?: IPaper | IPaperForm | null }) => {

    return <div className="card card-side shadow-xl w-96 h-96">
        <figure className="w-1/4">
            <Image
                fill
                style={{ objectFit: 'contain' }}
                src={paper?.thumbnail[0] ? URL?.createObjectURL(paper.thumbnail[0]) : ''}
                alt={paper?.title || ''}
            />
        </figure>
        <div className="w-3/4 flex flex-col justify-center px-4 text-start">
            <h2 className="card-title text-gray-900">{paper?.title}</h2>
            <p>{paper?.description}</p>
        </div>
    </div>
}