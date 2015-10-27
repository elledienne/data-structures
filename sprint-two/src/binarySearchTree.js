var BinarySearchTree = function(value) {
	var root = Node(value);
	var binarySearchTree = root;
	var depths = {
		depthLeft: 1,
		depthRight: 1
	};

	binarySearchTree.insert = function(value, parent, side) {
		parent = parent || root;
		var node;
		//console.log('root: ', root)
		// if the new node is SMALLER than his parent
		if (parent.value > value) {
			side = side || 'depthLeft';
			node = Node(value, side, parent.depth + 1);
			if (!parent.left) {
				parent.left = node;
			} else {
				this.insert(value, parent.left, side);
			}
			
		// if the new node is BIGGER than his parent
		} else if (parent.value < value) {
			side = side || 'depthRight';
			node = Node(value, side, parent.depth + 1);
			if (!parent.right) {
				parent.right = node;
			} else {
				this.insert(value, parent.right, side);
			}
		}
		if(node.depth > depths[node.side]) {
			depths[node.side]++;
		}
		//if(depths.depthLeft/depths.depthRight > 2 || depths.depthLeft/depths.depthRight < 0.5) {
		//	this.rebalance();
		//}
	};

	binarySearchTree.contains = function(target, item) {
		//base case
		item = item || root;
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
		item = item || root;

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
	};

	binarySearchTree.resetRoot = function(newRoot){
		this.value = newRoot;
		this.left = null;
		this.right = null;
		root = this;
	};

	binarySearchTree.rebalance = function(){
		//console.log(depths.depthLeft, 'fuck', depths.depthRight);
		collapsedTree = this.collapseTree();
		//console.log(this)

		var optimizeInsert = function(setRoot, values){
			// find middle of array (if odd floor it)

			var middle = Math.ceil(values.length / 2);
			// take that element and split array in two
			var leftSide = values.slice(0, middle);
			var rigthSide = values.slice(middle)

			var newNode = leftSide.pop();
			//console.log('> ',newNode);
			console.log(leftSide, rigthSide)
			if(setRoot){
				this.value = newNode;
			} else {
				this.insert(newNode);
			}
			console.log(this)
			if(leftSide.length > 0){
				optimizeInsert.call(this, false, leftSide);
			}
			if(rigthSide.length > 0){
				optimizeInsert.call(this, false, rigthSide);
			}
			return;
		}

		this.resetRoot();
		optimizeInsert.call(this, true, collapsedTree);
		console.log(this)
	};

	return binarySearchTree;
};

var Node = function(value, side, depth) {
	var node = {};

	node.value = value;
	node.left = null;
	node.right = null;
	node.depth = depth || 1;
	node.side = side;

	return node;
};

// binarySearchTree = BinarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);
// binarySearchTree.insert(4);
binarySearchTree = BinarySearchTree(10);
binarySearchTree.insert(9);
binarySearchTree.insert(7);
binarySearchTree.insert(4);
binarySearchTree.insert(12);

// console.log(binarySearchTree);

console.log(binarySearchTree.rebalance());
console.log(binarySearchTree.collapseTree());
	/*
	 * Complexity: What is the time complexity of the above functions?
	 */
