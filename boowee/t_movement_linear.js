var t_movement_linear = {
    
    prototype: Object.create(t_movement),

    dx:0,
    dy:0,
    dangle:0,

    set_dx_dy_dangle: function(p_dx,p_dy,p_dangle)
    {
        this.dx=p_dx;
        this.dy=p_dy;
        this.dangle=p_dangle%360;
    },

    action: function(player)
    {
        player.x+=this.dx;
        player.y+=this.dy;
        player.angle=(player.angle + this.dangle)%360;
    }
}
