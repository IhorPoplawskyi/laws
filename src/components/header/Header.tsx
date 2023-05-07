import { FC } from "react"
import { useNavigate } from "react-router-dom"

import s from './Header.module.scss'

import law from './law.png'
import currency from './currency.png'
import forecast from './forecast.png'

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={s.header}>
      <img src={law} onClick={() => navigate('/laws')} className={s.headerItem}/>
      <img src={currency} onClick={() => navigate('/currency')} className={s.headerItem} />
      <img src={forecast} onClick={() => navigate('/forecast')} className={s.headerItem} />
    </header>
  )
}