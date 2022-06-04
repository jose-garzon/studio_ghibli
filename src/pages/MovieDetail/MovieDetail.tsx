import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovieDetail } from '../../services/movies/api'
import { Movie } from '../../services/movies/movie.types'

const MovieDetail = () => {
  const [movie, setMovie] = useState<Movie>()
  const { id } = useParams()

  const urlTitle = movie && movie.title.replaceAll(' ', '_')
  const wikiUrl = `https://ghibli.fandom.com/wiki/${urlTitle}`

  useEffect(() => {
    getMovieDetail(id!).then(res => setMovie(res.data))
  }, [])

  return (
    <>
      <div className='mb-4'>
        <h1>{movie?.title}</h1>
        <div className='flex gap-3'>
          <p>{movie?.original_title}</p>
          <p className='text-slate-400'>{movie?.original_title_romanised}</p>
        </div>
        <p>Director: {movie?.director}</p>
      </div>
      <img src={movie?.movie_banner} />
      <p className='mt-4'>{movie?.description}</p>
      <a
        href={wikiUrl}
        target='_blank'
        className=' block text-center w-full border to-slate-700  py-3 rounded-full mt-10'
      >
        See wiki
      </a>
    </>
  )
}

export { MovieDetail }
