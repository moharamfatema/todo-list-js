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
    set isDone(done) {
        this._isDone = done;
    }
}
const list = document.getElementById("list").children;
console.log(list);
const input = document.getElementById("textbox");
const addButton = document.getElementById("add");
document.getElementsByTagName("form")[0].addEventListener("submit",e => {
    console.log("submit")
    e.preventDefault();

    const Item = new item(input.value);

    let li = document.createElement("li");
    li.value = Item.value;
    list.push(li);
    console.log(li.value)
    if (Item.isDone){
        li.classList.add("done")
    }
    document.getElementById("list").appendChild(li);

    handleClick(); //TODO:implement
})
