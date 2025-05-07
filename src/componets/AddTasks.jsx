import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (!title.trim() || !description.trim()) {
      setTitle("");
      setDescription("");
      setError("Preencha todos os campos");
      return;
    }

    setError("");
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border border-slate-900 outline-slate-900 px-4 py-2 rounded-md bg-slate-400"
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        className="border border-slate-900 outline-slate-500 px-4 py-2 rounded-md bg-slate-400"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={handleClick}
        className="bg-slate-500 rounded-md text-white px-4 py-2 font-medium"
      >
        Adicionar
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AddTasks;
