import { useState, useEffect } from "react";
import Modal from '../Modal/Modal';
import classes from './TimeSheet.module.css'

export default function TimeSheet() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <section className={classes.section}>
                <h2>Текущий рабочий месяц</h2>
                <img
                    src="../../public/timeSheet.png"
                    alt="timeSheet"
                    className={classes.image}
                    onClick={() => setModal(true)} />
                <Modal open={modal}>
                    <img
                        src="../../public/timeSheet.png"
                        alt="timeSheet"
                        className={classes.imageBig}
                        onClick={() => setModal(false)} />
                </Modal>
            </section>
            <section className={classes.sectionSecond}>
                <div className={classes.div}>
                    <h4 className={classes.h}>Табель учера рабочего времени за октябрь</h4>
                    <img src="../../public/timeSheet.png" alt="timeSheet" className={classes.imageSmall} />
                </div>
                <div className={classes.div}>
                    <h4 className={classes.h}>Табель учера рабочего времени за сентябрь</h4>
                    <img src="../../public/timeSheet.png" alt="timeSheet" className={classes.imageSmall} />
                </div>
                <div className={classes.div}>
                    <h4 className={classes.h}>Табель учера рабочего времени за август</h4>
                    <img src="../../public/timeSheet.png" alt="timeSheet" className={classes.imageSmall} />
                </div>

            </section>

        </>
    )
}