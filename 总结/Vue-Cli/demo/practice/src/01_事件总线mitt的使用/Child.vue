<template>
    <div>
        <button @click="btnClick">btnClick</button>
    </div>
</template>

<script>
    import emitter from '@/utils/eventbus';
    export default {
        methods:{
            btnClick(){
                emitter.emit('btn1',{
                    name:"btn1"
                })
                emitter.emit('btn2',{
                    name:"btn2"
                })
            }
        }
    }
</script>

<style scoped>

</style>