import { forwardRef } from "react";

export const Inputs = forwardRef(({ label, ...rest }, ref) => {

    return (
        <div>
            <label>{label}</label>
            <input {...rest} ref={ref} />
        </div>
    );
})