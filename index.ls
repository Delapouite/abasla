hierarchy = ['continent' 'country' 'city']
cities = {
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
}

abasla = (hierarchy, tree) ->
	flat = []
	walk = (nodes, depth = 0, ancestors = {}) !->
		key = hierarchy[depth]
		# build ancestors
		if depth < hierarchy.length - 1
			for own ancestor, children of nodes
				ancestors[key] = ancestor
				walk children, depth + 1, ancestors
		# leaf
		else
			for leaf in nodes
				obj = {"#key": leaf}
				flat.push obj <<< ancestors

	walk tree
	flat

console.log abasla hierarchy, cities
