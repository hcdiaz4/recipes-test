import { TitleProps } from "@/types"

export const TitlePage = ({ text }: TitleProps) => {
    return (
        <h1 className="p-5 mb-5 text-center bg-blue-500 text-2xl rounded text-white">
            {text}
        </h1>
    )
}