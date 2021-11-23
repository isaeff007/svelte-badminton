<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { Game } from '$data/models';
	export let game: Game;
</script>

<main in:fade={{ delay: 250, duration: 300 }}>
	<div class="game-day-card">
		<section class="result-row">
			<img class="card-avatar" src="/img/{game?.winner?.playerId}.png" alt="player1" />
			<div class="result-score">
				<span class="win">{game?.winner?.points} </span>:<span> {game?.looser?.points}</span>
			</div>
			<img class="card-avatar" src="/img/{game?.looser?.playerId}.png" alt="player2" />
		</section>
	</div>
</main>

<style>
	.game-day-card {
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
		width: 20%;
		border-radius: 5px;
		padding: 0.5rem;
		width: 15rem;
	}
	.game-day-card:hover {
		box-shadow: 0 15px 32px 0 rgba(218, 178, 164, 0.2);
	}

	.card-avatar {
		height: 1.5rem;
		width: 1.5rem;
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
		font-size: 1rem;
	}

	.win {
		color: green;
	}
</style>
