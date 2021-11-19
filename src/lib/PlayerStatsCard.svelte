<script lang="ts">
	import type { PlayerPoints, PlayerWins } from '../models';
	import { getUserDaysWon, getUserPoints, getUserWins } from './dataservice';

	export let playerId: string;
	let numberOfWins: PlayerWins = getUserWins(playerId);
	let numberOfDaysWon: PlayerWins = getUserDaysWon(playerId);
	let playerPoints: PlayerPoints = getUserPoints(playerId);
</script>

<main class="player-card">
	<header class="card-title flex">
		<img src="/img/{playerId}.png" alt="player" class="card-avatar" />
		<div>{numberOfWins.playerWins}</div>
	</header>

	<section class="card-stats">
		<div>По дням: {numberOfDaysWon.playerWins}</div>
		<div>Все мячи: {playerPoints.allPoints}</div>
		<div>В победе: {playerPoints.winnerPoints}</div>
		<div>В поражении: {playerPoints.looserPoints}</div>
	</section>
</main>

<style>
	.player-card {
		box-shadow: 0 8px 16px 0 rgba(236, 74, 15, 0.3);
		transition: 0.3s;
		width: 40%;
		border-radius: 5px;
		padding: 1rem;
		width: 15rem;
	}

	.card-title {
		display: flex;
		gap: 2rem;
		font-size: 2.2rem;
		font-weight: 700;
		color: green;
		margin: 2rem;
	}

	.card-stats {
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 1rem;
	}

	.card-avatar {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		flex-shrink: 0;
		object-fit: cover;
	}

	.player-card:hover {
		box-shadow: 0 16px 32px 0 rgba(236, 74, 15, 0.4);
	}
</style>
