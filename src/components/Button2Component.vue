<template>
    <button :class="{'transparent_btn': transparent}">
        <slot></slot>
    </button>
</template>

<script>
export default{
    name: "Button1Component",
    props:{
        transparent: Boolean
    }
}
</script>

<style scoped>
button:hover{
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 1);
    color: #f5f5f5;
}
button{
    padding: 10px;
    width: 160px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    background: #7367F0;
    color: #e7e7e7;
    transition: .3s;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 1);
}
.transparent_btn:hover{
    color: #7367F0 !important;
    box-shadow: unset !important;
}
.transparent_btn{
    background: transparent !important;
    color: #7367F0 !important;
    box-shadow: unset !important;
}

</style>