// main.js - entry point
var g_canvas = null;
var g_ctx = null;
var g_actors = [];

var main={
    
    init: function()
    {
        g_canvas = document.getElementById('my-game');
        g_ctx = g_canvas.getContext('2d');
    
        g_canvas.width = window.innerWidth;
        g_canvas.height = window.innerHeight;

        g_ctx.clearRect(0, 0, g_canvas.width, g_canvas.height);

        g_actors=[];
    },
    
    action: function(time=0)
    {
        g_ctx.clearRect(0, 0, g_canvas.width, g_canvas.height);
        
        g_actors.forEach(actor => actor.action());
        g_actors.forEach(actor => actor.draw());
        
     //   window.requestAnimationFrame(render);
    },

    dump: function()
    {
        return  JSON.stringify(g_actors,null,0);
    }
}

window.onload = function() 
{
    main.init();
    unit.action();
}
