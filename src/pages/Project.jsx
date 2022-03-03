import styles from "./Project.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Project() {
  const [project, setProject] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <p>{project.name}</p>
    </>
  );
}

export default Project;
