/*
  Warnings:

  - You are about to drop the column `chosenPlacesPoll` on the `Venue` table. All the data in the column will be lost.
  - You are about to drop the column `pollRoundId` on the `Venue` table. All the data in the column will be lost.
  - You are about to drop the column `voteId` on the `Venue` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "VenuesOnPollRound" (
    "venueId" TEXT NOT NULL,
    "pollRoundId" TEXT NOT NULL,
    "chosen" BOOLEAN NOT NULL,
    CONSTRAINT "VenuesOnPollRound_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VenuesOnPollRound_pollRoundId_fkey" FOREIGN KEY ("pollRoundId") REFERENCES "PollRound" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VenuesOnVote" (
    "venueId" TEXT NOT NULL,
    "voteId" TEXT NOT NULL,
    "chosen" BOOLEAN NOT NULL,
    CONSTRAINT "VenuesOnVote_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VenuesOnVote_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_Venue" ("address", "id", "name") SELECT "address", "id", "name" FROM "Venue";
DROP TABLE "Venue";
ALTER TABLE "new_Venue" RENAME TO "Venue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "VenuesOnPollRound_pollRoundId_venueId_key" ON "VenuesOnPollRound"("pollRoundId", "venueId");

-- CreateIndex
CREATE UNIQUE INDEX "VenuesOnVote_voteId_venueId_key" ON "VenuesOnVote"("voteId", "venueId");
