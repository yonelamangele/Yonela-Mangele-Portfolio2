<template>
    <div>
        <span class="loader loader--hidden"></span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .loader {
        position: fixed;
        top: 50%;
        left: 46%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }
    
    .loader:before , .loader:after{
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #092635;
        box-shadow: 32px 0 #9EC8B9;
        left: 0;
        top: 0;
        animation: ballMoveX 1s linear infinite;
    }
    
    .loader:after {
        box-shadow: none;
        transform-origin: 40px 0;
        transform: rotate(-153deg);
        animation: rotateLoader 1s linear infinite;
    }
    
    @keyframes rotateLoader {
        0% , 10%{ transform: rotate(-153deg); }
        90%, 100% { transform: rotate(0deg); }
    }
  
    @keyframes ballMoveX {
        0% , 10%{  transform: translateX(0) }
        90%, 100% { transform: translateX(32px) }
    }
      
</style>