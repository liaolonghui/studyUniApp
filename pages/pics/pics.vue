<template>
	<view class="pics">
		<scroll-view scroll-y class="left">
			<view :class="{ 'active': i === index }" v-for="(item, i) in picsList" :key="i" @click="changeIndex(i)">
				{{item.floor_title.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right" v-if="picsList.length">
			<view v-for="(item) in picsList[index].product_list" :key="item.name" >
				<image @click="previewImage(item.image_src)" :src="item.image_src"></image>
				<text>{{item.name}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picsList: [],
				index: 0
			}
		},
		methods: {
			async getPicsData () {
				const picsData = await this.$request("/home/floordata")
				this.picsList = [
					...picsData.data.message,
					...picsData.data.message,
					...picsData.data.message,
					...picsData.data.message,
					...picsData.data.message
				]
			},
			// changeIndex
			changeIndex (index) {
				this.index = index
			},
			// previewImage
			previewImage (current) {
				const urls = this.picsList[this.index].product_list.map(item => item.image_src)
				console.log(urls)
				uni.previewImage({
					current,
					urls,
					indicator: "number",
					loop: "true"
				})
			}
		},
		onLoad() {
			this.getPicsData()
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		width: 200rpx;
		height: 100%;
		view {
			height: 120rpx;
			line-height: 120rpx;
			text-align: center;
			font-size: 30rpx;
			color: #333;
			border-bottom: 1px solid #ddd;
			border-right: 1px solid #ddd;
		}
		.active {
			color: #fff;
			background-color: $shop-color;
		}
	}
	.right {
		width: 550rpx;
		text-align: center;
		image {
			display: block;
			width: 90%;
			margin: 20rpx auto;
		}
	}
}
</style>
