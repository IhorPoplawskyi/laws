import { FC, useEffect, useState } from 'react'

import { laws } from '../../data/laws'
import { SideBar } from '../../components/sideBar/SideBar'
import { LawPageItem } from '../../components/lawPageItem/LawPageItem'

import s from './lawPage.module.scss'

export const LawPage: FC = (): JSX.Element => {
    let [list, setList] = useState(laws);
    const [category, setCategory] = useState<string>('усі');

    useEffect(() => {
        setList(laws)
        if (category === 'усі') {
            setList(laws)
        } else {
            setList(state => state.filter(law => law.category === category))
        }
    }, [category])

    return (
        <div className={s.wrapper}>
            <SideBar setCategory={setCategory}/>
            <div className={s.container}>
                {list.map(law => <LawPageItem key={law.name} name={law.name} href={law.href}/>)}
            </div>
        </div>
    )
}