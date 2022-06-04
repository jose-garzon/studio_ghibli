import axios, { AxiosError } from 'axios'
import { GetMovieDetailResponse, GetMoviesResponse, Movie } from './movie.types'

const baseUrl = 'https://miapi-movies.herokuapp.com/movies/v1'

const getMovies = async (): Promise<GetMoviesResponse> => {
  try {
    const response = await axios.get<{ data: Movie[] }>(`${baseUrl}/moviesHome`)
    return {
      status: response.status + '',
      data: response.data.data,
      state: 'success'
    }
  } catch (err) {
    const error = err as AxiosError
    return {
      status: error.status || '500',
      error: error.message || 'System error',
      state: 'error'
    }
  }
}

const getMovieDetail = async (id: string): Promise<GetMovieDetailResponse> => {
  try {
    const response = await axios.get<{ data: Movie }>(
      `${baseUrl}/moviesHome/${id}`
    )
    return {
      status: response.status + '',
      data: response.data.data,
      state: 'success'
    }
  } catch (err) {
    const error = err as AxiosError
    return {
      status: error.status || '500',
      error: error.message || 'System error',
      state: 'error'
    }
  }
}

export { getMovies, getMovieDetail }
