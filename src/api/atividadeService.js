import axiosClient from "./axiosClient";

const AtividadeService = {
  list: () => axiosClient.get("/atividade"),
  getById: (id) => axiosClient.get(`/atividade/${id}`),
  create: (data) => axiosClient.post("/atividade", data),
  update: (id, data) => axiosClient.put(`/atividade/${id}`, data),
  remove: (id) => axiosClient.delete(`/atividade/${id}`),
};

export default AtividadeService;
