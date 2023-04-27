import { FC } from "react"
import { useNavigate } from "react-router-dom"

import s from './Header.module.scss'

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={s.header}>
      <div onClick={() => navigate('/laws')} className={s.headerItem}>Законодавство</div>
      <div onClick={() => navigate('/currency')} className={s.headerItem}>Курс валют</div>
    </header>
  )
}