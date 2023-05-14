class MaxHeap {
  constructor(arr = []) {
    this.heap = arr;
    this.buildHeap();
  }

  
  insert(number) {
    this.heap.push(number);
    this.heapifyUp()
  }

  getMax() {
      if(this.heap.length === 0) return null;
      else if(this.heap.length === 1) {
        return this.heap.pop();
      } else {
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
        
      }
  }

  heapifyUp(nodeIndex) {
    if (!nodeIndex) nodeIndex = this.heap.length-1;
    const parentIndex = Math.floor(nodeIndex - 1 / 2);
    const node = this.heap[nodeIndex];
    const parent = this.heap[parentIndex];
    if (parent && parent < node) {
      this.swap(nodeIndex, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(nodeIndex) { 
    if(!nodeIndex) nodeIndex = 0;
    const leftChildNodeIndex = nodeIndex * 2 + 1;
    const rightChildNodeIndex = nodeIndex * 2 + 2;
    const maxNodeIndex = this.getMaxNodeIndex(leftChildNodeIndex, rightChildNodeIndex);

    const node = this.heap[nodeIndex];
    if(maxNodeIndex && this.heap[maxNodeIndex] > node) {
      this.swap(nodeIndex, maxNodeIndex);
      this.heapifyDown(maxNodeIndex);
    }
  }

  buildHeap() {
    const indexOfFirstParent = Math.floor((this.heap.length - 2) /2)
    for(let i = indexOfFirstParent; i >= 0; i--) {
      this.heapifyDown(i)
    }
  }


  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  getMaxNodeIndex(index1, index2) {
    const node1 = this.heap[index1];
    const node2 = this.heap[index2];
    if (node1 !== undefined && node2 !== undefined){
      return node1 > node2? index1: index2;
    } else if(node1 !== undefined) {
      return index1;
    } else if (node2 !== undefined) {
      return node2;
    } else {
      return null
    }


  }
}

// const maxHeap = new MaxHeap();

// maxHeap.insert(1);
// maxHeap.insert(5);
// maxHeap.insert(10);
// maxHeap.insert(26);
// maxHeap.insert(30);
// maxHeap.insert(4);
// maxHeap.insert(8);

// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());


// maxHeap.insert(10);
// maxHeap.insert(55);
// maxHeap.insert(19);
// maxHeap.insert(60);
// maxHeap.insert(100);
// maxHeap.insert(499);
// maxHeap.insert(878);

// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());
// console.log(maxHeap.getMax());

// console.log(maxHeap.heap.length);


const maxHeap = new MaxHeap([1, 40, 8, 9, 15, 7, 0, 0, 3, 3, 8, 41, 75, 26, 26]);

console.log(maxHeap.heap)


console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());
console.log(maxHeap.getMax());

// console.log(maxHeap.heap)
// console.log(maxHeap.heap)
// console.log(maxHeap.heap)
// console.log(maxHeap.heap)
// console.log(maxHeap.heap)




