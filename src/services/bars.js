import axios from 'axios';

const apiUrl = 'https://cheeers-api.herokuapp.com/api'

export async function getOpenBars() {
  const today = new Date()
  const currentHour = today.getHours()

  const response = await axios(
    `${apiUrl}?currentHour=${currentHour}`,
  );
  return response.data
}