import axiosClient from "./axiosClient";

const ProjetoService = {
  list: () => axiosClient.get("/projeto"),
  getById: (id) => axiosClient.get(`/projeto/${id}`),
  create: (data) => axiosClient.post("/projeto", data),
  update: (id, data) => axiosClient.put(`/projeto/${id}`, data),
  remove: (id) => axiosClient.delete(`/projeto/${id}`),
};

export default ProjetoService;
