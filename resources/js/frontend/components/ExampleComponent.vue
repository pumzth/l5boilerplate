<template>
    <div class="card">
        <div class="card-header">
            <i class="fas fa-code"></i> Example Vue Component
        </div>
        <div class="card-body txt-color">
            I'm an example Vue component!<br>
            ทดสอบ HMR .vue 1
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss" scoped>
$color-1: rgb(25, 117, 40);
.txt-color {
    color: $color-1
}
</style>