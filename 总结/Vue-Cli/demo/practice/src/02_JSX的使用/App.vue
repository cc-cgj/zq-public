<script>
import HelloWorld from './HelloWorld.vue'
export default {
  name: 'App',
  render() {
    //  <template slot="foo">传递给foo的</template>
    return (
      <div>
        <HelloWorld label="hhh">
          {
            {
              default: () => '我是app传递的',
              foo: () => [<span>one</span>, <span>two</span>]
            }
          }
        </HelloWorld>
      </div>
    )
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
