class solution:
    def mostPoints(self, questions):
        points = 0
        brainpower = 0
        max = len(questions)
        for i in range(brainpower, max):
            for j in range(0, 1):
                points = points + questions[i][0]
                brainpower = brainpower + questions[i][1]
        return (points)


cal = solution()
print(cal.mostPoints([[1, 2], [2, 6],[3,2],[2,3],[1,2]]))
print("Total points", cal)
