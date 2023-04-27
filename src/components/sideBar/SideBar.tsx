import { FC, useState } from 'react'
import { categories } from '../../data/laws'

import s from './SideBar.module.scss'

interface props {
  setCategory: (filter: string) => void
}

export const SideBar:FC<props> = ({ setCategory }): JSX.Element => {
  const [active, setActive] = useState<string>('усі');

  const onCategoryClick = (category: string) => {
    setActive(category);
    setCategory(category)
  }

  return (
    <aside className={s.sidebar}>
      <div onClick={() => {setCategory('усі'); setActive('усі')}} className={active === 'усі' ? s.activeItem : s.item}>усі</div>
      {categories.map(category => <div key={category} onClick={() => onCategoryClick(category)} className={active === category ? s.activeItem : s.item}>{category}</div>)}
    </aside>
  )
}