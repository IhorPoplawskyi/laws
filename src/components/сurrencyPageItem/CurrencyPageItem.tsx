import { FC } from 'react'
import { Icurr } from '../../types'

import s from './CurrencyPageItem.module.scss'

export const CurrencyPageItem: FC<Icurr> = ({ rate, exchangedate, txt }): JSX.Element => {
  
  return (
    <div className={s.container}>
        <div className={s.item}>
          <div>{txt}</div>
        </div>
        <div className={s.item}>
          <div>{rate.toFixed(2)} грн</div>
        </div>
        <div className={s.item}>
          <div>{exchangedate}</div>
        </div>
    </div>
  )
}