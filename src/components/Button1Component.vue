<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default{
    name: "Button1Component",
}
</script>

<style scoped>
button:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45), inset 0px 0px 20px rgba(0, 0, 0, 0.65);
    color: #f5f5f5;
}
button{
    padding: 20px;
    width: 230px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    background: #7367F0;
    color: #e7e7e7;
    transition: .3s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45), inset 0px 0px 4px rgba(0, 0, 0, 0.65);
}

</style>