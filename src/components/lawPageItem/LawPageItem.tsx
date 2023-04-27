import { FC } from "react";

import logo from '../../assets/rada.ico'

interface props {
  href: string
  name: string
}

export const LawPageItem:FC<props> = ({ href, name }): JSX.Element => {
  return (
    <div style={{padding: '2px', borderBottom: '1px dotted grey'}}>
      <img src={logo}/>
      <a target='_blank' href={href}>{name}</a>
    </div>
  )
}