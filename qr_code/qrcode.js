//解析json传回来的数据
function analysis(data){    
    var end_obj1 = []; 
    var end_obj2 = []; 
    var end_obj3 = []; 
    var end_obj4 = [];
    var end_obj5 = [];
    var end_obj6 = [];
    var end_obj = []; 
    var cl = data.compute.length;
    var stl = data.storage.length;
    var swl =  data.switchs.length;
    var data_length=data.database.length;
    var cpzl_length=data.cpzl.length;
    var out_fhq=data.outfhq.length;

    //compute节点
    for(var i = 0; i < data.compute.length; i++){
        var obj1 = {name:'',obj_id:'',x:0,y:0,symbol:'',status:'',symbolSize: [50,50]};//compute
        obj1.name = data.compute[i].name;
        obj1.obj_id = data.compute[i].id;
        obj1.value = data.compute[i].type;
        obj1.msg=data.compute[i].msg;
        if(data.storage.length == 0){
             obj1.x = 50*(i+1);
        }else{
            // obj1.x = 133*(i+1);
            if(cl == 1){
                obj1.x = 1200/2-(113/2);
            }else{
                obj1.x = 1200/(cl+1)*(i+1)-(20/2);

            }
            
        }
        obj1.status = data.compute[i].status;
        if(obj1.status == 1){
             obj1.symbol = 'image://../images/image_fhq_1.png';
        }
       else if (obj1.status == 0) {
            obj1.symbol = 'image://../images/image_fhq_2.png';
        }
        end_obj1.push(obj1);    
    };
    var compute_last_x = 0;
    if(data.compute.length > 0){    
     compute_last_x = end_obj1[end_obj1.length-1].x;
    }else{
       compute_last_x = 0; 
    }
    //      //mix节点
    //   for(var m = 0; m < data.mix.length; m++){
    //     var obj4 = {name:'',obj_id:'',x:0,y:100,symbol:'',status:'',symbolSize: [113,38]};//compute
    //     obj4.name = data.mix[m].name;
    //     obj4.obj_id = data.mix[m].id;
    //     obj4.value = data.mix[m].type;
    //      if(data.storage.length == 0){
    //          obj4.x = 50*(m+1);
    //     }else{
    //          if(cl+ml == 1){
    //             obj4.x = 1200/2-(113/2);
    //         }else{
    //             obj4.x = compute_last_x +1200/(cl+ml+1)*(m+1)-(113/2);

    //         }
    //         // obj4.x = compute_last_x +166*(m+1);
             
    //     }
       
    //     obj4.status = data.mix[m].status;
    //     if(obj4.status == 1){
    //          obj4.symbol = 'image:images/virtual.png';
    //     }
    //    else{
    //      obj4.symbol = 'image:images/node_red.png';
    //    }
    //     end_obj4.push(obj4);    
    // };

     var mix_compute = [];
    mix_compute.push(end_obj1);
     // mix_compute.push(end_obj1,end_obj4);
    var mix_compute_attr = [];
    for(var d = 0; d <mix_compute.length; d++){
        for(var f = 0; f<mix_compute[d].length; f++){
         mix_compute_attr.push(mix_compute[d][f]);
        }
    }


    //switch节点
 for(var k = 0; k <data.switchs.length; k++){
        var obj3 = {name:'',x:0,y:120,symbol:'',symbolSize: [100,10]};
        obj3.name = data.switchs[k].name;

             // obj3.x = 166*(k+1);
             if(swl == 1){
                obj3.x = 1200/2-(113/2);
            }else{
                obj3.x = 1200/(swl+1)*(k+1)-(20/2);

            }


        obj3.status=data.switchs[k].status;
         if(obj3.status==1){
             obj3.symbol = 'image://../images/bar01.png';
         }else if (obj3.status==0){
             obj3.symbol = 'image://../images/bar02.png';
         }
        end_obj3.push(obj3);
    };

    //负载均衡
    for(var k = 0; k <data.database.length; k++){
        var obj4 = {name:'',x:0,y:900,symbol:'',symbolSize: [50,50]};
        obj4.name = data.database[k].name;

            // obj3.x = 166*(k+1);
            if(data_length == 1){
                obj4.x = 1200/2-(113/2);
            }else{
                obj4.x = 1200/(data_length+1)*(k+1)-(20/2);

            }

        obj4.status=data.database[k].status;
        if(obj4.status==1){
            obj4.symbol = 'image://../images/img_junhen_1.png';
        }else if (obj4.status==0){
            obj4.symbol = 'image://../images/img_junhen_2.png';
        }

        end_obj4.push(obj4);
    };
    //storage节点
    for(var j = 0; j < data.storage.length; j++){
        var obj2 = {name:'',obj_id:'',x:0,y:200,symbol:'',status:'',symbolSize: [50,50]};//storage
        obj2.name = data.storage[j].name;
        obj2.obj_id = data.storage[j].id;
        obj2.value = data.storage[j].type;
        obj2.msg=data.storage[j].msg;
        // obj2.x = 150*(j+1);
        obj2.y=parseInt(j/9)*100+100+200;
        if(stl == 1){
            obj2.x = 1200/2-(113/2);
        }else{
            obj2.x = 1200/(9+1)*(j%9+1)-(60/2);

        }
        obj2.status=data.storage[j].status;
        obj2.kind = data.storage[j].kind;
        if(obj2.kind == 1){
            if(obj2.status == 1){
                obj2.symbol = 'image://../images/image001_1.png';
            }else if(obj2.status == 0){
                obj2.symbol = 'image://../images/image001_2.png';

            }

        }else if (obj2.kind == 3) {
            if(obj2.status == 1){
                obj2.symbol = 'image://../images/image003_1.png';
            }else if(obj2.status == 0){
                obj2.symbol = 'image://../images/image003_2.png';

            }
        }
        end_obj2.push(obj2);
    };
//磁盘阵列
  for(var j = 0; j < data.cpzl.length; j++){
        var obj5 = {name:'',obj_id:'',x:0,y:750,symbol:'',status:'',symbolSize: [100,10]};//storage
        obj5.name = data.cpzl[j].name;
        obj5.obj_id = data.cpzl[j].id;
        obj5.value = data.cpzl[j].type;
        // obj2.x = 150*(j+1);
        if(cpzl_length == 1){
            obj5.x = 1200/2-(113/2);
        }else{
            obj5.x = 1200/(cpzl_length+1)*(j+1)-(60/2);

        }

        obj5.status = data.cpzl[j].status;
        if(obj5.status == 1){
            obj5.symbol = 'image://../images/bar01.png';
        }
        else if (obj5.status == 0) {
            obj5.symbol = 'image://../images/bar02.png';
        }
        end_obj5.push(obj5);
    };
    //外部防火墙
    for(var j = 0; j < data.outfhq.length; j++){
        var obj6 = {name:'',obj_id:'',x:0,y:1050,symbol:'',status:'',symbolSize: [50,50]};//storage
        obj6.name = data.outfhq[j].name;
        obj6.obj_id = data.outfhq[j].id;
        obj6.value = data.outfhq[j].type;
        // obj2.x = 150*(j+1);
        if(out_fhq == 1){
            obj6.x = 1200/2-(113/2);
        }else{
            obj6.x = 1200/(out_fhq+1)*(j+1)-(60/2);

        }

        obj6.status = data.outfhq[j].status;
        if(obj6.status == 1){
            obj6.symbol = 'image://../images/image_fhq_1.png';
        }
        else if (obj6.status == 0) {
            obj6.symbol = 'image://../images/image_fhq_2.png';
        }
        end_obj6.push(obj6);
    };

    //在push上面几个数组的时候，要将data.storage的节点数组放在data.compute之前,为什么还是清楚
     end_obj.push(end_obj4,mix_compute_attr,end_obj3,end_obj2,end_obj5,end_obj6);
    var attr = [];
    for(var b = 0; b <end_obj.length; b++){
        for(var c = 0; c<end_obj[b].length; c++){
         attr.push(end_obj[b][c]);
        }
    }
    return attr;  
};

