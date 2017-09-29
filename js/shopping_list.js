class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(item) {
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    }else{
      throw new TypeError;
    }
  }

  removeItem(item) {
    let itemIndex = this.items.indexOf(item);
    let lastItem = this.items.length - 1
    if(!(item instanceof ShoppingListItem) && item){
      throw new TypeError;
    }else if((this.items.indexOf(item) === -1) && item){
      throw new Error;
    }else if(!item){
      this.items.splice(lastItem, 1);
    }else{
      this.items.splice(itemIndex, 1);
    }
  }

  render() {
    let theList = "";
    this.items.forEach(function(items){
      theList += items.render();
    })
    return `<ul>${theList}</ul>`;
  }
}