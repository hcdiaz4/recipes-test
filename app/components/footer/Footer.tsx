export const Footer = () => {
    return (
        <div className="flex bg-blue-800 bg-opacity-30 p-2 my-5 rounded justify-between">
            <div>Herasmo Carlos Diaz Viloria</div>
            <div>{new Date().getFullYear()}</div>
        </div>
    )
}