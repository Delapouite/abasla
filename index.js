var hierarchy = ['continent', 'country', 'city'];
var cities = {
	'Africa': {
		'Egypt': [
			'Cairo',
			'Alexandria'
		],
		'Morocco': [
			'Rabbat',
			'Casablanca'
		]
	},
	'America': {
		'Canada': [
			'Montreal',
			'Toronto'
		],
		'Chile': [
			'Santiago'
		],
		'Colombia': [
			'Bogota',
			'Cali'
		]
	},
	'Europe': {
		'England': [
			'Liverpool',
			'London',
			'Manchester'
		]
	}
};

var foods = {
	'red': [
		{
			name: 'strawberry',
			type: 'fruit'
		},
		{
			name: 'tomato',
			type: 'fruit'
		}
	],
	'green': [
		{
			name: 'pie',
			type: 'veggie'
		},
		{
			name: 'bean',
			type: 'veggie'
		}
	]
};

function assign(o1, o2) {
	if (o1 == null || o2 == null)
		return o1;

	for (var key in o2)
		if (o2.hasOwnProperty(key))
			o1[key] = o2[key];

	return o1;
}

function abasla(hierarchy, tree, opts) {
	opts = opts || {};
	// results
	var flat = [];

	var tip = hierarchy.length - 1;
	if (opts.mergeLeaf) tip++;

	function walk(nodes, depth, ancestors) {
		var key = hierarchy[depth];
		// build ancestors
		if (depth < tip) {
			Object.keys(nodes).forEach(function(ancestor) {
				ancestors[key] = ancestor;
				walk(nodes[ancestor], depth + 1, ancestors);
			});
		// leaf
		} else {
			nodes.forEach(function(leaf) {
				var obj = {};
				if (opts.mergeLeaf) {
					obj = leaf;
				} else {
					obj[key] = leaf;
				}
				obj = assign(obj, ancestors);
				flat.push(obj);
			});
		}
	}
	walk(tree, 0, {});
	return flat;
}

console.log('Cities');
console.log(abasla(hierarchy, cities));
console.log('Foods');
console.log(abasla(['color', 'food'], foods));
console.log('Merge foods');
console.log(abasla(['color'], foods, {mergeLeaf: true}));
