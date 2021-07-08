const capitalize = (str) => {
    if(str.length = 0 || str === "") return "";
    if(typeof str !== 'string') return "ERROR: not a string";
    return str[0].toUpperCase()+str.slice(1);
}

module.exports = capitalize

// console.log(capitalize("vinay"));