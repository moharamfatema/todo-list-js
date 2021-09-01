class item{
    li;
    constructor(value) {
        this.isDone = false;
        this.value = value;
    }
    getValue(){
        return this.value;
    }
    getLi(){
        return this.li;
    }
}
const list = document.getElementById("list").children;
console.log(list);
const input = document.getElementById("textbox");
const addButton = document.getElementById("add");
document.getElementsByTagName("form")[0].addEventListener("submit",e => {
    e.preventDefault();
    let value = input.value.trim();
    if (!value){
        input.value = "";
        return;
    }
    const Item = new item(input.value);
    itemAddLi(Item);
    document.getElementById("list").appendChild(Item.li);
    input.value = "";
    handleClick(Item);
    handleContext(Item)//TODO:implement
})
function itemAddLi(Item){
    let li = document.createElement("li");
    li.innerText = Item.value;
    if (Item.isDone){
        li.classList.add("done")
    }
    console.log(li)
    Item.li = li;
    return Item.li;
}
function handleClick(Item){
    Item.li.addEventListener('click',e => {
        //const li = Item.li;
        if (Item.isDone){
            Item.isDone = false;
            Item.li.classList.remove('done');
        }else{
            Item.isDone = true;
            Item.li.classList.add('done');
            Item.li.order = list.length-1;
        }
    })
}
function handleContext(Item){
    Item.li.addEventListener('contextmenu', e => {
        e.preventDefault();
        alert(Item.li.innerText + " will be removed!");
        Item.li.remove();
    })
}
console.log(list);