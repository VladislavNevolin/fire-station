import { useState } from "react";

import Modal from "../Modal/Modal"
import Button from "../Button/Button";
import ServicebookTable from "./ServicebookTable"
import ServicebookHeader from '../ServicebookHeader/ServicebookHeader'

import classes from './ServiceBook.module.css'
import ServicebookComposition from "../ServicebookComposition/ServicebookComposition";
import ServicebookDuty from "../ServicebookDuty/ServicebookDuty";



export default function ServiceBook() {
    const [modal, setModal] = useState(false);
    const todayDay = new Date();
    const tommorowDate = new Date();
    const now = todayDay.toLocaleDateString()
    tommorowDate.setDate(tommorowDate.getDate() + 1)
    const tommorow = tommorowDate.toLocaleDateString()


    return (
        <>
            <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>Открыть информацию</Button>
            <Modal open={modal}>

                {/* Все требуется стилизовать и внести данные */}
                <form action="/apply/" method="POST" className={classes.main}>
                    <h1>Наряд на службу</h1>
                    <label className={classes.stageMain}>
                        <select required className={classes.stage}>
                            <option value="first">Первого </option>
                            <option value="second">Второго </option>
                            <option value="third">Третьего </option>
                            <option value="fourth">Четвертого </option>
                        </select>
                        <p>караула</p>
                    </label>
                    <p>c <input type="numder" required /> час. <span>{now}</span> по <input type="numder" required /> час. <span>{tommorow}</span></p>
                    <div className={classes.inputDiv}>
                        <label className={classes.inputLabel}>
                            <p>Начальник караула:</p>
                            <input
                                type="text"
                                required
                            />
                        </label>

                        <label className={classes.inputLabel}>
                            <p>Диспетчер (радиотелефонист):</p>
                            <input
                                type="text"
                                required
                            />
                        </label>
                    </div>

                    <ServicebookHeader />
                    <ServicebookTable />
                    <ServicebookComposition />
                    <ServicebookDuty />

                    <button type="submit">Сохранить данные</button>
                </form>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            <div className={classes.dataSave} >
                <h2>Сохраненные данные</h2>
                <p>Книга службы за 17.11</p>
                <p>Книга службы за 16.11</p>
                <p>Книга службы за 15.11</p>
                <p>Книга службы за 14.11</p>
                <p>Книга службы за 13.11</p>
                <p>Книга службы за 12.11</p>
                <p>Книга службы за 11.11</p>
                <p>Книга службы за 10.11</p>
            </div>
        </>
    )
}


