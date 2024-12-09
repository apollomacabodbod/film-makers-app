import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();

  return <div className="">Blog Detail for ID: {id}</div>;
}

