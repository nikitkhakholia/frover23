import { ROVER_IP } from "../env";

export const moveFront = (data) => {
  return fetch(`${ROVER_IP}/mvf`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}
export const moveRight = (data) => {
  return fetch(`${ROVER_IP}/mvr`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}
export const moveBack = (data) => {
  return fetch(`${ROVER_IP}/mvb`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}
export const moveLeft = (data) => {
  return fetch(`${ROVER_IP}/mvl`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}
export const stop = (data) => {
  return fetch(`${ROVER_IP}/mvs`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.json();
  });
}