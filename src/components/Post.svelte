<script>
    export let user = "John Smith";
    export let time = "8 hours ago";
    export let content =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    export let image =
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwd29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww";
</script>

<div class="post">
    <h3>{user}</h3>
    <p>{time}</p>
    <p>{content}</p>
    <img src={image} alt="Post image" />
</div>

<style>
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