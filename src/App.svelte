<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import BottomNav from "./components/BottomNav.svelte";

  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Updates from "./pages/Updates.svelte";
  import NotFound from "./pages/NotFound.svelte";

  const routes = {
    // Exact path
    '/': Home,
    '/updates': Updates,
    '*': NotFound
  }

</script>

<NavBar />
<Router {routes} />
<div class="height-element"></div>
<BottomNav />

<style>
  .height-element {
    height: 90px;
  }
</style>
