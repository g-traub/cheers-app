import axios from 'axios';

const apiUrl = 'https://cheeers-api.herokuapp.com/api'

export async function getOpenBars() {
  const today = new Date()
  const currentTime = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
  
  const response = await axios(
    `${apiUrl}/bars/open?currentTime=${currentTime}`,
  );
  return response.data
}