import { ButtonHTMLAttributes } from 'react'

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean
}

const FilterButton = ({ children, selected, ...rest }: FilterButtonProps) => {
  return (
    <button className={`${selected ? 'font-bold' : ''}`} {...rest}>
      {children}
    </button>
  )
}
export { FilterButton }
