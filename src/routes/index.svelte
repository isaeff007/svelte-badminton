<script>
	import PlayerStatsCard from '$lib/PlayerStatsCard.svelte';
	import { Pls } from  'src/stats';		
</script>

<svelte:head>
	<title>Badminton AC</title>
</svelte:head>

<div class="container">	
	<PlayerStatsCard playerId={Pls.FW} />
	<PlayerStatsCard playerId={Pls.FK} />
</div>
