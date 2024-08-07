import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header>
            <div className="p-1 mb-5 mt-3 text-center font-mono text-2xl text-green-500">
                <Link to="/">
                    <h1>Training Bro</h1>
                </Link>
            </div>
        </header>
    )
}

export default Nav