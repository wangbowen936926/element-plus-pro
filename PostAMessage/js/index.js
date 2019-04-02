;(function (){
	
	var vm = new Vue({
		    el: "#showMsg",
		    data: {
		    	list: [
		    	     { imgSrc: "img/1a.jpg", content: "今天是周一，但是我很瞌睡", dates: "2019-4-2", deleteButton: "删除"},
		    	     { imgSrc: "img/2a.jpg", content: "今天是周二，但是我很瞌睡", dates: "2019-4-2", deleteButton: "删除"},
		    	],
		    	imgArrSrs: [
		    	      "img/1a.jpg","img/2a.jpg","img/3a.jpg","img/4a.jpg","img/5a.jpg"
		    	],
		    	publishText: "发表留言",
		    	confirmBtnText: "确认发布",
			    flag: false,
			    testareaValue: ''
		    },
		    methods: {
			     publish: function(){
				     this.flag = true
			     },
			     confirmBtn: function(){
			     	 this.flag = false;
			     	 this.list.push({
			     	 	imgSrc: this.imgRandom(),
			     	 	content: this.testareaValue,
			     	 	dates: this.getDate(),
			     	 	deleteButton: "删除"
			     	 });
			     	 this.testareaValue = " "
			     },
			     closeBtn: function(){
			     	this.flag = false
			     },
			     //随机图片
			     imgRandom: function(){
			     	return this.imgArrSrs[Math.floor(Math.random()*5)]
			     },
			     //获取日期
			     getDate: function(){
			     	var dates = new Date();
			     	var year = dates.getFullYear();
			     	var month = dates.getMonth() + 1;
			     	var day = dates.getDay();
			     	var hour = dates.getHours();
			     	var minutes = dates.getMinutes();
			     	return year + "-" + month + "-" + day + " " + hour + ":" + minutes;
			     },
			     //删除
			     handleDelete: function(index){
			     	this.list.splice(index, 1);
			     }
			     
		    }
    });
    
})();
