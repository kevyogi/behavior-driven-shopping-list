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

  removeItem(item) {
    if(!(item instanceof ShoppingListItem)){
      throw new TypeError;
    }
    let itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }
}