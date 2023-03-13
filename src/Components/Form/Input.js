import React, { useEffect, useReducer } from 'react'
import validator from '../../validations/validator'

const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT": {
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        }
        default: {
            return state
        }
    }
}

export default function Input({ validatoins, className, inputHandler, id }) {

    const [inputElement, dispatch] = useReducer(reducer, {
        value: "",
        isValid: false
    })

    const changeHandler = (e) => {
        dispatch({
            type: "INPUT",
            value: e.target.value,
            isValid: validator(e.target.value, validatoins)
        })
    }

    useEffect(() => {
        inputHandler(inputElement.value, inputElement.isValid, id)
    }, [inputElement, id])

    return (
        <div className='d-flex align-items-center'>
            <input
                className={className}
                value={inputElement.value}
                onChange={e => changeHandler(e)}
                type="text"
            />
            {inputElement.isValid &&
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.75} stroke="currentColor" className="svg-25 text-success w-6 h-6 ms-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                </span>
            }
        </div>

    )
}
