//Objective is to merge two binary trees. When merging overlapping nodes,
//we add their values together.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)

let tree2 = new Tree()
tree2.createRoot(14)
tree2.addLeftNode(tree.root, 6)
tree2.addRightNode(tree.root, 15)
tree2.addRightNode(tree.root.right, 8)
tree2.addLeftNode(tree.root.right, 10)


//O(n) solution that traverses the trees together. If they overlap, we add
//their values together

let t1 = tree.root
let t2 = tree2.root

if (!t1) {
    return t2
}

if (!t2) {
    return t1
}

t1.val += t2.val 
t1.left = mergeTrees(t1.left, t2.left)
t1.right = mergeTrees(t1.right, t2.right)

return t1