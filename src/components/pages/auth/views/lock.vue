<template>
    <div id="lock" role="main" ref="lock">
        <div class="lock-mask"></div>
        <div class="lock-info">
            <div class="lock-info-hearder"></div>
            <p class="name">{{username}}</p>
        </div>
    </div>
</template>

<script>

    export default{
        data() {

            return{
                username: '用户名',
                hheight: window.screen.height + "px",
            }


        },


        mounted() {
			this.$nextTick(() => {
				this._makeStyle() 
			})
        },
        
        methods: {
			_makeStyle() {
				this.$refs.lock.style.height = this.hheight ;
				this.$refs.lock.style.color = 'red' ;
				console.log(this.hheight)
				
			}
		}


    }


    
</script>

<style lang="less" scoped>

.lock-info{
    .name{
        font-size: 50px
    }
}


</style>


