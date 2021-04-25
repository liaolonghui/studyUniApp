<template>
	<view v-if="goodsDetail.goods_introduce">
		<swiper class="goods-swiper" :indicator-dots="true">
			<swiper-item v-for="pic in goodsDetail.pics" :key="pic.pics_id">
				<image :src="pic.pics_big_url" @click="previewGoodsImg(pic.pics_big_url)"></image>
			</swiper-item>
		</swiper>
		<view class="price">
			￥{{goodsDetail.goods_price}}
		</view>
		<view style="margin: 40rpx 20rpx;">
			{{goodsDetail.goods_name}}
		</view>
		<text v-html="goodsDetail.goods_introduce" style="margin-bottom: 100rpx;"></text>
		<!-- uni-goods-nav -->
		<uni-goods-nav class="uni-goods-nav" :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				goodsDetail: {},
				options: [
					{
						icon: 'headphones',
						text: '客服'
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						backgroundColor: '#ff0000',
						infoColor:"#fff"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 0
					},
				],
				buttonGroup: [{
				    text: '加入购物车',
				    backgroundColor: '#ff0000',
				    color: '#fff'
				},{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}]
			}
		},
		methods: {
			// 获取商品详情
			async getGoodsDetail (goodsId) {
				const goodsDetailData = await this.$request("/goods/detail", {goods_id: goodsId})
				this.goodsDetail = goodsDetailData.data.message
				uni.setNavigationBarTitle({
					title: this.goodsDetail.goods_name
				})
			},
			// 预览
			previewGoodsImg (current) {
				const urls = this.goodsDetail.pics.map(pic => pic.pics_big_url)
				uni.previewImage({
					current,
					urls,
					indicator: true,
					loop: true
				})
			},
			// uni-goods-nav的回调
			onClick (e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			 },
			 buttonClick (e) {
				console.log(e)
				this.options[2].info++
			 }
		},
		onLoad(options) {
			this.getGoodsDetail(options.goodsId)
		}
	}
</script>

<style lang="scss">
.goods-swiper {
	width: 750rpx;
	height: 450rpx;
	swiper-item {
		image {
			width: 100%;
		}
	}
}
.price {
	margin: 40rpx 20rpx;
	font-size: 40rpx;
	color: $shop-color;
}
.uni-goods-nav {
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
