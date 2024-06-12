<template>
    <div class="login-view">
        <div class="login-box">
            <div class="left">
                <el-image src="https://th.bing.com/th/id/OIP.vnHfoJM5ndj_kLA5XbYhVgHaKe?rs=1&pid=ImgDetMain"
                    fit="cover" />
            </div>
            <div class="right">
                <el-form></el-form>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>

</script>


<style lang="scss" scoped>
main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid;

    :deep .el-card__body {
        width: 740px;
        height: 300px;
        padding: 0;
    }
}
</style>