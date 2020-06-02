import axios from "axios";

export function getNews({ currentPage }) {
  return axios.get(`/newspage/${currentPage}`);
}

export function getNew({ newsId }) {
  return axios.get(`/news/${newsId}`);
}

export function getAllEvents({ currentPage }) {
  return axios.get(`/eventspage/${currentPage}`);
}

export function getEventsCategory({ category, currentPage }) {
  console.log(category, currentPage);
  return axios.get(`/eventscat/${category}/${currentPage}`);
}

export function getEvent({ eventsId }) {
  return axios.get(`/events/${eventsId}`);
}

export function searchEvents({ keyword, id }) {
  return axios.get(`/search/${keyword}/${id}`);
}

export function trendEvents() {
  return axios.get("/trendevents");
}

export function newestEvents() {
  return axios.get("/newestevents");
}

export function eventsHaNoiToday() {
  return axios.get("/eventshntoday");
}

export function eventsHoChiMinhToday() {
  return axios.get("/eventshcmtoday");
}

export function nextEvent({ eventsId }) {
  console.log(eventsId);
  return axios.get(`/nextevent/${eventsId}`);
}

export function previousEvent({ eventsId }) {
  return axios.get(`/prevevent/${eventsId}`);
}

export function newestNews() {
  return axios.get("/newestnews");
}

export function nextNew({ newsId }) {
  return axios.get(`/nextnews/${newsId}`);
}

export function previousNew({ newsId }) {
  return axios.get(`/prevnews/${newsId}`);
}

export function trendNews() {
  return axios.get("/trendnews");
}

export function AllEvents() {
  return axios.get("/events");
}

export function checkSignin({ username, password }) {
  return axios.post("/login", { username: username, password: password });
}

export function checkSignOut() {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  return axios.post("/logout", { token: token, refreshToken: refreshToken });
}

export function createUser({ username, name, password, email }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  return axios.post("/register", {
    token: token,
    refreshToken: refreshToken,
    username: username,
    name: name,
    password: password,
    email: email,
  });
}
