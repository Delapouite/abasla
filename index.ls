citiesHierarchy = ['continent' 'country' 'city']
cities = {
	'Africa': {
		'Egypt': [
			'Cairo'
			'Alexandria'
		],
		'Morocco': [
			'Rabbat'
			'Casablanca'
		]
	}
	'America': {
		'Canada': [
			'Montreal'
			'Toronto'
		]
		'Chile': [
			'Santiago'
		]
		'Colombia': [
			'Bogota'
			'Cali'
		]
	}
	'Europe': {
		'England': [
			'Liverpool'
			'London'
			'Manchester'
		]
	}
}

foods = {
	'red': [
		{
			name: 'strawberry'
			type: 'fruit'
		}
		{
			name: 'tomato'
			type: 'fruit'
		}
	]
	'green': [
		{
			name: 'pie'
			type: 'veggie'
		}
		{
			name: 'bean'
			type: 'veggie'
		}
	]
}

abasla = (hierarchy, tree, opts = {}) ->
	# result
	flat = []

	tip = hierarchy.length - 1
	tip++ if opts.mergeLeaf

	walk = (nodes, depth = 0, ancestors = {}) !->
		key = hierarchy[depth]
		# build ancestors
		if depth < tip
			for own ancestor, children of nodes
				ancestors[key] = ancestor
				walk children, depth + 1, ancestors
		# leaf
		else
			for leaf in nodes
				obj = if opts.mergeLeaf then leaf else {"#key": leaf}
				flat.push obj <<< ancestors

	walk tree
	flat

console.log 'Cities'
console.log abasla citiesHierarchy, cities
console.log 'Foods'
console.log abasla ['color' 'food'], foods
console.log 'Merged foods'
console.log abasla ['color'], foods, mergeLeaf: true
