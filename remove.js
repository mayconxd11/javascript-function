const prompt = require ('prompt-sync')();
const showList = require ('./show');

function removeFromlist(list) {
    showList(list);
    const positionText = prompt ('Qual elemento você deseja remover?');
    const position = Number (positionText) - 1;
    list.splice(position, 1) ;
}

module.exports = removeFromlist;