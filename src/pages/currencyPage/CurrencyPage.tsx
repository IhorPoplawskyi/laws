import { Icurr } from '../../types'

import { FC, useState, useEffect } from 'react'

import { shortListCurrency } from '../../data/constants';

import { CurrencyPageItem } from '../../components/сurrencyPageItem/CurrencyPageItem';

import s from './CurrencyPage.module.scss'

export const CurrencyPage: FC = (): JSX.Element => {
  const [currency, setCurrency] = useState<Icurr[]>([]);
  const [showAllCurrency, setShowAllCurrency] = useState<boolean>(false)

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
      {showAllCurrency ? currency.map(curr => <CurrencyPageItem {...curr} />) :
        currency.filter(curr => shortListCurrency.includes(curr.cc)).map(curr => <CurrencyPageItem {...curr} />)
      }
      {showAllCurrency ?
        <button className={s.button} onClick={() => setShowAllCurrency(false)}>показати лише важливі</button> :
        <button className={s.button} onClick={() => setShowAllCurrency(true)}>показати увесь список</button>
      }
    </div>
  )
}