export function oddFun(value) {
    if (typeof value === "number" && Number.isInteger(value) && value % 2 !== 0) {
        return value;
    }
    throw new Error("Kiritilgan raqam toq emas");
}

export function evenFun(value) {
    if (typeof value === "number" && Number.isInteger(value) && value % 2 == 0) {
        return value
    }
    throw new Error("Kiritilgan raqam juft emas");

}