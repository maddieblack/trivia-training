import axios from "axios"

const url = "http://jservice.io/api"

export const ApiUtils = {
  fetchRandomTrivia: () =>
    axios.get(`${url}/random`).then((response) => response.data[0]),
}
