import axios from "axios";

export function getNews({ currentPage }) {
  return axios.get(`/newspage/${currentPage}`);
}

export function getNew({ newsId }) {
  return axios.get(`/news/${newsId}`);
}

export function getEvents({ currentPage }) {
  return axios.get(`/events/${currentPage}`)
}

export function getEvent({ eventsId }) {
  return axios.get(`/event/${eventsId}`);
}