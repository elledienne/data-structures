var BinarySearchTree = function(value) {
	var root = Node(value);
	var binarySearchTree = root
	var depthLeft = 1;
	var depthRight = 1; 

	binarySearchTree.insert = function(value, parent) {
		var parent = parent || root;
		var node = Node(value);
		node.depth = parent.depth + 1;

		if (parent.value > value) {
			if (!parent.left) {
				parent.left = node;
			} else {
				this.insert(value, parent.left);
			}
			if(node.depth > depthLeft) {
				depthLeft++;
			}
		} else if (parent.value < value) {
			if (!parent.right) {
				parent.right = node;
			} else {
				this.insert(value, parent.right)
			}
			if(node.depth > depthRight) {
				depthRight++;
			}
		}
		// if(depthLeft/depthRight === 2 || depthLeft/depthRight === .5) {
		// 	this.rebalanceTree();
		// }

	};

	binarySearchTree.contains = function(target, item) {
		//base case
		var item = item || root;
		if (item.value === target) {
			return true;
		} else if (item.value > target && item.left) {
			return this.contains(target, item.left);
		} else if (item.value < target && item.right) {
			return this.contains(target, item.right);
		}

		return false;
	};

	binarySearchTree.depthFirstLog = function(callback, item) {
		var item = item || root;

		callback(item.value);

		if (item.left) {
			this.depthFirstLog(callback, item.left);
		}
		if (item.right) {
			this.depthFirstLog(callback, item.right);
		}
	};

	binarySearchTree.collapseTree = function(node) {
		node = node || root;
		var result = [node.value];
		if (node.left) {
			result = this.collapseTree(node.left).concat(result);
		}
		if (node.right) {
			result = result.concat(this.collapseTree(node.right));
		}
		return result;
	}

	return binarySearchTree;
}

var Node = function(value) {
		var node = {};

		node.value = value;
		node.left = null;
		node.right = null;
		node.depth = 1;

		return node;
	}

binarySearchTree = BinarySearchTree(5);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
console.log(binarySearchTree.collapseTree());
	/*
	 * Complexity: What is the time complexity of the above functions?
	 */