import axios from "axios"

const apiUrl = "http://ergast.com/api/f1"
const limit = 100

export const getSeasons = async () => {
  try {
    const response = await axios.get(`${apiUrl}/seasons.json?limit=${limit}`)
    const seasonsData = response.data.MRData.SeasonTable.Seasons
    return seasonsData
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getOneSeason = async (year) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}.json`)
    const seasonData = response.data.MRData.RaceTable
    return seasonData
  } catch (error) {
    console.error(error)
    throw error
  }
}
