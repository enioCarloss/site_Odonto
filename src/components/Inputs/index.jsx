import { forwardRef } from "react";

export const Inputs = forwardRef(({ label, ...rest }) => {

    return (
        <div>
            <label>{label}</label>
            <input {...rest} />
        </div>
    );
})