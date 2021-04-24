<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goods" :key="item.goods_id">
			<image :src="item.goods_big_logo"></image>
			<view class="price">
				<text>￥{{item.goods_price}}</text>
				<text>￥{{item.goods_price+1000}}</text>
			</view>
			<view class="name">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"GoodsList",
		props: {
			"goods": Array
		}
	}
</script>

<style lang="scss">
.goods-list {
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods-item {
		width: 355rpx;
		background-color: #fff;
		margin: 10rpx 0;
		padding: 20rpx;
		box-sizing: border-box;
		image {
			width: 80%;
			height: 300rpx;
			display: block;
			margin: auto;
		}
		.price {
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			text:first-of-type {
				color: $shop-color;
				font-size: 30rpx;
			}
			text:last-of-type {
				color: #bbb;
				font-size: 28rpx;
				margin-left: 10rpx;
				text-decoration: line-through;
			}
		}
		.name {
			font-size: 30rpx;
			line-height: 50rpx;
			padding-top: 10rpx;
			padding-bottom: 15rpx;
		}
	}
}
</style>
