import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { FilterButton } from '../../components/atoms/Button/FilterButton'
import { MovieCard, Navbar } from '../../components/organisms'
import { getUser } from '../../services/auth/useCases'
import { getMovies } from '../../services/movies/api'
import { Movie } from '../../services/movies/movie.types'
import { searchMovie, sortBy } from '../../services/movies/useCases'

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
  const [selectedSort, setSelectedSort] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const { isAuth } = getUser()

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearch(value)
    setSelectedSort('')
    const searched = searchMovie(movies, value)
    setFilteredMovies(searched)
  }

  const handleSortBy = (param: keyof Movie) => () => {
    setSelectedSort(param)
    setFilteredMovies(movies => [...sortBy(movies, param)])
  }

  useEffect(() => {
    getMovies().then(response => {
      setMovies(response.data!)
      setFilteredMovies(response.data!)
    })
  }, [])

  return (
    <>
      <p className='mb-1'>Sort by:</p>
      <div className='flex justify-between mb-10'>
        <FilterButton
          selected={selectedSort === 'title'}
          onClick={handleSortBy('title')}
        >
          Name
        </FilterButton>
        <FilterButton
          selected={selectedSort === 'release_date'}
          onClick={handleSortBy('release_date')}
        >
          Year
        </FilterButton>
        <FilterButton
          selected={selectedSort === 'running_time'}
          onClick={handleSortBy('running_time')}
        >
          Duration
        </FilterButton>
        <FilterButton
          selected={selectedSort === 'rt_score'}
          onClick={handleSortBy('rt_score')}
        >
          Rotten tomatoes
        </FilterButton>
      </div>
      <section className='flex flex-col gap-8'>
        {filteredMovies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.image}
            name={movie.title}
            duration={movie.running_time}
            year={movie.release_date}
            rotten={movie.rt_score}
          />
        ))}
        <Navbar search={search} handleSearch={handleSearch} />
      </section>
    </>
  )
}

export { Home }
