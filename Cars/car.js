AFRAME.registerComponent("car", {
    schema: {
        speed: {type: 'number', default: 1}
    },
    init: function() {
        this.rotate = () => {
            var rotation = this.el.getAttribute("rotation");
            rotation.y += this.data.speed;
            this.el.setAttribute("rotation", rotation);
        }
    },
    tick: function() {
        this.rotation;
    } 

})