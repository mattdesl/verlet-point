module.exports = function(vec) {
    function Point(opt) {
        this.position = vec.create()
        this.previous = vec.create()
        this.acceleration = vec.create()
        this.mass = 1.0
        this.radius = 0

        if (opt && typeof opt.mass === 'number')
            this.mass = opt.mass
        if (opt && typeof opt.radius === 'number')
            this.radius = opt.radius

        if (opt && opt.position) 
            vec.copy(this.position, opt.position)
        
        if (opt && (opt.previous||opt.position)) 
            vec.copy(this.previous, opt.previous || opt.position)
        
        if (opt && opt.acceleration)
            vec.copy(this.acceleration, opt.acceleration)
    }

    Point.prototype.addForce = function(v) {
        vec.sub(this.previous, this.previous, v)
    }

    Point.prototype.place = function(v) {
        vec.copy(this.position, v)
        vec.copy(this.previous, v)
    }

    return function(opt) {
        return new Point(opt)
    }
}