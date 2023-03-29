
Component({
    properties: {
        isLoading: { // 是否为加载状态
            type: Boolean,
            value: false
        },
        isEmpty: { // 数据是否为空
            type: Boolean,
            value: true
        },
        isEnd: { // 是否加载完数据
            type: Boolean,
            value: false
        },
        emptyTip: { // 数据为空提示
            type: String,
            value: '暂无记录'
        }
    },
    data: {
    },
    lifetimes: {
        attached: function() {
        }
    },
    methods: {
    }
})
