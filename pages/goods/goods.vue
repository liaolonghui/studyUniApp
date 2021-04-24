<template>
	<view>
		<goods-list :goods="goodsList" />
		<view class="over" v-if="flag">
			-----我是有底线的-----
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
				pagenum: 1,
				goodsList: [],
				flag: false
			}
		},
		methods: {
			async getGoodsList (callback) {
				const goodsData = await this.$request("/goods/search", {pagenum: this.pagenum, query: "飞机"})
				this.goodsList = [...this.goodsList, ...goodsData.data.message.goods]
				if (goodsData.data.message.goods.length < 20) {
					this.flag = true
				}
				callback && callback()
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if (this.flag) return
			this.pagenum++
			this.getGoodsList()
		},
		async onPullDownRefresh() {
			this.pagenum = 1
			this.flag = false
			this.goodsList = []
			this.getGoodsList(uni.stopPullDownRefresh)
		}
	}
</script>

<style>
.over {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
}
</style>
