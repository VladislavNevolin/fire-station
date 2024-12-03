import classes from './ServicebookComposition.module.css'



export default function ServicebookComposition() {
    return (
        <section className={classes.servicebookComposition}>
            
            
            <label className={classes.label} >
                <p className={classes.p}>В боевом расчете: СИЗОД (вид и количество) </p>
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
            <p>радиостанции носимые </p>
                
                <input
                className={classes.input} 
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                дозиметрические приборы 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                костюмы защитные (вид и количество) 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                ГАСИ 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                Механизированный инструмент (вид и количество) 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                В резерве: пожарные автомобили 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                СИЗОД (вид и количество) 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                ГАСИ
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                Механизированный инструмент (вид и количество) 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                В ремонте автомобили: 
                <input
                    // type="number"
                    required
                />
            </label>
            <label className={classes.label}>
                На техническом обслуживании (далее - ТО) автомобили: 
                <input
                    // type="number"
                    required
                />
            </label>
        </section>
    )
}