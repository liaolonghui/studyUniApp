<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" circular :interval="3000" :duration="1000">
			<swiper-item v-for="item in swiperList" :key="item.goods_id">
				<image :src="item.image_src"></image>
			</swiper-item>
		</swiper>
		<!-- nav -->
		<view class="nav">
			<view class="nav-item" @click="toNavPath('goods')">
				<view class="iconfont icon-ziyuan"></view>
				<text>黑马超市</text>
			</view>
			<view class="nav-item" @click="toNavPath('contact')">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav-item" @click="toNavPath('pics')">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav-item" @click="toNavPath('video')">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
		<!-- 推荐商品区 -->
		<view class="hot-goods">
			<view class="tit">推荐商品</view>
			<GoodsList :goods="goodsList" />
		</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/GoodsList.vue'
	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				swiperList: [],
				goodsList: []
			}
		},
		onLoad() {
			this.getSwiperList()
			this.getGoodsList()
		},
		methods: {
			async getSwiperList () {
				const swiperData = await this.$request("/home/swiperdata")
				this.swiperList = swiperData.data.message
			},
			async getGoodsList () {
				const goodsData = await this.$request("/goods/search")
				this.goodsList = goodsData.data.message.goods
			},
			// nav的跳转
			toNavPath(path) {
				uni.navigateTo({
					url: '/pages/'+path+'/'+path
				})
			}
		}
	}
</script>

<style lang="scss">
	.home swiper {
		width: 750rpx;
		height: 380rpx;
		swiper-item {
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.home .nav {
		display: flex;
		.nav-item {
			width: 25%;
			text-align: center;
			view {
				width: 100rpx;
				height: 100rpx;
				margin: 10rpx auto;
				line-height: 100rpx;
				font-size: 40rpx;
				color: #fff;
				border-radius: 50%;
				background-color: $shop-color;
			}
		}
	}
	.hot-goods {
		background-color: #eee;
		margin-top: 20rpx;
		overflow: hidden;
		.tit {
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			color: $shop-color;
			letter-spacing: 40rpx;
			background-color: #fff;
			margin: 7rpx 0;
		}
	}
</style>
