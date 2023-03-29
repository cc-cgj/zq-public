/*
* 分页加载数据
* */
const onloadMore = Behavior({
	// 组件加载
	attached() {

		if (this.data.autoOnload) { // 开启自动加载数据
			let pages = getCurrentPages()
			let page = pages[pages.length - 1]

			this.onShow()

			if (this.data.onShowRefresh) { // 每次onShow都刷新数据
				// 拦截当前页面的onShow事件
				let oldOnShow = page.onShow
				page.onShow = () => {
					if (this.isActive()) {
						this.onShow()
					}

					if (oldOnShow) {
						oldOnShow()
					}
				}
			}

			// 拦截当前页面的上拉触底事件
			let oldOnReachBottom = page.onReachBottom
			page.onReachBottom = () => {

				if (this.isActive()) {
					this.onReachBottom()
				}

				if (oldOnReachBottom) {
					oldOnReachBottom()
				}
			}

			if (this.data.isPullDownRefresh) {
				// 拦截当前页面的下拉刷新事件
				//需要设置 "enablePullDownRefresh": true,
				let oldOnPullDownRefresh = page.onPullDownRefresh
				page.onPullDownRefresh = () => {

					if (this.isActive()) {
						this.onPullDownRefresh()
					}

					if (oldOnPullDownRefresh) {
						oldOnPullDownRefresh()
					}
				}
			}

		}
	},
	// 组件移除
	detached() {
		// 组件移除后不再加载数据
		this.setData({
			isInit: false
		})
	},
	observers: {
		'params': function () { // 参数变化时初始化列表
			this.initList()
		}
	},
	data: {
		autoOnload: true, // 是否自动加载数据,自动加载数据通过拦截页面的事件和生命周期实现
		onShowRefresh: true, // 是否每次进入页面都刷新数据，当autoOnload为true时可用
		isPullDownRefresh: true, // 是否开启下拉刷新
		api: '', // 请求接口地址
		isLoading: false, // 是否加载中
		isEnd: false, // 数据是否已加载完毕
		list: [], // 加载到的数据列表
		page: {
			pageNum: 1, // 当前第几页
			pageSize: 10 // 每页多少条
		},
		params: {}, // 请求额外参数
		isInit: false // 列表数据是否已经初始化
	},
	methods: {
		isActive () {
			return this.data.isInit
		},
		// 组件所在页面的onShow事件
		onShow () {
			this.initList()
		},
		// 组件所在页面的onReachBottom事件
		onReachBottom () {
			// 加载更多
			if (!this.data.isEnd && !this.data.isLoading) {
				console.log('触底加载')
				this.loadData()
			}
		},
		// 组件所在页面的onPullDownRefresh事件
		onPullDownRefresh () {
			// 初始化数据
			this.initList()
			setTimeout(() => {
				wx.stopPullDownRefresh()
			}, 400)
		},

		// 初始化列表
		initList: function () {
			this.setData({
				page: {pageNum: 1, pageSize: 10},
				isEnd: false
			}, () => {
				this.loadData(true)
			})
		},
		// 加载数据成功
		loadDataSuccess (isInit) {
			if (isInit) {
				// 列表数据初始化完成
			} else {
				// 当前页数据加载完成
			}
		},
		// 加载数据
		loadData: function (isInit) {

			if (this.data.isEnd || !this.data.api) {
				return
			}

			this.setData({
				isLoading: true
			})

			wx.$request({ // 模拟数据加载，在app.js中实现
				url: this.data.api,
				data: Object.assign({}, this.data.page, this.data.params)
			}).then(res => {

				this.loadDataSuccess(isInit) // 加载数据成功

				let list = this.data.list
				let obj = {
					isEnd: res.data.rows.length < this.data.page.pageSize, // 判断是否结束
					isLoading: false,
					page: Object.assign({}, this.data.page, {pageNum: this.data.page.pageNum + 1}) // pageNum + 1
				}
				if (!isInit) { // 加载第二页及以上数据
					// 数据局部更新
					res.data.rows.forEach((item, i) => {
						obj['list['+ (list.length + i) + ']'] = this.filterItem(item, list.length + i)
					})
				} else { // 初始化列表

					obj.isInit = true
					obj.list = res.data.rows.map((item, i) => this.filterItem(item, i))
				}

				this.setData(obj)

			}).catch(() => {
				this.setData({
					isLoading: false
				})
			})
		},
		// 过滤item，oldIndex为在list中的index
		filterItem (item, oldIndex) {
			return item
		}
	}
})

module.exports = {onloadMore}
