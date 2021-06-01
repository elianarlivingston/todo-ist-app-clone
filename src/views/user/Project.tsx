import { useParams } from "react-router-dom";

const Project = () => {
    let { id } = useParams() as any

    return (
        <h1>Project {id}</h1>
    )
}

export default Project