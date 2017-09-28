class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(item) {
    if(!(item instanceof ShoppingListItem)){
      throw new TypeError;
    }
    this.items.push(item);
  }
}