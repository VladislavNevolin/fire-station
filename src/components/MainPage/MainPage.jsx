import { useState, useEffect } from "react";

import Modal from '../Modal/Modal';
import Button from "../Button/Button";

import classes from './MainPage.module.css'

export default function MainPage() {
    const [modal, setModal] = useState(false);
    return (
        <div className={classes.main}>
            <section className={classes.mainSection}>
                <h2 className={classes.title}>Запланированные мероприятия на ближайшую неделю</h2>
                <ul className={classes.ul}>
                    <li className={classes.li}><p>Подготовка отчета по работе за месяц</p></li>
                    <li className={classes.li}><p>Сдача нормативов по физической подготовке</p></li>
                    <li className={classes.li}><p>Контроль сдачи упражнений по профессиональной подготовке</p></li>
                    <li className={classes.li}><p>...</p></li>
                </ul>
                <h2 className={classes.title}>Мероприятия на контроле</h2>
                <ul className={classes.ul}>

                    <li className={classes.li}><p>Подготовка билетов для квартальных зачетов</p></li>

                </ul>
                <h2 className={classes.title}>Выполненные мероприятия</h2>
                <ul className={classes.ul}>
                    <li className={classes.li}><p>Проведение соревнований между личным составом караулов по подтягиваниям</p></li>

                    <li className={classes.li}><p>Подать табель учета рабочего времени за предыдущий месяц</p></li>
                </ul>


            </section>
            <section className={classes.buttonSection}>
                <Button style={{ marginBottom: '1rem', backgroundColor: 'red' }} onClick={() => setModal(true)} className={classes.messages}>Телефонограммы</Button>
                <Modal open={modal}>
                    <Button onClick={() => setModal(false)}>Close modal</Button>
                </Modal>

                <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>История подразделения</Button>
                <Modal open={modal}>
                    <Button onClick={() => setModal(false)}>Close modal</Button>
                </Modal>

                <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>Ближайшие мероприятия</Button>
                <Modal open={modal}>
                    <Button onClick={() => setModal(false)}>Close modal</Button>
                </Modal>
                <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>Литература</Button>
                <Modal open={modal}>
                    <Button onClick={() => setModal(false)}>Close modal</Button>
                </Modal>
            </section>


        </div>
    )
}