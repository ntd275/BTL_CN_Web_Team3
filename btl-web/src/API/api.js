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
  return axios.get(`/eventscat/${category}/${currentPage}`);
}

export function getEvent({ eventsId }) {
  return axios.get(`/events/${eventsId}`);
}

export function searchEvents({ keyword, id }) {
  return axios.get(`/eventscat/${keyword}/${id}`);
}
