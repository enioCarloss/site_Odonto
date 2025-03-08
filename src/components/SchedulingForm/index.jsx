import { Inputs } from "../Inputs"

export const SchedulingForm = () => {
    return (
        <form>
            <Inputs />
            <select>
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
                <option value="3">Contract</option>
            </select>
            <button type="submit">Agendar</button>
        </form>

    )
}