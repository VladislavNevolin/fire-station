import { useState, useEffect } from "react";

import Modal from '../Modal/Modal';
import Button from "../Button/Button";

import classes from './StudyBook.module.css'

export default function StudyBook() {
    const [modal, setModal] = useState(false);

    return (
        <div >
            <section className={classes.subjects}>
                <h2 className={classes.title}>Учебные предметы</h2>
                <div className={classes.subjectsContainer}>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Общественно-государственная подготовка
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Пожарно-тактическая подготовка, дневные ПТЗ, ночные ПТЗ
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Аварийно-спасательные работы
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Пожарная и аварийно-спасательная техника
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Гражданская оборона и мобилизационная подготовка
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Подготовка газодымозащитников
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Психологическая подготовка
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Пожарно-профилактическая подготовка
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Оказание первой помощи
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Охрана труда
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Оперативно-тактическое изучение района выезда и охраняемых объектов
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Пожарно-строевая подготовка
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Физическая подготовка
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Разбор пожаров
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Дополнительные занятия
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Ежеквартальная оценка боевой подготовки личного состава дежурных караулов (смен) (итоговая оценка по предметам)
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                </div>
                <div className={classes.theory}>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Методические разработки <br />(План-конспекты,<br /> методические планы)
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                </div>
                <div className={classes.tests}>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Учебные тесты
                    </Button>
                    <Modal open={modal}>
                        <Button onClick={() => setModal(false)}>Close modal</Button>
                    </Modal>
                    <Button
                        style={{ marginBottom: '1rem' }}
                        onClick={() => setModal(true)}
                        className={classes.messages}>
                        Сводная ведомость
                    </Button>
                    <Modal open={modal}>
                        <div className={classes.result}>
                            <h2>Сводная ведомость</h2>
                            <img src="../../../public/result.png" alt="" className={classes.resultImg} />
                            <Button onClick={() => setModal(false)}>Close modal</Button>
                        </div>
                    </Modal>
                </div>
            </section>
        </div>
    )
}