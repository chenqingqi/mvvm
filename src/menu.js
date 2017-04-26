/**
 * 菜单模块
 */
app.menu = new Vue({
	
	el: '.menu',
	
	data: 
    {
        items: ['首页','频道','关于']
    },
    
    methods: 
    {
        rander:function(e) 
        {
        	$('.menu li').css({
        		
        		listStyle:'none',
        		display:'block',
        		float:'left',
        		padding:'20px'
        	
        	})
        	
            console.log('渲染样式完成');
        }
    }
})
