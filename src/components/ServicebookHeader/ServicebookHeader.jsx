import classes from './ServicebookHeader.module.css'

export default function ServicebookHeader() {
    return (
        <div className={classes.servicebookHeader}>
            <h3>1. Состав караула</h3>
            <section className={classes.section}>
                <div>
                    <label>
                        По списку:
                        <input
                            type="number"
                            required
                        />
                    </label>
                    <label>
                        На боевом дежурстве:
                        <input
                            type="number"
                            required
                        />
                    </label>
                    <label>
                        В боевом расчете:
                        <input
                            type="number"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        В отпуске:
                        <input
                            type="number"
                            required
                        />
                    </label>
                    <label>
                        В командировке:
                        <input
                            type="number"
                            required
                        />
                    </label>
                    <label>
                        Отсутствует по болезни:
                        <input
                            type="number"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Иные причины:
                        <input
                            type="number"
                            required
                        />
                    </label>
                    <br />

                </div>
            </section>
            <p> Боевой расчет отделений дежурного караула на автомобилях</p>
        </div>

    )
}




