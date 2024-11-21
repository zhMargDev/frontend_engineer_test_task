<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
export default{
    name: "CardComponent"
}
</script>

<style scoped>

.card{
    animation: show .5s;
    position: relative;
    padding: 20px;
    border-radius: 17px;
    background: #2F3349;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    width: calc(100% - 40px);
    height: calc(100% - 40px);
}

@media (max-width: 1000px){
    .card{
        border-radius: 0px
    }
}
</style>