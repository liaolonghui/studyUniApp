<template>
	<view class="news">
		<view class="news-item" v-for="goods in goodsList" :key="goods.goods_id" @click="toGoodsDetail(goods.goods_id)">
			<image :src="goods.goods_big_logo"></image>
			<view class="info">
				<text>{{goods.goods_name}}</text>
				<text>
					<text>价格:￥{{goods.goods_price}}</text>
					<text>剩余:{{goods.goods_number}}个</text>
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: []
			}
		},
		methods: {
			// 获取商品数据
			async getGoodsList () {
				const goodsData = await this.$request("/goods/search", {query: "飞机"})
				this.goodsList = goodsData.data.message.goods
			},
			// 跳转至商品详情页
			toGoodsDetail (goodsId) {
				uni.navigateTo({
					url: "/pages/goodsDetail/goodsDetail?goodsId="+goodsId,
				})
			}
		},
		onLoad() {
			this.getGoodsList()
		}
	}
</script>

<style lang="scss">
.news-item {
	display: flex;
	margin-bottom: 30rpx;
	border-bottom: 1rpx solid #ddd;
	image {
		width: 250rpx;
		height: 250rpx;
	}
	.info {
		width: 500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text:last-child {
			margin-left: 10rpx;
			text:nth-child(2) {
				margin-left: 40rpx;
				color: $shop-color;
			}
		}
	}
}
</style>
