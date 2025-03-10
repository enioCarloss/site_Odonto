import { useForm } from "react-hook-form"
import { Inputs } from "../Inputs"

export const SchedulingForm = () => {
    const { handleSubmit, register, reset } = useForm()
    const id = crypto.randomUUID()
    const onSubmit = (formData) => {
        const userScheduling = { id, ...formData }
        console.log(userScheduling)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Inputs placeholder="Nome" type="text" {...register("name")} />
            <Inputs placeholder="CPF" type="text" {...register("cpf")} />
            <Inputs placeholder="Data de Nascimento" type="date" {...register("date_birth")} />
            <Inputs placeholder="Telefone" type="tel" {...register("phone_number")} />

            <select {...register("treatments")} >
                <option value="">Selecione um tratamento</option>
                <option value="1">Example 1</option>
                <option value="2">Example 2</option>
                <option value="3">Example 3</option>
                {/* Add more options */}
            </select>
            <button >Agendar</button>
        </form>

    )
}