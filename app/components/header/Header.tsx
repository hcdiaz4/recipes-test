import { SearchInput } from "./components/search-input/SearchInput"

export const Header = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 my-5 rounded">
            <span className="flex items-center">
                <b>ENV:</b>{process.env.NEXT_PUBLIC_ENVIROMENT_NAME}
            </span>
            <div className="flex flex-1"></div>
            <div className="h-[40px]">
                <SearchInput />
            </div>
        </nav>
    )
}