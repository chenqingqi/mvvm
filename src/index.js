/**
 * 声明&引入
 */
window.app = {};

window.$   = require('../libs/jquery.js');

window.Vue = require('../libs/vue.min.js');

window.Router = require('../libs/vue-router.js');

/**
 * 入口模块
 */
app.index = {
	
	name:'index',
	
	init:function()
	{
		console.log(this.name+'初始化完成！')
	}
}


/**
 * 页面加载完成
 */
window.onload = function()
{
	app.index.init();
	
	require('./menu.js');
	
	app.menu.rander();
	
	require('./router.js');
}
