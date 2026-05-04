import { useParams } from "react-router-dom";


function Details() {
  const { id } = useParams();

  return (
    <div>
      <h1>details {id}</h1>
    </div>
  );
}

export default Details;