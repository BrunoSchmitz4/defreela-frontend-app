import axiosClient from "./axiosClient";

const TarefaService = {
  list: () => axiosClient.get("/tarefa"),
  getById: (id) => axiosClient.get(`/tarefa/${id}`),
  create: (data) => axiosClient.post("/tarefa", data),
  update: (id, data) => axiosClient.put(`/tarefa/${id}`, data),
  remove: (id) => axiosClient.delete(`/tarefa/${id}`),
};

export default TarefaService;
