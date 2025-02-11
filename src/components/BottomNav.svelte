<script lang="ts">
    import Icon from "@iconify/svelte";

    const navigateTo = (path: string) => {
        window.location.href = path;
    }
</script>

<!-- svelte-ignore a11y_no_redundant_roles -->
<nav class="bottom-nav" role="navigation">
    <button on:click={() => navigateTo('/home')}>
        <Icon icon="mdi-light:home" data-testid="icon-home" />
    </button>
    <button on:click={() => navigateTo('/chat')}>
        <Icon icon="bi:chat-left-text" data-testid="icon-chat" />
    </button>
    <button on:click={() => navigateTo('/people')}>
        <Icon icon="formkit:people" data-testid="icon-people" />
    </button>
    <button on:click={() => navigateTo('/chats')}>
        <Icon icon="f7:chat-bubble-2-fill" data-testid="icon-bubble" />
    </button>
    <button on:click={() => navigateTo('/notifications')}>
        <Icon icon="mdi:bell-outline" data-testid="icon-bell" />
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
