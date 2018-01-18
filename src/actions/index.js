const URL_ROOT = "http://localhost:3004";

// create an action
export function getCars(searchItem) {
  const request = fetch(`${URL_ROOT}/carsIndex?q=${searchItem}`, {
    method: "GET"
  });

  return {
    type: "SEARCH_CARS",
    payload: request
  };
  //console.log(`${URL_ROOT}/carsIndex?q=${searchItem}`);
}
