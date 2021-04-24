<template>
	<view class="contact">
		<image class="img" src="../../static/gywmban.jpg"></image>
		<view class="info">
			<view @click="makePhoneCall">
				联系电话：400-168-9090（点击拨打）
			</view>
			<view>
				校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山
			</view>
		</view>
		<map class="map" :scale="scale" :latitude="latitude" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scale: 17,
				latitude: 30.312419,
				longitude: 120.363118,
				markers: [
					{
						latitude: 30.312419,
						longitude: 120.363118,
						iconPath: "../../static/hmlogo.png",
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			makePhoneCall () {
				uni.makePhoneCall({
					phoneNumber: '400-168-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
		height: 360rpx;
	}
	.info {
		font-size: 28rpx;
		padding: 10rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
