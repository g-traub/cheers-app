import axios from 'axios';

const apiUrl = 'https://cheeers-api.herokuapp.com/api'

export async function getAllBars() {
  const response = await axios(
    `${apiUrl}/bars`,
  );
  return response.data
}

export async function getOpenBars() {
  const today = new Date()
  const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const response = await axios(
    `${apiUrl}/bars/open?currentTime=${currentTime}`,
  );
  return response.data
}

export async function getFilteredBars(filters) {
  let url = `${apiUrl}/bars/search`
  
  const paramsString = Object.keys(filters).reduce((acc, key) => {
    if (filters[key].active) {
      if (acc.length > 0){
        acc += "&"
      }
      acc += `${key}=${filters[key].formattedValue || filters[key].value}`
    }  
    return acc
  }, "")

  if (paramsString.length > 0) {
    url += `?${paramsString}`
  }
  const response = await axios(url);
  return response.data
}