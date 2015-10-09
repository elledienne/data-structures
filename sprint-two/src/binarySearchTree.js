var BinarySearchTree = function(value) {
	var root = Node(value);
	var binarySearchTree = root

	binarySearchTree.insert = function(value, parent) {
		var parent = parent || root;
		var node = Node(value);

		if (parent.value > value) {
			if (!parent.left) {
				parent.left = node;
			} else {
				this.insert(value, parent.left);
			}
		} else if (parent.value < value) {
			if (!parent.right) {
				parent.right = node;
			} else {
				this.insert(value, parent.right)
			}
		}
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

	return binarySearchTree;
}

var Node = function(value) {
		var node = {};

		node.value = value;
		node.left = null;
		node.right = null;

		return node;
	}
	/*
	 * Complexity: What is the time complexity of the above functions?
	 */