<script lang="ts">
    import Icon from "@iconify/svelte";

    let activeRoute = '/home';

    const navigateTo = (path: string) => {
        activeRoute = path;
        window.location.href = path;
    }
</script>

<!-- svelte-ignore a11y_no_redundant_roles -->
<nav class="bottom-nav" role="navigation">
    <button on:click={() => navigateTo('/home')} class="{activeRoute === '/home' ? 'active' : ''}">
        <Icon icon="mdi-light:home" data-testid="icon-home" />
    </button>
    <button on:click={() => navigateTo('/updates')} class="{activeRoute === '/updates' ? 'active' : ''}">
        <Icon icon="bi:chat-left-text" data-testid="icon-chat" />
    </button>
    <button on:click={() => navigateTo('/people')} class="{activeRoute === '/people' ? 'active' : ''}">
        <Icon icon="formkit:people" data-testid="icon-people" />
    </button>
    <button on:click={() => navigateTo('/chats')} class="{activeRoute === '/chats' ? 'active' : ''}">
        <Icon icon="f7:chat-bubble-2-fill" data-testid="icon-bubble" />
    </button>
    <button on:click={() => navigateTo('/notifications')} class="{activeRoute === '/notifications' ? 'active' : ''}">
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

    button.active {
        color: #007bff;
    }
    button:active {
        transform: scale(0.9);
    }
</style>
