function showList(list) {
    console.log ('--- Listagem completa dos itens ---');
    for( i = 0; i < list.length; i++){
        console.log(`${i + 1} = ${list[i]}`);
    }
    console.log();
}

module.exports = showList;