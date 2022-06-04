interface Movie {
  id: string
  title: string
  description: string
  director: string
  image: string
  movie_banner: string
  original_title: string
  original_title_romanised: string
  producer: string
  release_date: string
  rt_score: string
  running_time: string
  url: string
}

interface GetMoviesResponse {
  data?: Movie[]
  error?: string
  status: string
  state: 'success' | 'error'
}
interface GetMovieDetailResponse {
  data?: Movie
  error?: string
  status: string
  state: 'success' | 'error'
}

export type { Movie, GetMoviesResponse, GetMovieDetailResponse }
