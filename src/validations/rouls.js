const reqValid = () => {
    return {
        name:"req"
    }
}

const minValid = (min) => {
    return {
        name:"min",
        min
    }
}

const maxValid = (max) => {
    return {
        name:"max",
        max
    }
}

export {reqValid , minValid , maxValid}