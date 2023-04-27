import { FC } from "react"
import s from './Header.module.scss'
import { useNavigate } from "react-router-dom"

export const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={s.header}>
      <div onClick={() => navigate('/laws')} className={s.headerItem}>Законодавство</div>
    </header>
  )
}