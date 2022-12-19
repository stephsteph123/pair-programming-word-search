const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let result = []; 
    for (let x = 0; x < letters[0].length; x++) { 
        const column = [] 
        for (let y=0; y < letters.length; y++) { 
            column.push(letters[y][x]); 
        }
        result.push(column)
        }
        const VertJoin = result.map(ls => ls.join(''))
        for (let y of VertJoin) {
            if (y.includes(word)) return true
        };
        return false
};
module.exports = wordSearch
