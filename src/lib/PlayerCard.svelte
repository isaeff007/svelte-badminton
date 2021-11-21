<script lang="ts">
	import type { Player } from 'src/models';
	export let player: Player;
</script>

<main class="player-card">
	<header class="card-title">
		<img src={player.avatar} alt="player" class="card-avatar" />
	</header>
	<section class="card-content">
		<div>Имя: {player.name}</div>
		<div class="team">
			<div>Команда:</div>
			<img src="/img/{player.team}.png" alt="player" class="team-avatar" />
		</div>
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
		justify-content: center;
		margin: 1rem;
	}

	.card-content {
		font-family: Arial, Helvetica, sans-serif;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-size: 1rem;
	}

	.card-avatar {
		height: 8rem;
		width: 8rem;
		border-radius: 50%;
		flex-shrink: 0;
		object-fit: cover;
	}

    .team {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

	.team-avatar {
		height: 3rem;		
		border-radius: 50%;
		object-fit: cover;
	}

	.player-card:hover {
		box-shadow: 0 16px 32px 0 rgba(236, 74, 15, 0.4);
	}
</style>
