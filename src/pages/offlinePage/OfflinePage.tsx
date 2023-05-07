import { FC } from "react";

import nakaz from '../../data/nakaz744.pdf'

import s from './OfflinePage.module.scss'

export const OfflinePage: FC = (): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <embed src={nakaz} width='100%' height='1000px'/>
    </div>
  )
}