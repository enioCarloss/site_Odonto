import { SchedulingForm } from "../../components/SchedulingForm"
import style from "./index.module.scss"
export const SchedulingPage = () => {

    return (
        <section className={style.section_SchedulingBox}>
            <h2>Agendamento</h2>
            <div>
                <SchedulingForm />
            </div>
        </section>
    )
}