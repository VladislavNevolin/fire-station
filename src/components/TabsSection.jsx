import Button from "./Button/Button";

import classes from './TabsSection.module.css'

export default function TabsSection({ active, onChange }) {
    return (
        <section style={{marginBottom: "1rem"}} className={classes.section}>
            <Button isActive={active=== 'main'} onClick={()=>onChange('main')}>Главная</Button> 
            <Button isActive={active=== 'service'} onClick={()=>onChange('service')}>Книга службы</Button>
            <Button isActive={active=== 'structure'} onClick={()=>onChange('structure')}>Кадровый состав караула</Button>
            <Button isActive={active=== 'timeSheet'} onClick={()=>onChange('timeSheet')}>Табель учета рабочего времени</Button>
            <Button isActive={active=== 'studyBook'} onClick={()=>onChange('studyBook')}>Учебный раздел</Button>
        </section>
    )
}