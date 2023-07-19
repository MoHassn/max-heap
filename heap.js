class MinHeap {
  constructor(arr = []) {
    this.heap = arr;
    this.buildHeap();
  }

  insert(number) {
    this.heap.push(number);
    this.heapifyUp();
  }

  getMin() {
    // console.log(this.heap)

    if (this.heap.length === 0) return null;
    else if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  }

  heapifyUp(nodeIndex) {
    if (!nodeIndex) nodeIndex = this.heap.length - 1;
    const parentIndex = Math.floor((nodeIndex - 1) / 2);
    const node = this.heap[nodeIndex];
    const parent = this.heap[parentIndex];
    if (parent !== undefined && parent > node) {
      this.swap(nodeIndex, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(nodeIndex) {
    if (!nodeIndex) nodeIndex = 0;
    const leftChildNodeIndex = nodeIndex * 2 + 1;
    const rightChildNodeIndex = nodeIndex * 2 + 2;
    const minNodeIndex = this.getMinNodeIndex(
      leftChildNodeIndex,
      rightChildNodeIndex
    );

    const node = this.heap[nodeIndex];
    if (minNodeIndex && this.heap[minNodeIndex] < node) {
      this.swap(nodeIndex, minNodeIndex);
      this.heapifyDown(minNodeIndex);
    }
  }

  buildHeap() {
    const indexOfFirstParent = Math.floor((this.heap.length - 2) / 2);
    for (let i = indexOfFirstParent; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  getMinNodeIndex(index1, index2) {
    const node1 = this.heap[index1];
    const node2 = this.heap[index2];
    if (node1 !== undefined && node2 !== undefined) {
      return node1 < node2 ? index1 : index2;
    } else if (node1 !== undefined) {
      return index1;
    } else if (node2 !== undefined) {
      return index2;
    } else {
      return null;
    }
  }
}
