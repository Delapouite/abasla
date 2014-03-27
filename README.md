# ÀBasLa

A short tree mapper function that flattens a data tree according to a hierarchy description. May be used as a way to prepare data to reorganize it through [d3.nest](https://github.com/mbostock/d3/wiki/Arrays#-nest).

## Examples

### Input

```javascript
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
```

### Output

```javascript
[ { city: 'Cairo', continent: 'Africa', country: 'Egypt' },
  { city: 'Alexandria', continent: 'Africa', country: 'Egypt' },
  { city: 'Rabbat', continent: 'Africa', country: 'Morocco' },
  { city: 'Casablanca', continent: 'Africa', country: 'Morocco' },
  { city: 'Montreal', continent: 'America', country: 'Canada' },
  { city: 'Toronto', continent: 'America', country: 'Canada' },
  { city: 'Santiago', continent: 'America', country: 'Chile' },
  { city: 'Bogota', continent: 'America', country: 'Colombia' },
  { city: 'Cali', continent: 'America', country: 'Colombia' },
  { city: 'Liverpool', continent: 'Europe', country: 'England' },
  { city: 'London', continent: 'Europe', country: 'England' },
  { city: 'Manchester', continent: 'Europe', country: 'England' } ]
```

### Input

```javascript
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
```

### Default output

```javascript
abasla(['color', 'food'], foods);

[ { food: { name: 'strawberry', type: 'fruit' }, color: 'red' },
  { food: { name: 'tomato', type: 'fruit' }, color: 'red' },
  { food: { name: 'pie', type: 'veggie' }, color: 'green' },
  { food: { name: 'bean', type: 'veggie' }, color: 'green' } ]
```

### Merged Output

```javascript
abasla(['color'], foods, {mergeLeaf: true}));

[ { name: 'strawberry', type: 'fruit', color: 'red' },
  { name: 'tomato', type: 'fruit', color: 'red' },
  { name: 'pie', type: 'veggie', color: 'green' },
  { name: 'bean', type: 'veggie', color: 'green' } ]
```

## Usage

```javascript
abasla(hierarchy, data [, opts]);
```
### Optional options

*mergeLeaf*, see last example above.

## Licence

MIT
