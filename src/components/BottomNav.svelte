<script>
    import Icon from "@iconify/svelte";
</script>

<nav class="bottom-nav">
    <button>
        <Icon icon="mdi-light:home" />
    </button>
    <button>
        <Icon icon="bi:chat-left-text" />
    </button>
    <button>
        <Icon icon="formkit:people" />
    </button>
    <button>
        <Icon icon="f7:chat-bubble-2-fill" />
    </button>
    <button>
        <Icon icon="mdi:bell-outline" />
    </button>
</nav>

<style>
    .bottom-nav {
        display: flex;
        justify-content: space-around;
        background: #1c1c3c;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    button {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
</style>
