import * as api from "./api.js";

const endpoints = {
  allCars: "/data/cars?sortBy=_createdOn%20desc",
  CarsById: "/data/cars/",
  createCars: "/data/cars",
  updateCars: "/data/cars/",
  deleteCars: "/data/cars/",
};

export async function getAllCars() {
  return api.get(endpoints.allCars);
}

export async function getCarsByID(id) {
  return api.get(endpoints.CarsById + id);
}

export async function createCars(data) {
  return api.post(endpoints.createCars, data);
}

export async function updateCars(id, data) {
  return api.put(endpoints.updateCars + id, data);
}

export async function deleteCars(id) {
  return api.del(endpoints.deleteCars + id);
}

export async function searchCar(search) {
  return api.get(`/data/Cars?where=brand%20LIKE%20%22${search}%22`);
}
