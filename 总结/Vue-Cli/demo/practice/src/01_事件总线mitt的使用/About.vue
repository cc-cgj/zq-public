<template>
    <div>
        <button @click="cancleBtn1">cancleBtn1</button>
        <header ref="title">标题1</header>
    </div>
</template>

<script>
import emitter from '@/utils/eventbus';
function btn1() {
    console.log(arguments);
}
export default {
    created() {
        emitter.on('btn1',btn1)
        emitter.on('*',function (type,params){
            console.log(type,params);
        })
    },
    methods: {
        cancleBtn1() {
            console.log(111,this.$refs.title);
            emitter.off('btn1',btn1)
        }
    }
}
</script>

<style scoped>

</style>