<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props: {
        list: Array
    },
    data(){
        return{
            swiperOption: {
                pagination:'.swiper-pagination',
                loop:true,
                speed:1000,
                paginationClickable: true,
                speed: 2000,
                loop: true,
                observer:true,
                observeParents:true,
                autoplayDisableOnInteraction : false,
                autoplay:1500
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active
       background: #fff
 .wrapper
     overflow: hidden
     width:100%
     height:0
     padding-bottom: 26.25%
     background: #eee
    .swiper-image
       width:100%

</style>
