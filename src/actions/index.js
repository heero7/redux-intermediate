const URL_ROOT = "http://localhost:3004";

// create an action
export function getCars(searchItem) {
  const request = fetch(`${URL_ROOT}/carsIndex?q=${searchItem}`, {
    method: "GET"
  })
  .then(res => res.json());

  return {
    type: "SEARCH_CARS",
    payload: request
  };
}

export function carDetail(id){
  const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {
    method: "GET"
  })
  .then(res => res.json());

  return {
    type: 'CAR_DETAIL',
    payload: request
  }
}

export function clearDetail() {
  return {
    type: 'CLEAR_DETAIL',
    payload: []
  }
}