function analysis_link(data){
    var end_links = [];
    for(var a = 0; a< data.length; a++){
        var links = {flow:0,source:'',target:''};
        links.flow = data[a].flow;
        links.source = data[a].source;
        links.target = data[a].target;
        end_links.push(links);
    }
    return end_links;
}
$(document).ready(function () {

	
    //显示下方最大的echarts.
    var arch_show = function () {
        var arch_chart = echarts.init(document.getElementById('architecture_chart'));

       var option = {
            title: {
               // text: '体系结构图'
            },
            tooltip : {
                trigger: 'item',
                formatter:function(params){
                    if(params.data.flow != null){
                        return params.data.source + '到' + params.data.target;
                    }
                    else{
                        if(params.data.msg!=null && params.data.status===0){
                            return params.name+ " "+params.data.msg;
                        }

                        return params.name;
                    }
                }
            },
           legend: {
           },

            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    roam: false,
                    focusNodeAdjacency: true,


                    label: {
                        normal: {
                            show: true,
                            position: 'bottom',
                           // backgroundColor:'#f4f6fa',

                            textStyle:{
                                fontSize:15,
                                color:'#666666',
                                fontWeight:"bold",
                            }
                        },


                    },
                    edgeSymbol: ['arrow', 'arrow'],
                    edgeSymbolSize: [8, 8],
                    constantSpeed: 30,
                    lineStyle: {
                        normal: {
                           // opacity: 0.6,
                            //type: 'dashed',
                            width: 1.5,
                            curveness: 0.1,
                            color: '#77829c' ,
                        },
                        emphasis: {
                            color: '#ff4c61'
                        },
                    },


                    data:[],
                    links:[]
                }
            ]
        };


        // arch_chart.showLoading();
         $.ajax({
            type: "get",
            url: "qrcode.json",
            // async: false,
            success: function (response) {
                var myData = response;
                option.series[0].data =  analysis(myData);
                option.series[0].links = analysis_link(myData.links);
                arch_chart.setOption(option);

            },
            error:function(res){
            	alert("error!");
            }
        });


       

         //每隔一段时间执行一次Ajax请求..
        // setInterval(function () {
        //     arch_show();
        // }, 60000);


        $(window).resize(arch_chart.resize);
         //实现节点点击事件
        arch_chart.on('mouseover',  function (params) {

        });


    };
    arch_show();
});