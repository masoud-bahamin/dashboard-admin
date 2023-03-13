const validator = (value, validatinsArrey) => {
    let boolaianArrey = [];
    validatinsArrey.forEach(element => {
        if (element.name === "req") {
            value.length < 1 && boolaianArrey.push("req")
        }
        else if (element.name === "min") {
            value.length < element.min && boolaianArrey.push("min")
        }
        else if (element.name === "max") {
            value.length > element.max && boolaianArrey.push("max")
        }
    });

    if (boolaianArrey.length === 0) {
        return true
    } else {
        return false
    }
}

export default validator