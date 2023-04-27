import { FC } from 'react'
import { Icurr } from '../../types'

import s from './CurrencyPageItem.module.scss'

export const CurrencyPageItem: FC<Icurr> = ({ rate, exchangedate, txt }): JSX.Element => {

  return (
    <div className={s.container}>
      <div className={s.item}>
        <span>{txt}</span>
        <span>{rate}</span>
        <span>{exchangedate}</span>
      </div>
    </div>
  )
}