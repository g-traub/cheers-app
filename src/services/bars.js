import axios from 'axios';

const apiUrl = 'https://cheeers-api.herokuapp.com/api'

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
  
  const paramsString = Object.values(filters).reduce((acc, filter) => {
    if (filter.active) {
      if (acc.length > 0){
        acc += "&"
      }
      acc += filter.value
    }  
    return acc
  }, "")

  if (paramsString.length > 0) {
    url += `?${paramsString}`
  }
  const response = await axios(url);
  return response.data
}