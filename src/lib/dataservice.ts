import { games, players } from '$data/stats';
import type { Game, GameDay, Player, PlayerPoints, PlayerWins } from '$data/models';


export const getPlayers = (): Player[] =>  {
   return players;
}

function compareByDate(gameDay1: GameDay, gameDay2: GameDay): number {
	if (gameDay1.date < gameDay2.date) {
		return -1;
	}
	if (gameDay1.date > gameDay2.date) {
		return 1;
	}
	return 0;
}

export const getGameDays = (): GameDay[] => {
	return games.sort(compareByDate);
};

export const getUserWins = (userId: string): PlayerWins => {
	let wins = 0;
	games.forEach((gameDay) => {
		wins += gameDay.games.filter((game) => game.winner.playerId === userId).length;
	});
	console.log(userId, wins);
	return { playerId: userId, playerWins: wins };
};

export const getUserDaysWon = (userId: string): PlayerWins => {
	let daysWon = 0;
	games.forEach((gameDay) => {
		let dayWins = 0;
		let dayLost = 0;
		dayWins += gameDay.games.filter((game) => game.winner.playerId === userId).length;
		dayLost += gameDay.games.filter((game) => game.looser.playerId === userId).length;
		// draw counted as a win
		if (dayWins >= dayLost) {
			daysWon++;
		}
	});
	return { playerId: userId, playerWins: daysWon };
};

// get all points for player
export const getUserPoints = (userId: string): PlayerPoints => {
	const winnerPoints = getUserPointsByType(userId, 'winner');
	const looserPoints = getUserPointsByType(userId, 'looser');
	const allPoints = winnerPoints + looserPoints;
	return { winnerPoints, looserPoints, allPoints };
};

function getUserPointsByType(userId: string, pointType: 'winner' | 'looser'): number {
	let userPoints = 0;

	const sumPoints = (gamesToSum: Game[], key: string) => {
		return gamesToSum.reduce((prev, cur) => prev + cur[key].points, 0);
	};

	games.forEach((gameDay) => {
		userPoints += sumPoints(
			gameDay.games.filter((game) => game[pointType].playerId === userId),
			pointType
		);
	});

	return userPoints;
}

export const getGameDayResult = (gameDay: GameDay): PlayerWins[] => {
	const [p1, p2] = [gameDay.games[0].winner.playerId, gameDay.games[0].looser.playerId];
	const p1Wins = gameDay.games.filter((game) => game.winner.playerId === p1).length;
	const p2Wins = gameDay.games.filter((game) => game.winner.playerId === p2).length;
	// set the winner on the first place
	if (p1Wins > p2Wins) {
		return [
			{ playerId: p1, playerWins: p1Wins },
			{ playerId: p2, playerWins: p2Wins }
		];
	}
	return [
		{ playerId: p2, playerWins: p2Wins },
		{ playerId: p1, playerWins: p1Wins }
	];
};
