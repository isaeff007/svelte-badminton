<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { GameDay, PlayerWins } from 'src/models';
	import { getGameDayResult } from './dataservice';
	export let gameDay: GameDay;
	let result: PlayerWins[] = getGameDayResult(gameDay);
	// do not mark the winner if it was a draw
	$: win = result[0]?.playerWins > result[1]?.playerWins;

</script>

<main class="game-day-card" transition:fade>
	<header>
		<div class="card-title">
			<div class="game-date">{gameDay.date}</div>
		</div>
	</header>
	<section class="result-row">
		<img class="card-avatar" src="/img/{result[0].playerId}.png" alt="player1" />
		<div class="result-score"><span class:win>{result[0].playerWins} </span>:<span> {result[1].playerWins}</span></div>
		<img class="card-avatar" src="/img/{result[1].playerId}.png" alt="player2" />
	</section>
</main>

<style>
	.game-day-card {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		width: 40%;
		border-radius: 5px;
		padding: 1rem;
		width: 15rem;		
	}
	.game-day-card:hover {
		box-shadow: 0 15px 32px 0 rgba(236, 74, 15, 0.2);
	}

	.card-title {
		display: flex;
		justify-content: space-evenly;
	}

	.card-avatar {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		flex-shrink: 0;
		object-fit: cover;
	}

	.game-date {
		color: dimgrey;
		margin: 0 auto;
	}

	.result-row {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.result-score {
		font-weight: bold;
		font-size: 1.5rem;
	}

	.win {
		color: red;
	}
</style>
