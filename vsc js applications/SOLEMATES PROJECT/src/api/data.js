import * as api from "./api.js";

const endpoints = {
  allShoes: "/data/shoes?sortBy=_createdOn%20desc",
  ShoesById: "/data/shoes/",
  createShoes: "/data/shoes",
  updateShoes: "/data/shoes/",
  deleteShoes: "/data/shoes/",
};

export async function getAllShoes() {
  return api.get(endpoints.allShoes);
}

export async function getShoesByID(id) {
  return api.get(endpoints.ShoesById + id);
}

export async function createShoes(data) {
  return api.post(endpoints.createShoes, data);
}

export async function updateShoes(id, data) {
  return api.put(endpoints.updateShoes + id, data);
}

export async function deleteShoes(id) {
  return api.del(endpoints.deleteShoes + id);
}

export async function searchShoe(search) {
  return api.get(`/data/shoes?where=brand%20LIKE%20%22${search}%22`);
}
