import { Movie } from './movie.types'

const searchMovie = (movies: Movie[], search: string) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().startsWith(search.toLowerCase())
  )
}

const sortBy = (movies: Movie[], param: keyof Movie) => {
  const isNumberSort = ['release_date', 'running_time', 'rt_score'].includes(
    param
  )
  if (isNumberSort) {
    return movies.sort((a, z) => Number(a[param]) - Number(z[param]))
  }
  return movies.sort((a, z) => {
    const paramA = a[param].toLowerCase()
    const paramZ = z[param].toLowerCase()
    if (paramA > paramZ) return 1
    if (paramA < paramZ) return -1
    return 0
  })
}

export { searchMovie, sortBy }
