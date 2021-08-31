class item{
    constructor(value) {
        this._isDone = false;
        this._value = value;
    }

    get value() {
        return this._value;
    }

    get isDone() {
        return this._isDone;
    }

    set isDone(value) {
        this._isDone = value;
    }
}

const list = [];

const input = document.getElementById("textbox");
const addButton = document.getElementById("add");
addButton.addEventListener("click",e => function (){
    const Item = new item(input.value);
    e.preventDefault();
    list.push(Item);
    updateList();
})

function updateList(){
    const doclist = document.getElementById("list");

    doclist.remove();
    for(let i =0;i<list.length;i++){
        doclist.append(list[i])
    }
}