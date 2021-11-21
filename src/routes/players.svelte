<script>
import { getPlayers } from "$lib/dataservice";
import PlayerCard from "$lib/PlayerCard.svelte";
  export let players = getPlayers().filter(p => p.team);
</script>


<svelte:head>
	<title>Players</title>
</svelte:head>

<main>	
	<section class='container'>
		{#each players as player}
			<PlayerCard {player}></PlayerCard>
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

