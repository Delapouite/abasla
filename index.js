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
			'London',
			'Manchester',
			'Liverpool'
		]
	}
};

function assign(o1, o2) {
	if (o1 == null || o2 == null)
		return o1;

	for (var key in o2)
		if (o2.hasOwnProperty(key))
			o1[key] = o2[key];

	return o1;
}

function abasla(hierarchy, tree) {
	var flat = [];
	function walk(nodes, depth, ancestors) {
		var key = hierarchy[depth];
		// build ancestors
		if (depth < hierarchy.length - 1) {
			Object.keys(nodes).forEach(function(ancestor) {
				ancestors[key] = ancestor;
				walk(nodes[ancestor], depth + 1, ancestors);
			});
		// leaf
		} else {
			nodes.forEach(function(leaf) {
				var obj = {};
				obj[key] = leaf;
				obj = assign(obj, ancestors);
				flat.push(obj);
			});
		}
	}
	walk(tree, 0, {});
	return flat;
}

console.log(abasla(hierarchy, cities));
