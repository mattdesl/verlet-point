# verlet-point

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

This is a point utility for [verlet physics](https://github.com/mattdesl/verlet-system) systems in 2D/3D. 

```js
var Point = require('verlet-point')

var p = Point({
    position: [25, 25]
})

p.addForce([15, 15])
```

Whereas with bare objects, it might look like this:

```js
var p = {
    position: [25, 25],
    previous: [25, 25],
    acceleration: [0, 0],
    mass: 1
}

//add force by modifying previous position
p.previous[0] -= 15
p.previous[1] -= 15
```

Some other utility functions might be added to the Point prototype at a later time. PRs welcome. 

By default, assumes 2D and points with `[x, y]`. You can require an explicit dimension like so: 

```js
var Point2D = require('verlet-point/2d') //points [x, y]
var Point3D = require('verlet-point/3d') //points [x, y, z]
```

## Usage

[![NPM](https://nodei.co/npm/verlet-point.png)](https://nodei.co/npm/verlet-point/)

#### `p = Point([opt])`

Creates a new point with an optional `position` and other parameters. If `position` is specified and `previous` is not, then both will be set to the `position` value. This allows you to easily place points without any initial forces. Options:

- `position` the position vector, defaults to zero. 
- `previous` the previous vector, useful for creating forces. If not specified, this will default to `position` value.
- `mass` the mass of this point, defaults to 1.0. A mass of zero is considered "unmovable"
- `acceleration` the acceleration vector of the point, defaults to zero

#### `p.place(pos)`

This is a utility to "place" the point in space without creating any forces. This sets `position` and `previous` to the given `pos`. 

#### `p.addForce(force)`

Adds a force to the point by subtracting `force` from `previous`.

#### `p.position`
#### `p.previous`
#### `p.acceleration`
#### `p.mass`

Public members for this point. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/verlet-point/blob/master/LICENSE.md) for details.
