import classes from './ServiceBook.module.css'
import { employees } from '../../constants/data'

function ServicebookTable() {
    const data = employees.map(employee => {
        return (
            <div key={employee.id} name={employee.surname + ' ' + employee.name[0] + '. ' + employee.patronymic[0] + '.'} />
        )
    })
    const dataFiltered = employees.filter(data => data.id === 5);
    console.log(employees.map(r=>{
        return(
            r.surname+' '+r.name+' '+r.patronymic+', '+r.rank+', '+r.post
        )

    }))
    return (
        <section className={classes.section}>
            <div className={classes.sbHeader}>
                <h2>Состав боевого расчета</h2>
                <div className={classes.sbHeader_text}>
                    <h3>Автомобиль (вид),</h3> <h3>государственный</h3> <h3>регистрационный </h3><h3>номер</h3>
                    <select fireCar="type" required>
                        <option value="" selected>Выберите тип автомобиля</option>
                        <option value="AC-40/130" >АЦ-40/130, г.н. ОУ 153 В</option>
                        <option value="AC40/4-3,2">АЦ-40/4-3,2, г.н. ОУ 154 В</option>
                        <option value="AR">АР, г.н. ОУ 155 В</option>
                        <option value="AL-50">АЛ-50, г.н. НВ 699 Х</option>
                    </select>
                    <h3>фамилия и</h3> <h3>инициалы</h3>
                </div>
                <div className={classes.sbHeader_text}>
                    <h3>Автомобиль (вид),</h3> <h3>государственный</h3> <h3>регистрационный </h3><h3>номер</h3>
                    <select fireCar="type" required>
                    <option value="" selected>Выберите тип автомобиля</option>
                        <option value="AC-40/130" >АЦ-40/130, г.н. ОУ 153 В</option>
                        <option value="AC40/4-3,2">АЦ-40/4-3,2, г.н. ОУ 154 В</option>
                        <option value="AR">АР, г.н. ОУ 155 В</option>
                        <option value="AL-50">АЛ-50, г.н. НВ 699 Х</option>
                    </select>
                    <h3>фамилия и</h3> <h3>инициалы</h3>
                </div>
                <div className={classes.sbHeader_text}>
                    <h3>Автомобиль (вид),</h3> <h3>государственный</h3> <h3>регистрационный </h3><h3>номер</h3>
                    <select fireCar="type" required >
                    <option value="" selected>Выберите тип автомобиля</option>
                        <option value="AC-40/130" >АЦ-40/130, г.н. ОУ 153 В</option>
                        <option value="AC40/4-3,2">АЦ-40/4-3,2, г.н. ОУ 154 В</option>
                        <option value="AR">АР, г.н. ОУ 155 В</option>
                        <option value="AL-50">АЛ-50, г.н. НВ 699 Х</option>
                    </select>
                    <h3>фамилия и</h3> <h3>инициалы</h3>
                </div>
            </div>
            <div className={classes.sbLeft}>
                <div><p>Начальник караула</p></div>
                <div><p>Помощник начальника караула</p></div>
                <div><p>Командир отделения</p></div>
                <div><p>Водитель</p></div>
                <div><p>Пожарный № 1</p></div>
                <div><p>Пожарный № 2</p></div>
                <div><p>Пожарный № 3</p></div>
                <div><p>Стажер</p></div>
            </div>
            <div className={classes.sbBody}>
                <select fireCar="type" className={classes.bodyPoint1} required >
                    <option value={data[5].props.name} selected>{data[5].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint2} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint3} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint4} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint5} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint6} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint7} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint8} required >
                    <option value={data[3].props.name} selected>{data[3].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint9} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint10} required >
                    <option value={data[4].props.name} selected>{data[4].props.name}</option>
                    <option value={data[6].props.name} >{data[6].props.name}</option>
                    <option value={data[13].props.name} >{data[13].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint11} required >
                    <option value={data[6].props.name} selected>{data[6].props.name}</option>
                    <option value={data[4].props.name} >{data[4].props.name}</option>
                    <option value={data[13].props.name} >{data[13].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint12} required >
                <option value={data[13].props.name} selected>{data[13].props.name}</option>
                    <option value={data[4].props.name} >{data[4].props.name}</option>
                    <option value={data[6].props.name} >{data[6].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint13} required >
                    <option value={data[0].props.name} selected>{data[0].props.name}</option>
                    <option value={data[1].props.name} >{data[1].props.name}</option>
                    <option value={data[2].props.name} >{data[2].props.name}</option>
                    <option value={data[12].props.name} >{data[12].props.name}</option>
                    <option value="none" ></option>

                </select>
                <select fireCar="type" className={classes.bodyPoint14} required >
                    <option value={data[1].props.name} selected>{data[1].props.name}</option>
                    <option value={data[0].props.name} >{data[0].props.name}</option>
                    <option value={data[2].props.name} >{data[2].props.name}</option>
                    <option value={data[12].props.name} >{data[12].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint15} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint16} required >
                    <option value={data[2].props.name} selected>{data[2].props.name}</option>
                    <option value={data[0].props.name} >{data[0].props.name}</option>
                    <option value={data[1].props.name} >{data[1].props.name}</option>
                    <option value={data[12].props.name} >{data[12].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint17} required >
                    <option value={data[12].props.name} selected>{data[12].props.name}</option>
                    <option value={data[0].props.name} >{data[0].props.name}</option>
                    <option value={data[1].props.name} >{data[1].props.name}</option>
                    <option value={data[2].props.name} >{data[2].props.name}</option>
                    <option value="none" ></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint18} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint19} required >
                    <option value={data[12].props.name} >{data[12].props.name}</option>
                    <option value={data[0].props.name} >{data[0].props.name}</option>
                    <option value={data[1].props.name} >{data[1].props.name}</option>
                    <option value={data[2].props.name} >{data[2].props.name}</option>
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint20} required >
                    <option value={data[12].props.name} >{data[12].props.name}</option>
                    <option value={data[0].props.name} >{data[0].props.name}</option>
                    <option value={data[1].props.name} >{data[1].props.name}</option>
                    <option value={data[2].props.name} >{data[2].props.name}</option>
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint21} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint22} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint23} required >
                    <option value="none" selected></option>
                </select>
                <select fireCar="type" className={classes.bodyPoint24} required >
                    <option value="none" selected></option>
                </select>

            </div>
        </section>
    )
}

export default ServicebookTable