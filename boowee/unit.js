// unit.js - unit tester

var unit={
    animated: false,
    num_iterations: 100,

    cur_index: 0,
    cur_name: undefined,
    cur_test: undefined,
    cur_check: undefined,

    index: undefined,
    ani_times: undefined,
    ani_func: undefined,

    execute_via_animation_frame_callback: function()
    {
        if (unit.ani_times>0)
        {
            unit.ani_func();
            unit.ani_times--;
            if (this.animated)
                window.requestAnimationFrame(unit.execute_via_animation_frame_callback);
            else
                unit.execute_via_animation_frame_callback();
        } else
        {
            unit.ani_times=-1;
            unit.ani_func=undefined;
            unit.action();
        }    
    },

    execute_via_animation_frame: function(func)
    {
        unit.ani_times=this.num_iterations;
        unit.ani_func=func;
        unit.execute_via_animation_frame_callback();
    },

    check: function()
    {
        if (this.cur_check()!=main.dump())
        {
            console.error(cur_name+": Error, main.dump() is");
            console.log(main.dump());
            console.log("While reference is");
            console.log(this.cur_check());
        }
        else
            console.log(cur_name+": Success!");
    },

    action: function(index) {

        if (this.index==undefined)
        {
            this.index=0;
        } else
        {
            console.timeEnd(cur_name)
            unit.check();
            this.index+=2;
        }

        list=Object.keys(this).splice(Object.keys(this).indexOf("action")+1);
        cur_name=list[this.index];
        if (cur_name===undefined)
            return;

        this.cur_test=this[cur_name];
        console.log("%c"+cur_name,';font-weight:bold;');
        console.log(cur_name+": Running...");
        this.cur_check=this[cur_name+"_check"];
        main.init();
        console.time(cur_name)
        this.cur_test();    

        this.execute_via_animation_frame(main.action);
    },

//////////////////////////////////////// UNIT TESTS ////////////////////////////////////////

movement1: function() {
    // player 1
    {
        let l_player=Object.create(t_player);
        let l_movement=Object.create(t_movement_linear);
        l_player.set_movement(l_movement);
        l_movement.set_dx_dy_dangle(7,2,-1);
        g_actors.push(l_player);
    }

    // player 2
    {
        let l_player=Object.create(t_player);
        let l_movement=Object.create(t_movement_linear);
        l_player.set_movement(l_movement);
        l_player.set_x_y_angle(200,200,0);
        l_movement.set_dx_dy_dangle(5,1,1);
        g_actors.push(l_player);
    }
},

movement1_check: function() {
    return '[{"movement":{"dx":7,"dy":2,"dangle":-1},"x":700,"y":200,"angle":-100},{"movement":{"dx":5,"dy":1,"dangle":1},"x":700,"y":300,"angle":100}]';
},

movement2: function() {
        // player 1
    {
        let l_player=Object.create(t_player);
        let l_movement=Object.create(t_movement_linear);
        l_player.set_movement(l_movement);
        l_player.set_x_y_angle(100,300,0);
        l_movement.set_dx_dy_dangle(-1,-1,-5);
        g_actors.push(l_player);
    }

    // player 2
    {
        let l_player=Object.create(t_player);
        let l_movement=Object.create(t_movement_linear);
        l_player.set_movement(l_movement);
        l_player.set_x_y_angle(200,200,0);
        l_movement.set_dx_dy_dangle(2,5,20);
        g_actors.push(l_player);
    }
},

movement2_check: function() {
    return '[{"movement":{"dx":-1,"dy":-1,"dangle":-5},"x":0,"y":200,"angle":-140},{"movement":{"dx":2,"dy":5,"dangle":20},"x":400,"y":700,"angle":200}]';
},
movement_many: function() {

    for (x=0; x<10; x++)
    for (y=0; y<10; y++)
    {
        let l_player=Object.create(t_player);
        let l_movement=Object.create(t_movement_linear);
        l_player.set_movement(l_movement);
        l_player.set_x_y_angle((x+1)*100,(y+1)*100,0);
        l_movement.set_dx_dy_dangle(0,0,x*y/50);
        g_actors.push(l_player);
    }
},

movement_many_check: function() {
    return '[{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":200,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":300,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":400,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":500,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":600,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":700,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":800,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":900,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":100,"y":1000,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0},"x":200,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.02},"x":200,"y":200,"angle":2.0000000000000013},{"movement":{"dx":0,"dy":0,"dangle":0.04},"x":200,"y":300,"angle":4.000000000000003},{"movement":{"dx":0,"dy":0,"dangle":0.06},"x":200,"y":400,"angle":5.99999999999999},{"movement":{"dx":0,"dy":0,"dangle":0.08},"x":200,"y":500,"angle":8.000000000000005},{"movement":{"dx":0,"dy":0,"dangle":0.1},"x":200,"y":600,"angle":9.99999999999998},{"movement":{"dx":0,"dy":0,"dangle":0.12},"x":200,"y":700,"angle":11.99999999999998},{"movement":{"dx":0,"dy":0,"dangle":0.14},"x":200,"y":800,"angle":14.000000000000018},{"movement":{"dx":0,"dy":0,"dangle":0.16},"x":200,"y":900,"angle":16.00000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.18},"x":200,"y":1000,"angle":17.999999999999982},{"movement":{"dx":0,"dy":0,"dangle":0},"x":300,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.04},"x":300,"y":200,"angle":4.000000000000003},{"movement":{"dx":0,"dy":0,"dangle":0.08},"x":300,"y":300,"angle":8.000000000000005},{"movement":{"dx":0,"dy":0,"dangle":0.12},"x":300,"y":400,"angle":11.99999999999998},{"movement":{"dx":0,"dy":0,"dangle":0.16},"x":300,"y":500,"angle":16.00000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.2},"x":300,"y":600,"angle":19.99999999999996},{"movement":{"dx":0,"dy":0,"dangle":0.24},"x":300,"y":700,"angle":23.99999999999996},{"movement":{"dx":0,"dy":0,"dangle":0.28},"x":300,"y":800,"angle":28.000000000000036},{"movement":{"dx":0,"dy":0,"dangle":0.32},"x":300,"y":900,"angle":32.00000000000002},{"movement":{"dx":0,"dy":0,"dangle":0.36},"x":300,"y":1000,"angle":35.999999999999964},{"movement":{"dx":0,"dy":0,"dangle":0},"x":400,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.06},"x":400,"y":200,"angle":5.99999999999999},{"movement":{"dx":0,"dy":0,"dangle":0.12},"x":400,"y":300,"angle":11.99999999999998},{"movement":{"dx":0,"dy":0,"dangle":0.18},"x":400,"y":400,"angle":17.999999999999982},{"movement":{"dx":0,"dy":0,"dangle":0.24},"x":400,"y":500,"angle":23.99999999999996},{"movement":{"dx":0,"dy":0,"dangle":0.3},"x":400,"y":600,"angle":30.00000000000005},{"movement":{"dx":0,"dy":0,"dangle":0.36},"x":400,"y":700,"angle":35.999999999999964},{"movement":{"dx":0,"dy":0,"dangle":0.42},"x":400,"y":800,"angle":42.0000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.48},"x":400,"y":900,"angle":47.99999999999992},{"movement":{"dx":0,"dy":0,"dangle":0.54},"x":400,"y":1000,"angle":53.99999999999993},{"movement":{"dx":0,"dy":0,"dangle":0},"x":500,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.08},"x":500,"y":200,"angle":8.000000000000005},{"movement":{"dx":0,"dy":0,"dangle":0.16},"x":500,"y":300,"angle":16.00000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.24},"x":500,"y":400,"angle":23.99999999999996},{"movement":{"dx":0,"dy":0,"dangle":0.32},"x":500,"y":500,"angle":32.00000000000002},{"movement":{"dx":0,"dy":0,"dangle":0.4},"x":500,"y":600,"angle":39.99999999999992},{"movement":{"dx":0,"dy":0,"dangle":0.48},"x":500,"y":700,"angle":47.99999999999992},{"movement":{"dx":0,"dy":0,"dangle":0.56},"x":500,"y":800,"angle":56.00000000000007},{"movement":{"dx":0,"dy":0,"dangle":0.64},"x":500,"y":900,"angle":64.00000000000004},{"movement":{"dx":0,"dy":0,"dangle":0.72},"x":500,"y":1000,"angle":71.99999999999993},{"movement":{"dx":0,"dy":0,"dangle":0},"x":600,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.1},"x":600,"y":200,"angle":9.99999999999998},{"movement":{"dx":0,"dy":0,"dangle":0.2},"x":600,"y":300,"angle":19.99999999999996},{"movement":{"dx":0,"dy":0,"dangle":0.3},"x":600,"y":400,"angle":30.00000000000005},{"movement":{"dx":0,"dy":0,"dangle":0.4},"x":600,"y":500,"angle":39.99999999999992},{"movement":{"dx":0,"dy":0,"dangle":0.5},"x":600,"y":600,"angle":50},{"movement":{"dx":0,"dy":0,"dangle":0.6},"x":600,"y":700,"angle":60.0000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.7},"x":600,"y":800,"angle":70.00000000000013},{"movement":{"dx":0,"dy":0,"dangle":0.8},"x":600,"y":900,"angle":79.99999999999984},{"movement":{"dx":0,"dy":0,"dangle":0.9},"x":600,"y":1000,"angle":90.00000000000009},{"movement":{"dx":0,"dy":0,"dangle":0},"x":700,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.12},"x":700,"y":200,"angle":11.99999999999998},{"movement":{"dx":0,"dy":0,"dangle":0.24},"x":700,"y":300,"angle":23.99999999999996},{"movement":{"dx":0,"dy":0,"dangle":0.36},"x":700,"y":400,"angle":35.999999999999964},{"movement":{"dx":0,"dy":0,"dangle":0.48},"x":700,"y":500,"angle":47.99999999999992},{"movement":{"dx":0,"dy":0,"dangle":0.6},"x":700,"y":600,"angle":60.0000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.72},"x":700,"y":700,"angle":71.99999999999993},{"movement":{"dx":0,"dy":0,"dangle":0.84},"x":700,"y":800,"angle":84.0000000000002},{"movement":{"dx":0,"dy":0,"dangle":0.96},"x":700,"y":900,"angle":95.99999999999984},{"movement":{"dx":0,"dy":0,"dangle":1.08},"x":700,"y":1000,"angle":107.99999999999986},{"movement":{"dx":0,"dy":0,"dangle":0},"x":800,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.14},"x":800,"y":200,"angle":14.000000000000018},{"movement":{"dx":0,"dy":0,"dangle":0.28},"x":800,"y":300,"angle":28.000000000000036},{"movement":{"dx":0,"dy":0,"dangle":0.42},"x":800,"y":400,"angle":42.0000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.56},"x":800,"y":500,"angle":56.00000000000007},{"movement":{"dx":0,"dy":0,"dangle":0.7},"x":800,"y":600,"angle":70.00000000000013},{"movement":{"dx":0,"dy":0,"dangle":0.84},"x":800,"y":700,"angle":84.0000000000002},{"movement":{"dx":0,"dy":0,"dangle":0.98},"x":800,"y":800,"angle":98.00000000000004},{"movement":{"dx":0,"dy":0,"dangle":1.12},"x":800,"y":900,"angle":112.00000000000014},{"movement":{"dx":0,"dy":0,"dangle":1.26},"x":800,"y":1000,"angle":126.00000000000023},{"movement":{"dx":0,"dy":0,"dangle":0},"x":900,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.16},"x":900,"y":200,"angle":16.00000000000001},{"movement":{"dx":0,"dy":0,"dangle":0.32},"x":900,"y":300,"angle":32.00000000000002},{"movement":{"dx":0,"dy":0,"dangle":0.48},"x":900,"y":400,"angle":47.99999999999992},{"movement":{"dx":0,"dy":0,"dangle":0.64},"x":900,"y":500,"angle":64.00000000000004},{"movement":{"dx":0,"dy":0,"dangle":0.8},"x":900,"y":600,"angle":79.99999999999984},{"movement":{"dx":0,"dy":0,"dangle":0.96},"x":900,"y":700,"angle":95.99999999999984},{"movement":{"dx":0,"dy":0,"dangle":1.12},"x":900,"y":800,"angle":112.00000000000014},{"movement":{"dx":0,"dy":0,"dangle":1.28},"x":900,"y":900,"angle":128.00000000000009},{"movement":{"dx":0,"dy":0,"dangle":1.44},"x":900,"y":1000,"angle":143.99999999999986},{"movement":{"dx":0,"dy":0,"dangle":0},"x":1000,"y":100,"angle":0},{"movement":{"dx":0,"dy":0,"dangle":0.18},"x":1000,"y":200,"angle":17.999999999999982},{"movement":{"dx":0,"dy":0,"dangle":0.36},"x":1000,"y":300,"angle":35.999999999999964},{"movement":{"dx":0,"dy":0,"dangle":0.54},"x":1000,"y":400,"angle":53.99999999999993},{"movement":{"dx":0,"dy":0,"dangle":0.72},"x":1000,"y":500,"angle":71.99999999999993},{"movement":{"dx":0,"dy":0,"dangle":0.9},"x":1000,"y":600,"angle":90.00000000000009},{"movement":{"dx":0,"dy":0,"dangle":1.08},"x":1000,"y":700,"angle":107.99999999999986},{"movement":{"dx":0,"dy":0,"dangle":1.26},"x":1000,"y":800,"angle":126.00000000000023},{"movement":{"dx":0,"dy":0,"dangle":1.44},"x":1000,"y":900,"angle":143.99999999999986},{"movement":{"dx":0,"dy":0,"dangle":1.62},"x":1000,"y":1000,"angle":162.00000000000023}]';
}

}

