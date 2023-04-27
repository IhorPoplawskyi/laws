import { CurrencyPageItem } from '../../components/сurrencyPageItem/CurrencyPageItem';
import { Icurr } from '../../types'

import { FC, useState, useEffect } from 'react'

import s from './CurrencyPage.module.scss'


export const CurrencyPage: FC = (): JSX.Element => {
  const [currency, setCurrency] = useState<Icurr[]>([]);

  const getCurrency = async () => {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json();
    setCurrency(data)
  }

  useEffect(() => {
    getCurrency()
  }, [])

  return (
    <div className={s.wrapper}>
      {currency.map(curr => <CurrencyPageItem {...curr}/>)}
    </div>
  )
}