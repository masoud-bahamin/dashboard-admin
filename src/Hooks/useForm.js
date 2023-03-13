import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "INPUTS": {
            let isFormValid = true;
            for (const key in state.inputs) {
                console.log("key :" ,key , "" );
                if (key === action.id) {
                    isFormValid = isFormValid && action.isValid;
                } else {
                    isFormValid = isFormValid && state.inputs[key].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.id]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isFormValid: isFormValid
            }
        }
        default: return state
    }
}

export default function useForm(inputs, isValid) {

    const [formState, dispatch] = useReducer(reducer, {
        inputs,
        isFormValid: isValid
    })

    const inputHandler = (value, isValid, id) => {
        dispatch({
            type: "INPUTS",
            value, isValid, id
        })
    }

    return [formState, inputHandler]
}
