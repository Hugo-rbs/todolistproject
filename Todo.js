class Todo {
  static DONE_MARKER = 'X';
  static UNDONE_MARKER = ' ';
  constructor(title) {
    this.title = title;
    this.done = false;
  }
  markDone() {
    this.done = true;
  }
  markUndone() {
    this.done = false;
  }
  isDone() {
    return this.done;
  }
  getTitle () {
    return this.title;
  }
  toString() {
    let marker = this.done ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }
}


class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("Can only add Todo objects.");
    }
    this.todos.push(todo);
  }
  size() {
    return this.todos.length;
  }
  first() {
    return this.todos[0];
  }
  last() {
    return this.todos[this.size() - 1];
  }
  itemAt(locationIndex) {
    this._validateIndex(locationIndex);
    return this.todos[locationIndex];
  }
  markDoneAt(indexPosition) {
    this._validateIndex(indexPosition);
    return this.todos[indexPosition].markDone();
  }
  markUndoneAt(indexPosition) {
    this._validateIndex(indexPosition);
    return this.todos[indexPosition].markUndone();
  }
  isDone() {
    return this.todos.every(todo => todo.isDone());
  }
  shift() {
    return this.todos.shift();
  }
  pop() {
    return this.todos.pop();
  }
  removeAt(indexPosition) {
    this._validateIndex(indexPosition);
    return this.todos.splice(indexPosition, 1);
  }
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join('\n');
    return `${title}\n${list}`;
  }
  forEach(callback) {
    this.todos.forEach(todo => callback(todo));
  }
  filter(callbackFunc) {
    let filteredElements = [];
    this.forEach(todo => {
      if (callbackFunc(todo)) {
        filteredElements.push(todo);
      }
    });
    return filteredElements;
  }
  findByTitle(title) {
    return TodoList.prototype.filter.call(this,todo => todo.title === title)[0];
  }
  allDone() {
    return TodoList.prototype.filter.call(this, todo => todo.isDone());
  }
  allNotDone() {
    return TodoList.prototype.filter.call(this, todo => !todo.isDone());
  }
  markDone(title) {
    let toDoToMark = this.findByTitle(title);
    if (toDoToMark) {
      toDoToMark.markDone();
    }
  }
  markAllDone() {
    // STUB
    // Mark every todo on the list as done.
    TodoList.prototype.forEach.call(this, todo => todo.markDone());
  }
  markAllUndone() {
    // STUB
    // Mark every todo on the list as not done.
    TodoList.prototype.forEach.call(this, todo => todo.markUndone());
  }
  toArray() {
    return this.todos.slice();
  }
  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`Invalid index: ${index}`);
    }
  }
}


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);


list.markAllDone();
// console.log(list.allNotDone());

// console.log(list.allDone());
console.log(list.toArray());
// filter method implementation

// option 1

// forEach(callback) {
//   for (let idx = 0; idx < this.todos.length; idx++) {
//     let todo = this.todos[idx];
//     callback(todo);
//   }
// }

// option 2



