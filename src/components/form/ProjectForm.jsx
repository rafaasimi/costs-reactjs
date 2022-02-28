import { useState, useEffect } from "react";

import styles from "./ProjectForm.module.css";
import Input from "./Input";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

function ProjectForm({ buttonText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
  };

  function handleChange(event) {
    setProject({ ...project, [event.target.name]: event.target.value });
  }

  function handleCategory(event) {
    setProject({
      ...project,
      category: {
        id: event.target.value,
        name: event.target.options[event.target.selectedIndex].text,
      },
    });
  }

  return (
    <>
      <form onSubmit={submit} className={styles.form}>
        <Input
          type="text"
          text="Nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
          handleOnChange={handleChange}
          value={project.name ? project.name : ''}
        />

        <Input
          type="number"
          text="Orçamento do projeto"
          name="budget"
          placeholder="Insira o orçamento total"
          handleOnChange={handleChange}
          value={project.budget ? project.budget : ''}
        />

        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ""}
        />

        <SubmitButton text={buttonText} />
      </form>
    </>
  );
}

export default ProjectForm;
