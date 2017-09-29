let ShoppingList1 = new ShoppingList();
let listItem = ShoppingList1.render();

let content = document.getElementById("content");
content.innerHTML = listItem;

let title = document.getElementById("title");
let description = document.getElementById("description");

function addToShoppingList() {
  let new_shopping_list_item = new ShoppingListItem(title.value, description.value);
  ShoppingList1.addItem(new_shopping_list_item);
  content.innerHTML = ShoppingList1.render();
}

function changeCheckedStatus(idx, checkbox){
  let checklist = document.getElementsByClassName("checkbx");
  for(let i = 0; i < checklist.length; i ++){
    if(checklist[i].checked){
      ShoppingList1.items[i].check();
      console.log(ShoppingList1.items[i]);
    }else if(!checklist[i].checked){
      ShoppingList1.items[i].uncheck();
      console.log(ShoppingList1.items[i]);
    }
  }
}
