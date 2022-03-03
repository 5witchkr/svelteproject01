<script>
	import Login from "./components/Login.svelte";
	import Start from "./components/start.svelte";
	import Join from "./components/Join.svelte";
	import MainPage from "./components/MainPage.svelte";
	import { count, login, join, mainpage, pizza} from "./store/writalbeStore.js";
	import { time, elapsed } from "./store/readableStore.js";
	import { fade } from 'svelte/transition';
	import Pizza from "./components/pizza.svelte";
	

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: "numeric",
		minute:"2-digit",
		second:"2-digit",
	});

</script>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>

  </head>
  <body>
<main style="background-color:#E0E0E0;">
		{#if $elapsed < 5}
		<Start />
		{/if}
	{#if $elapsed > 4}
	{#if $login}
	<Login />
	{/if}
	{#if $join}
	<Join />
	{/if}
	{/if}
	{#if $mainpage}
	<MainPage />
	{/if}
	{#if $pizza}
	<Pizza />
	{/if}

</main>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
</html>

<style>


</style>