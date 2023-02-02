class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //原型上的方法

  //在链表尾部增加一个
  append(data) {
    let node = new Node(data);
    //看是不是第一个节点
    if (this.length == 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        //把下一个节点给current
        current = current.next;
      }
      //最后一个节点
      current.next = node;
    }
    this.length++;
  }

  //在任意一个位置插入
  insert(data, position) {
    let node = new Node(data);
    if (position < 0 || position > this.length) {
      return;
    }
    //在头部的后面插入
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      //插入别的地方
      let index = 0
      let current = this.head
      let previous = null
      for(;index < position;index++){
        previous = current
        current = current.next
      }
      previous.next = node
      node.next = current
    }
    this.length++
  }

  //根据位置信息获取元素
  get(position){
    let current = this.head
    for(let i = 0 ; i< position;i++){
        current = current.next
    }
    return current.data
  }

  //打印出所有的值
  toString() {
    let lineString = "";
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      lineString += current.data + " ";
      current = current.next;
    }
    return lineString;
  }
}

let line = new LinkedList();
line.append("1");
line.append("2");
line.append("3");
line.insert("4",3)
console.log(line.toString());
console.log(line.get(3));
