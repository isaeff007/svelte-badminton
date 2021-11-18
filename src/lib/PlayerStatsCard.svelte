<script lang="ts">
	import type { PlayerPoints, PlayerWins } from '../models';

	export let playerId: string;
	let numberOfWins: PlayerWins = { playerId: playerId, playerWins: 13 };
	let numberOfDaysWon: PlayerWins = { playerId: playerId, playerWins: 5 };
	let playerPoints: PlayerPoints = { allPoints: 2029, winnerPoints: 1119, looserPoints: 910 };
</script>


<section class='player-card'>
  <div>По дням</div><div>{numberOfDaysWon.playerWins}</div>
</section>


<style>

</style>


