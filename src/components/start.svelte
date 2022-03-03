<script>
    import { count } from "../store/writalbeStore.js";
	import { time, elapsed } from "../store/readableStore.js";
	import { fade } from 'svelte/transition';


    const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: "numeric",
		minute:"2-digit",
		second:"2-digit",
	});

</script>


<div transition:fade={{duration: 500}} style="text-align:center; font-size:50px; color:white; background-image:url('https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_960_720.jpg'); background-repeat:no-repeat; background-size:cover; overflow:hidden; min-height:970px; height:auto;">
    <div style="margin-top:300px"></div>
{#if $elapsed < 5}
{#if $elapsed > 0}
<div transition:fade={{duration: 500}} style="background-color:transparent;">주변맛집!</div>
{/if}
{/if}
{#if $elapsed < 3}
{#if $elapsed > 1}
<div transition:fade={{duration: 500}} style="background-color:transparent;">내 주변 맛있는</div>
{/if}
{/if}
{#if $elapsed < 5}
{#if $elapsed > 3}
<div transition:fade={{duration: 500}} style="background-color:transparent;">맛집을 소개합니다!</div>
{/if}
{/if}
</div>