function getElementWidth(content, padding, border) {
    const contentNumber = Number.parseFloat(content);
    const paddingNumber = Number.parseFloat(padding);
    const borderNumber = Number.parseFloat(border);
    const borderBox = contentNumber + paddingNumber * 2 + borderNumber * 2;
    return borderBox;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 