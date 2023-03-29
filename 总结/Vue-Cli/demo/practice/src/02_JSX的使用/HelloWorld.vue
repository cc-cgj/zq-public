
<script>
export default {
    props:{
        label:String
    },
    render() {
        console.log(this.$props);
        return (
            <div>
                <h2>{this.$slots.default ? this.$slots.default() : '我是默认的'}</h2>
                <h2>{this.$slots.foo ? this.$slots.foo() : '我是foo默认的'}</h2>
            </div>
        )
    }
}
</script>

<style lang="scss" scoped>

</style>