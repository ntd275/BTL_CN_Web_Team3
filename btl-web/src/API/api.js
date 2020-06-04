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
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
  if (username === "admin"||username===null) {
    return axios.get("/events");
  } else {
    return axios.get(`/geteventsbyuser/${username}`, { token: token });
  }
}

export function AllNews() {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("accessToken");
  if (username === "admin" || username === null) {
    return axios.get("/news");
  } else {
    return axios.get(`/getnewsbyuser/${username}`, { token: token });
  }
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

export function getInfoUser() {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  console.log(refreshToken, token, username);

  return axios.post("/user", {
    token: token,
    username: username,
  });
}

export function updatePassword({ newpassword }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");

  return axios.post("/changepassword", {
    token: token,
    refreshToken: refreshToken,
    password: newpassword,
    id: id,
  });
}

export function updateInfoUser({ username, name, email }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");

  return axios.post("/changeinfo", {
    token: token,
    refreshToken: refreshToken,
    username: username,
    name: name,
    email: email,
    id: id,
  });
}

export function getAllUser({ currentPage }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  const id = localStorage.getItem("id");

  return axios.post(`/users/${currentPage}`, {
    token: token,
    refreshToken: refreshToken,
    username: username,
    id: id,
  });
}

export function changeStatusUser({ status, id }) {
  console.log(status);
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  return axios.post(`/changestatus`, {
    token: token,
    refreshToken: refreshToken,
    username: username,
    status: status,
    id: id,
  });
}

export function adminActiveEvents({ currentPage }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  return axios.post(`/eventspending/${currentPage}`, {
    token: token,
    refreshToken: refreshToken,
  });
}

export function adminActiveNews({ currentPage }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");

  return axios.post(`/newsspending/${currentPage}`, {
    token: token,
    refreshToken: refreshToken,
  });
}

export function changeStatusEvent({ status, id }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  return axios.post(`/changeeventallow`, {
    token: token,
    refreshToken: refreshToken,
    username: username,
    allow: status,
    id: id,
  });
}

export function changeStatusNew({ status, id }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  return axios.post(`/changenewallow`, {
    token: token,
    refreshToken: refreshToken,
    username: username,
    allow: status,
    id: id,
  });
}

export function getNewsByUser({ currentPage }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  if (username === "admin") {
    return axios.get(`/newspage/${currentPage}`);
  } else {
    return axios.get(`/getnewsbyuser/${username}/${currentPage}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  }
}

export function getEventsByUser({ currentPage }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  if (username === "admin") {
    return axios.get(`/eventspage/${currentPage}`);
  } else {
    return axios.get(`/geteventsbyuser/${username}/${currentPage}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  }
}

export function allViewEvents() {
  const username = localStorage.getItem("username");
  if (username === "admin") {
    return axios.get("/getview");
  } else {
    return axios.get(`/getview/${username}`);
  }
}

export function allViewNews() {
  const username = localStorage.getItem("username");
  if (username === "admin") {
    return axios.get("/getviewnews");
  } else {
    return axios.get(`/getnew/${username}`);
  }
}

export function statisticNews({ flag }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  if (flag === 1) {
    return axios.post(`/statisticnewsbyweek/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  } else if (flag === 2) {
    return axios.post(`/statisticnewsbymonth/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  } else {
    return axios.post(`/statisticnewsbyyear/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  }
}

export function statisticEvents({ flag }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");
  console.log(11);
  if (flag === 1) {
    return axios.post(`/statisticeventsbyweek/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  } else if (flag === 2) {
    return axios.post(`/statisticeventsbymonth/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  } else {
    return axios.post(`/statisticeventsbyyear/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  }
}

//chua co
export function statisticViewNews({ flag }) {
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("accessToken");
  const username = localStorage.getItem("username");

  if (flag === 1) {
    return axios.post(`/statisticnewsbyweek/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  } else if (flag === 2) {
    return axios.post(`/statisticnewsbymonth/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  } else {
    return axios.post(`/statisticnewsbyyear/${username}`, {
      token: token,
      refreshToken: refreshToken,
      username: username,
    });
  }
}

//chua co
export function statisticViewEvents({ flag }) {}
