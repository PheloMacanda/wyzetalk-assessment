<script lang="ts">
  import NavBar from './components/NavBar.svelte';
  import PostInput from './components/PostInput.svelte';
  import Post from './components/Post.svelte';
  import BottomNav from './components/BottomNav.svelte';

  let user = {
    fullName: "John Smith",
    time: 8,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwd29ya2luZyUyMG9uJTIwbGFwdG9wfGVufDB8fDB8fHww"
  };
</script>

<NavBar />
<PostInput />
<Post 
  {user}
/>
<div class="height-element"></div>
<BottomNav />

<style>
  .height-element {
    height: 90px;
  }
</style>
