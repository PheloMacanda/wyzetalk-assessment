<script lang="ts">
    import Icon from "@iconify/svelte";
    let postText = "";
</script>

<div class="post-input">
    <div class="text-container">
        <p>ME</p>
    </div>
    <textarea bind:value={postText} placeholder="Share something"></textarea>
    <div class="icon-container">
        <Icon icon="mdi-light:image" width={25} height={25} />
    </div>
</div>

<style>
    .icon-container {
        margin-left: 5px;
    }

    p {
        font-weight: 500;
    }
    .text-container {
        background-color: #eeebeb;
        margin-right: 5px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    .post-input {
        display: flex;
        align-items: center;
        background: white;
        padding: 10px;
        border-radius: 5px;
    }

    textarea {
        flex: 1;
        background-color: #eeebeb;
        padding: 8px;
        font-size: 14px;
        border: 1px solid #dbdbdb;
        border-radius: 12px;
    }
</style>
