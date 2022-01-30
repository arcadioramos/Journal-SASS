import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [Values, setValues] = useState(initialState)

    const reset = ( newFormState = initialState)=>{
        setValues(newFormState);
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...Values,
            [target.name]: target.value


        });

    }

    return [ Values,handleInputChange,reset];

}