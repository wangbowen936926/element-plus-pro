;( () => {
	
	//定义组件
	const polyHeader = Vue.component("polytop",{
		name: "polytop",
		template: `
		           <div class="polytop">
		                <div class="jumei-location" v-bind:style="styleobj">
		                    <img src="assert/guide_logo.png"/>
		                    <span class="jumei-location-text"><p> {{ JumeiLocationText }} </p><p> {{ JumeiLocationTexts }} </p></span>
		                    <a href="#"> {{ ButtonText }} </a>
		                    <span @click="handleDelete"><img src="assert/close2.png" /><span>
		                </div>
		                <div class="touch-header">
		                    <a href="#"><img src="assert/left_arrow.png"/></a>
		                    <div class="touch-header-text"> {{ NavTextTwo }} </div>
		                    <a href="#"><img src="assert/home.png"/></a>
		                </div>
		                <div class="header">
		                    <a class="sousuo" href="#"><span><img src="assert/search.png"/></span> {{ HeaderText }} </a>
		                    <a class="img-button"><img src="assert/search_list2.png"/></a>
		                </div>
		                <div class="swiper-container">
		                    <div class="swiper-wrapper">
		                        <span class="swiper-slide"><a href="#"> {{ NavTextOne }} </a></span>
		                        <span class="swiper-slide"><a href="#"> {{ NavTextTwo }} </a></span>
		                        <span class="swiper-slide"><a href="#"> {{ NavTextThree }} </a></span>
		                        <span class="swiper-slide"><a href="#"> {{ NavTextFour }} </a></span>
		                        <span class="swiper-slide"><a href="#"> {{ NavTextFive }} </a></span>
		                    </div>
		                </div>
		           </div>
		          `,
		data () {
			return{
				JumeiLocationText: "聚美优品 我为自己代言",
				JumeiLocationTexts: "注册就送160元礼包",
				ButtonText: "前往聚美",
				HeaderText: "搜索商品 分类 功效",
				NavTextOne: "首页",
				NavTextTwo: "极速免税店",
				NavTextThree: "母婴",
				NavTextFour: "轻奢",
				NavTextFive: "名品特卖",
				styleobj: {
					display: "",
				}
			}
		},
		methods:{
			handleDelete () {
				this.styleobj.display = "none"
			}
		}
	});
	
	//定义组件
	const polyCleaNav = Vue.component("clearnav",{
		name: "clearnav",
		template: `
		            <ul class="clear">
		                 <li v-for="(value,index) in imgList">
		                     <a v-bind:href="value.url"> <img v-bind:src="value.imgSrc"/> <div> {{ value.imgText }} </div> </a>
		                 </li>
		            </ul>
		          `,
		data () {
			return{
				imgList: [
				            {
				          	     imgSrc: "assert/interantion_shipping.png",
				                 imgText: "海外直供",
				                 url: "html/clear_subpage1.html",
				            },
				            {
				                 imgSrc: "assert/genuine_guarantee.png",
				                 imgText: "原装正品",
				                 url: "html/clear_subpage2.html",
				            },
				            {
				                 imgSrc: "assert/global_delivery.png",
				                 imgText: "极速到货",
				                 url: "html/clear_subpage3.html",
				            },
				            {
				                 imgSrc: "assert/return_guarantee_7.png",
				                 imgText: "轻松退货",
				                 url: "html/clear_subpage4.html",
				            },
				],
				
			}
		},

	});
	
	const ployProuct = Vue.component("product",{
		name: "product",
		template: `
		            <ul class="deals-content">
		                 <li class="title"> <img src="assert/icon_title.png"> {{ title }} </li>
		                 <li class="product" v-for="(value,index) in productList">
		                     <a href="#">
		                         <div class="product-img"><img src="assert/029.jpg"><img v-bind:src="value.imgSrc"></div>
		                         <div class="product-text">
		                             <div class="product-present"> {{ value.productText }} </div>
		                             <div class="product-price">
		                                 <span>
		                                     <b> {{ value.productPriceSign }}</b><b>{{ value.productPrice }} </b>
		                                 <span>
		                                 <del> {{ value.productPriceSign }}{{ value.productDel }} </del>
		                             </div>
		                         </div>
		                     </a>
		                 </li>
		            </ul>
		           
		          `,
		data () {
			return{
				title: "今日团购，每天10点上新",
				productList: [
				                 {
				                	imgSrc: "assert/1242698_1000_1000.jpg",
				                	productText: "【官方授权】SNP海洋燕窝补水安瓶精华面膜10片,修护干瘪细胞！",
				                	productPriceSign: "￥",
				                	productPrice: 69,
				                	productDel: 180,
				                 },
				                 {
				                	imgSrc: "assert/1293262_1000_1000.jpg",
				                	productText: "【官方授权】美迪惠尔MEDIHEAL水库面膜10片，敷出水嫩肌!",
				                	productPriceSign: "￥",
				                	productPrice: 69,
				                	productDel: 174,
				                 },
				                 {
				                	imgSrc: "assert/4155536_1000_1000.jpg",
				                	productText: "【官方授权】美迪惠尔营养修护面膜24ml*10片，保湿修护肌肤",
				                	productPriceSign: "￥",
				                	productPrice: 59,
				                	productDel: 120,
				                 },
				                 {
				                	imgSrc: "assert/1316674_1000_1000.jpg",
				                	productText: "雅诗兰黛 特润修护肌透精华露(第六代小棕瓶)50ml",
				                	productPriceSign: "￥",
				                	productPrice: 639,
				                	productDel: 850,
				                 },
				                 {
				                	imgSrc: "assert/4432054_1000_1000.jpg",
				                	productText: "JMsolution蜂胶蜂蜜面膜润光欧若拉面膜套组3+1",
				                	productPriceSign: "￥",
				                	productPrice: 207,
				                	productDel: 480,
				                 },
				                 {
				                	imgSrc: "assert/4164422_1000_1000.jpg",
				                	productText: "su:m37呼吸亮白水乳两件套套盒，弹力修护，紧实透亮",
				                	productPriceSign: "￥",
				                	productPrice: 485,
				                	productDel: 712,
				                 },
				                 {
				                	imgSrc: "assert/2197959_1000_1000.jpg",
				                	productText: "su:m37时光能量水乳面霜三件套套盒",
				                	productPriceSign: "￥",
				                	productPrice: 589,
				                	productDel: 647,
				                 },
				                 {
				                	imgSrc: "assert/4221612_1000_1000.jpg",
				                	productText: "JM海洋珍珠深层保湿护理套装130ml*2+20ml*2",
				                	productPriceSign: "￥",
				                	productPrice: 198,
				                	productDel: 456,
				                 },
				                 {
				                	imgSrc: "assert/3881778_1000_1000.jpg",
				                	productText: "【官方授权】A by BOM 夜间修复面膜5片，敷出亮泽美肌。",
				                	productPriceSign: "￥",
				                	productPrice: 69,
				                	productDel: 135,
				                 },
				                 {
				                	imgSrc: "assert/4376762_1000_1000.jpg",
				                	productText: "【磁石吸走皮脂污垢】Ambuja火山泥磁石面膜 200g",
				                	productPriceSign: "￥",
				                	productPrice: 149,
				                	productDel: 188,
				                 },
				                 {
				                	imgSrc: "assert/4155494_1000_1000.jpg",
				                	productText: "【官方授权】papa recipe春雨小蜜罐限量版面膜25g*7片",
				                	productPriceSign: "￥",
				                	productPrice: 59.9,
				                	productDel: 120,
				                 },
				                 {
				                	imgSrc: "assert/1299685_1000_1000.jpg",
				                	productText: "自然乐园补水芦荟胶300ml，水润嫩肌秒拥有！",
				                	productPriceSign: "￥",
				                	productPrice: 28,
				                	productDel: 44,
				                 },
				                 
				                 {
				                	imgSrc: "assert/4377666_1000_1000.jpg",
				                	productText: "VICHY赋能89号微精华露50ml，新晋精华网红",
				                	productPriceSign: "￥",
				                	productPrice: 169,
				                	productDel: 179,
				                 },
				                 {
				                	imgSrc: "assert/4162808_1000_1000.jpg",
				                	productText: "【韩国版兰芝】兰芝水衡清盈水乳礼盒,肌肤水嫩透润",
				                	productPriceSign: "￥",
				                	productPrice: 289,
				                	productDel: 354,
				                 },
				                 {
				                	imgSrc: "assert/4164024_1000_1000.jpg",
				                	productText: "【韩国版兰芝】兰芝雪纱防晒隔离霜30ml",
				                	productPriceSign: "￥",
				                	productPrice: 158,
				                	productDel: 204,
				                 },
				                 {
				                	imgSrc: "assert/4357626_1000_1000.jpg",
				                	productText: "【官方授权】【大碗湿敷不心疼】ATREUS VC爽肤水500ml",
				                	productPriceSign: "￥",
				                	productPrice: 39.9,
				                	productDel: 59,
				                 },
				                 {
				                	imgSrc: "assert/4399884_1000_1000.jpg",
				                	productText: "PDC 酒粕面膜 170g，皮肤的老化角质都可以去光光！",
				                	productPriceSign: "￥",
				                	productPrice: 149,
				                	productDel: 198,
				                 },
				                 {
				                	imgSrc: "assert/810215_1000_1000.jpg",
				                	productText: "倩碧卓越润肤乳125ML(有油)，复制水油平衡状态。",
				                	productPriceSign: "￥",
				                	productPrice: 188,
				                	productDel: 195,
				                 },
				],
			}
		}
		
	});
	
	const footer = Vue.component("polyfooter",{
		name: "polyfooter",
		template: `
		           <footer class="polyfooter">
		                 <div class="polyfooter-content">
		                     <div class="polyfooter-bg"><img src="assert/footer_bg.jpg"/></div>
		                     <div class="polyfooter-button">
		                         <a href="#"> {{ buttonText }} </a>
		                         <a href="#"> {{ buttonTexts }} </a>
		                     </div>
		                     <div class="polyfooter-text"> {{ bottomText }} </div>
		                 </div>
		           </footer>
		          `,
		data () {
			return{
				buttonText: "触屏版",
				buttonTexts: "电脑版",
				bottomText: "©2016 聚美优品 Jumei.com",
			}
		}
	});
	
	const footerNav = Vue.component("bottom-nav", {
		name: "bottom-nav",
		template: `
		           <div class="bottom-nav">
		               <a class="bg1" href="#"> {{ HomeIconText }} </a>
		               <a class="bg2" href="#"> {{ ClusterIconText }} </a>
		               <a class="bg3" href="#"> {{ ShoppingIconText }} </a>
		               <a class="bg4" href="#"> {{ MyIconText }} </a>
		           </div>
		
		`,
		data () {
			return{
				HomeIconText: "首页",
				ClusterIconText: "拼团",
				ShoppingIconText: "购物车",
				MyIconText: "我的",
			}
		}
	});
	
	let vm = new Vue({
		el: "#warp",
		data () {
			return{
				
			}
		}
	});
	
	let swiper = new Swiper('.swiper-container', {
	    spaceBetween: true,
	    centeredSlides: true,
	    //水平切换选项
		dierction: 'horizontal',
	});
	
})();
