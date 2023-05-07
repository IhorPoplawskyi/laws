import { FC } from "react";

import logo from '../../assets/rada.ico'

import s from './LawPageItem.module.scss'

interface props {
  href: string
  name: string
}

export const LawPageItem:FC<props> = ({ href, name }): JSX.Element => {
  return (
    <div className={s.item}>
      <img src={logo}/>
      <a target='_blank' href={href}>{name}</a>
    </div>
  )
}