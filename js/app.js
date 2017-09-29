let ShoppingList1 = new ShoppingList();
let listItem = ShoppingList1.render();

let content = document.getElementById("content");
content.innerHTML = listItem;

let title = document.getElementById("title");
let description = document.getElementById("description");

function addToShoppingList(){
  let new_shopping_list_item = new ShoppingListItem(title.value, description.value);
  ShoppingList1.addItem(new_shopping_list_item);
  ShoppingList1.render();
}