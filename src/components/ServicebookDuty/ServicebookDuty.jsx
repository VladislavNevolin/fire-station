import classes from './ServicebookDuty.module.css'
import { employees } from '../../constants/data'

export default function ServicebookDuty() {
    // const data = employees.map(employee => {
    //     return (
    //         <div key={employee.id} name={employee.surname + ' ' + employee.name[0] + '. ' + employee.patronymic[0] + '.'} />
    //     )
    // })
    // const dataFiltered = employees.filter(data => data.id === 5);

    return (
        <section className={classes.section}>

            <p className={classes.type}>Вид наряда</p>
            <p className={classes.name}>Фамилия и инициалы</p>
            <p className={classes.time}>Время заступления</p>


            <p className={classes.post1}>Постовой на фасаде</p>
            <p className={classes.post2}>Дневальный по гаражу</p>
            <p className={classes.post3}>Дневальный по помещениям</p>
            <p className={classes.post4}>Дежурный по подразделению</p>


            <select className={classes.bodyPoint1} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint2} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint3} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint4} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint5} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint6} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint7} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint8} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint9} required >
                <option value="none" selected></option>
            </select>
            <select className={classes.bodyPoint10} required >
                <option value="none" selected></option>
            </select>



            {Array.from({ length: 40 }, (_, index) => (
                <label key={index} className={classes.huine}>
                    <input type="number" required />
                </label>
                
                
            ))} {/* Не работает задание класса хз почему */}
            
        
            


        </section>
    )
}