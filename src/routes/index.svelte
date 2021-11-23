<script lang="ts">	
	import { getGameDays } from '$lib/dataservice';
	import GameDayResult from '$lib/GameDayResult.svelte';
	import PlayerStatsCard from '$lib/PlayerStatsCard.svelte';
	import { Pls } from 'src/stats';
	import type { GameDay } from 'src/models';

	let gameDays = getGameDays().sort(compareByDateDesc);

	function compareByDateDesc(gameDay1: GameDay, gameDay2: GameDay): number {
		if (gameDay1.date < gameDay2.date) {
			return 1;
		}
		if (gameDay1.date > gameDay2.date) {
			return -1;
		}
		return 0;
	}
</script>

<svelte:head>
	<title>Badminton AC</title>
</svelte:head>

<main>
	<section>
		<div class="container">
			<PlayerStatsCard playerId={Pls.FW} />
			<PlayerStatsCard playerId={Pls.FK} />
		</div>
	</section>
	<section class="container">
		{#each gameDays as gameDay}
			<GameDayResult {gameDay} />
		{/each}
	</section>
</main>

<style>
	main {
		padding: 2rem;
	}

	.container {
		display: flex;
		gap: 3rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 3rem;
	}
</style>
