var t_player = {
    x:0,
    y:0,
    angle:0,
    
    movement:Object.create(t_movement),

    set_x_y_angle: function(x,y,a)
    {
        this.x=x;
        this.y=y;
        this.angle=a;
    },
    set_movement: function(p_movement)
    {
        this.movement=p_movement;
    },
    action: function()
    {
        this.movement.action(this);
    },
    draw: function() 
    {   
        g_ctx.save();

        g_ctx.translate(this.x,this.y);
        g_ctx.rotate(this.angle * Math.PI / 180);

        // Set line width
        
        // draw center
        g_ctx.lineWidth = 1;
        g_ctx.strokeStyle = 'blue';
        g_ctx.beginPath();
        g_ctx.moveTo(-10, 0);
        g_ctx.lineTo(10,0);
        g_ctx.moveTo(0, -10);
        g_ctx.lineTo(0,10);
        g_ctx.closePath();
        g_ctx.stroke();

        // draw triangle
        g_ctx.lineWidth = 1;
        g_ctx.strokeStyle = 'blue';
        g_ctx.beginPath();
        g_ctx.moveTo(-35, 35);
        g_ctx.lineTo(0,-50);
        g_ctx.lineTo(35,35);
        g_ctx.closePath();
        g_ctx.stroke();

        // draw circle
        g_ctx.strokeStyle = 'lightgray';
        g_ctx.lineWidth = 2;
        g_ctx.beginPath();
        g_ctx.arc(0, 0, 50, 0, 2 * Math.PI);
        g_ctx.closePath();
        g_ctx.stroke();

        g_ctx.restore();
    }
};
