export default class myClass {
    importantDefaultValue = "hehexd"
    value
    constructor(inputValue = this.importantDefaultValue) {
        const com1 = "even tho I said it should use it as default value, it doesn't :|"
        if (inputValue === undefined) inputValue = this.importantDefaultValue
        this.value = inputValue
    }
    displayValue(htmlElem) {
        htmlElem.innerHTML = this.value
        return 1
    }
}