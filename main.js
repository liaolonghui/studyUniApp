import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$request = function(url, data={}, method="GET") {
	return new Promise((resolved, reject) => {
		uni.request({
			url: "https://api-hmugo-web.itheima.net/api/public/v1" + url,
			data: data,
			method: method,
			success(res) {
				if (res.data.meta.status !== 200) {
					uni.showToast({
						title: "数据获取失败",
						icon: "none"
					})
				}
				resolved(res)
			},
			fail(err) {
				uni.showToast({
					title: "接口请求失败",
					icon: "none"
				})
				reject(err)
			}
		})
	})
}

const app = new Vue({
    ...App
})
app.$mount()
