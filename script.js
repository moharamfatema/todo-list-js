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
const list = [];

restore();

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
    addNew(Item);
    store(Item);
    input.value = "";

})
function addNew(Item){
    Item.li = itemAddLi(Item);
    list.push(Item);
    Item.li.id = "Li"+list.indexOf(Item).toString();
    document.getElementById("list").append(Item.li);

    handleClick(Item);
    handleContext(Item);
}

function itemAddLi(Item){
    let li = document.createElement("li");
    li.innerHTML = `<h2>${Item.value}</h2>`;
    if (Item.isDone){
        li.classList.add("done");
    }else {
        li.classList.remove("done");
    }
    Item.li = li;

    console.log(li)

    return Item.li;
}
function handleClick(Item){
    Item.li.addEventListener('click',e => {
        //const li = Item.li;
        if (Item.isDone){
            Item.isDone = false;
            Item.li.classList.remove('done');
            localStorage.setItem("class"+list.indexOf(Item).toString(),"undone");
        }else{
            Item.isDone = true;
            Item.li.classList.add('done');
            Item.li.order = list.length-1;
            localStorage.setItem("class"+list.indexOf(Item).toString(),'done');
        }console.log(localStorage);
    })
}
function handleContext(Item){
    Item.li.addEventListener('contextmenu', e => {
        e.preventDefault();

        //alert(Item.li.innerText + " will be removed!");
        let i = list.indexOf(Item);
        localStorage.removeItem("Li"+i.toString());
        localStorage.removeItem("class"+i.toString());
        list.splice(i,1);
        Item.li.remove();

        console.log(list);
        console.log(localStorage);
    })
}
function store(Item){
    let i = list.indexOf(Item).toString();
    localStorage.setItem("Li"+i,Item.li.innerText);
    if (Item.isDone){
        localStorage.setItem("class"+list.indexOf(Item).toString(),"done");
    }else{
        localStorage.setItem("class"+list.indexOf(Item).toString(),"undone");
    }

}
function restore(){
    for (let i = 0; i < localStorage.length/2; i++){
        const Item = new item(localStorage.getItem("Li"+i.toString()));
        let done = localStorage.getItem("class"+i.toString());
        Item.isDone = done === "done";
        addNew(Item);
    }
}
document.getElementById("clear").addEventListener('click',e => {
    localStorage.clear();
    window.location.reload(false);
})
