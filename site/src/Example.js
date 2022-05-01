import { useParams } from "react-router-dom";

function Example() {
  let params = useParams()
  return <div>an example: {params.exampleId}</div>
}

export default Example
