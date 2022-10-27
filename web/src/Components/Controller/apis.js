export const moveFront =(data)=>{
    return fetch(`http://192.168.1.2:5000/mvf`, {
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
  export const moveRight =(data)=>{
    return fetch(`http://192.168.1.2:5000/mvr`, {
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
  export const moveBack =(data)=>{
    return fetch(`http://192.168.1.2:5000/mvb`, {
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
  export const moveLeft =(data)=>{
    return fetch(`http://192.168.1.2:5000/mvl`, {
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
  export const rotate =(data)=>{
    return fetch(`http://192.168.1.2:5000/rtt`, {
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