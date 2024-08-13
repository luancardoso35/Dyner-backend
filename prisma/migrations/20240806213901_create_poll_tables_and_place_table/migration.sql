-- CreateTable
CREATE TABLE "Poll" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed" BOOLEAN NOT NULL,
    "winner" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UsersPolls" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pollId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "UsersPolls_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsersPolls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PollRound" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pollId" TEXT NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    CONSTRAINT "PollRound_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "roundId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Vote_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "PollRound" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Venue" (
    "apiId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "pollRoundId" TEXT,
    "chosenPlacesPoll" TEXT,
    "voteId" TEXT,
    CONSTRAINT "Venue_pollRoundId_fkey" FOREIGN KEY ("pollRoundId") REFERENCES "PollRound" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Venue_chosenPlacesPoll_fkey" FOREIGN KEY ("chosenPlacesPoll") REFERENCES "PollRound" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Venue_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersPolls_pollId_userId_key" ON "UsersPolls"("pollId", "userId");
