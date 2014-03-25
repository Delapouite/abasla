# ÀBasLa

A short tree mapper function that flattens a data tree according to a hierarchy description.

## Example

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
			'London',
			'Manchester',
			'Liverpool'
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
  { city: 'London', continent: 'Europe', country: 'England' },
  { city: 'Manchester', continent: 'Europe', country: 'England' },
  { city: 'Liverpool', continent: 'Europe', country: 'England' } ]
```

## Usage

```javascript
abasla(hierarchy, data);
```

## Licence

MIT
