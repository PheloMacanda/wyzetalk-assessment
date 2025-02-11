<script lang="ts">
    import type { User } from "../interfaces/types";
    export let user: User;
    $: initials = `${user.fullName.split(' ')[0]?.charAt(0)}${user.fullName.split(' ')[1]?.charAt(0)}`;
</script>

<div class="post">
    <div class="name-container">
        <p class="initials">{initials}</p>
        <div class="name-and-time">
            <h3 class="full-name">{user.fullName}</h3>
            <p class="time-content">{user.time} hours ago</p>
        </div>
    </div>
    
    <p>{user.content}</p>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src={user.image} alt="Post image" />
</div>

<style>

    .full-name {
        margin-bottom: 0;
    }
    .name-and-time {
        display: flex;
        flex-direction: column;
    }

    .time-content {
        font-size: 14px;
        color: #8b8888;
        margin-top: 0;
    }

    .name-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .initials {
        background-color: #eeebeb;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        margin-top: 20px;
    }

    .post {
        background: white;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
        border-radius: 5px;
    }
</style>