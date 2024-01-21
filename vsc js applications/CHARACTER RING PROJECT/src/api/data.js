import * as api from "./api.js";

const endpoints = {
  allHeroes: "/data/characters?sortBy=_createdOn%20desc",
  HeroesById: "/data/characters/",
  createHeroes: "/data/characters",
  updateHeroes: "/data/characters/",
  deleteHeroes: "/data/characters/",
};

export async function getAllHeroes() {
  return api.get(endpoints.allHeroes);
}

export async function getHeroesByID(id) {
  return api.get(endpoints.HeroesById + id);
}

export async function createHeroes(data) {
  return api.post(endpoints.createHeroes, data);
}

export async function updateHeroes(id, data) {
  return api.put(endpoints.updateHeroes + id, data);
}

export async function deleteHeroes(id) {
  return api.del(endpoints.deleteHeroes + id);
}

export async function searchShoe(search) {
  return api.get(`/data/Heroes?where=brand%20LIKE%20%22${search}%22`);
}

export async function getAllLikes(characterId) {
  return api.get(
    `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`
  );
}

export async function likeChar(data) {
  return api.post("/data/useful", data);
}

export async function isLiked(userId, characterId) {
  return api.get(
    `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}
