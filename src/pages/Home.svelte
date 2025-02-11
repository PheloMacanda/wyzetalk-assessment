<script>
    import Post from "../components/Post.svelte";
    import PostInput from "../components/PostInput.svelte";
    import { user } from "../constants";
</script>

<main>
    <PostInput />
    <Post {user} />
</main>
