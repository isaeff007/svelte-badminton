<script lang="ts">
	import type { Game, GameDay } from 'src/models';
	import GameCard from './GameCard.svelte';
	export let gameDay: GameDay;
	let result = { winnerId: '', winnerPoints: 0, looserId: '', looserPoints: 0 };

	const [player1, player2] = [gameDay.games[0].winner.playerId, gameDay.games[0].looser.playerId];

	const player1wins = gameDay.games.filter((game) => game.winner.playerId === player1).length;
	const player2wins = gameDay.games.length - player1wins;
	result.winnerId = player1wins > player2wins ? player1 : player2;
	result.winnerPoints = player1wins > player2wins ? player1wins : player2wins;
	result.looserId = player1wins > player2wins ? player2 : player1;
	result.looserPoints = player1wins > player2wins ? player2wins : player1wins;
	// do not mark the winner if it was a draw
	$: win = result?.winnerPoints > result?.looserPoints;
</script>

<main class="game-day-card">
	<div class="game-date">{gameDay.date}</div>
	<section class="games-container">
		{#each gameDay.games as game}
			<GameCard {game} />
		{/each}
	</section>
	<!-- Game day result as footer -->
	<section class="result-row">
		<img class="card-avatar" src="/img/{result.winnerId}.png" alt="player1" />
		<div class="result-score">
			<span class:win>{result.winnerPoints} </span>:<span> {result.looserPoints}</span>
		</div>
		<img class="card-avatar" src="/img/{result.looserId}.png" alt="player2" />
	</section>
</main>

<style>
	.games-container {
		margin-bottom: 1rem;
	}

	
	.game-date {
		text-align: center;
		color: dimgrey;
		font-weight: bolder;
		margin: 1rem;
	}

	.game-day-card {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		width: 40%;
		border-radius: 5px;
		padding: 1rem;
		width: 15rem;
		margin: 1rem;
	}
	.game-day-card:hover {
		box-shadow: 0 15px 32px 0 rgba(218, 178, 164, 0.2);
	}

	.card-avatar {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		flex-shrink: 0;
		object-fit: cover;
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
