HOME_TEAM_WON = 1


# O(n) time | O(k) space
def tournamentWinner(competitions, results):
    currentBestTeam = ''
    scores = {currentBestTeam: 0}

    for index, competition in enumerate(competitions):
        result = results[index]
        homeTeam, awayTeam = competition

        winningTeam = homeTeam if result == HOME_TEAM_WON else awayTeam

        updateScores(winningTeam, 3, scores)

        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam

    return currentBestTeam


def updateScores(team, points, scores):
    if team not in scores:
        scores[team] = 0

    scores[team] += points


print(tournamentWinner([
    ['HTML', 'C#'],
    ['C#', 'PYTHON'],
    ['PYTHON', 'HTML'],
], [0, 0, 1]))
