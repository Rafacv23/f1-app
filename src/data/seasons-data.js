import axios from "axios"

const apiUrl = "https://ergast.com/api/f1"
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

export const getCurrentSeason = async () => {
  try {
    const response = await axios.get(`${apiUrl}/current.json`)
    const seasonData = response.data.MRData.RaceTable
    return seasonData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getDriverStandings = async (year) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}/driverStandings.json`)
    const standingsData = response.data.MRData.StandingsTable.StandingsLists
    return standingsData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getDriverStandingsPerRace = async (year, raceId) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}/${raceId}/driverStandings.json`)
    const standingsData = response.data.MRData.StandingsTable.StandingsLists
    return standingsData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getConstructorStandings = async (year) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}/constructorStandings.json`)
    const standingsData = response.data.MRData.StandingsTable.StandingsLists
    return standingsData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getConstructorStandingsPerRace = async (year, raceId) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}/${raceId}/constructorStandings.json`)
    const standingsData = response.data.MRData.StandingsTable.StandingsLists
    console.log(standingsData)
    return standingsData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getQualyResult = async (year, raceId) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}/${raceId}/qualifying.json`)
    const qualyData = response.data.MRData.RaceTable.Races
    console.log(qualyData)
    return qualyData
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getRaceResult = async (year, raceId) => {
  try {
    const response = await axios.get(`${apiUrl}/${year}/${raceId}/results.json`)
    const raceData = response.data.MRData.RaceTable.Races
    console.log(raceData)
    return raceData
  } catch (error) {
    console.log(error)
    throw error
  }
}
