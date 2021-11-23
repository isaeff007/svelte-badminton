<script lang="ts">
	import { getGameDays } from '$lib/dataservice';

	import GameDayCard from '$lib/GameDayCard.svelte';
	import type { GameDay } from '$data/models';
	export let gameDays: GameDay[] = getGameDays();
</script>

<svelte:head>
	<title>Game Days</title>
</svelte:head>

<main class="card-container">	
	{#each gameDays as gameDay}	    
		<GameDayCard {gameDay} />
	{/each}
</main>

<style>
	.card-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
