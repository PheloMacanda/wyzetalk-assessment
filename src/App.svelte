<script lang="ts">
  import NavBar from './components/NavBar.svelte';
  import PostInput from './components/PostInput.svelte';
  import Post from './components/Post.svelte';
  import BottomNav from './components/BottomNav.svelte';
</script>

<NavBar />
<PostInput />
<Post />
<div class="height-element"></div>
<BottomNav />

<style>
  .height-element {
    height: 90px;
  }
</style>
