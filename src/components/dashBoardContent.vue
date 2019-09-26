<template>
    <section class="dahsboard-content">
        <h2 class="container-h2">
            <slot name="title">Teste</slot>
            <!-- <span>
                <slot name="subtitle"></slot>
            </span> -->
            <div>
                <slot name="button"></slot>
            </div>
        </h2>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .container-h2{
        display: grid;
        grid: auto / auto 125px;
    }
    .dahsboard-content{
        padding: 40px;
        border-radius: 10px;
        // min-height: calc( (100vh - 100px) + 10px);
        box-shadow: 0px 0px 2px rgba(0,0,0,0.3);
        width: calc(100% - 80px);
        background-color: white;
        margin: -50px 40px 40px;
        h2{
            margin: 0px;
            font-size: 2.1em;
            padding-bottom: 10px;
            border-bottom: 1px solid lighten($gray, 25%);
            color: $primary;
            font-weight: normal;
            span{
                margin-left: 20px;
                font-size: 0.75em;
                color: lighten($gray, 15%);
                position: relative;
                &:before{
                    content: "";
                    display: block;
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    width: 1px;
                    height: 40px;
                    background-color: lighten($gray, 25%);
                }
            }
        }
    }
</style>