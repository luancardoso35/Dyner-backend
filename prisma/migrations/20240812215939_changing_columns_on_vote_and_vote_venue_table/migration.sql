/*
  Warnings:

  - You are about to drop the column `chosen` on the `VenuesOnVote` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VenuesOnVote" (
    "venueId" TEXT NOT NULL,
    "voteId" TEXT NOT NULL,
    CONSTRAINT "VenuesOnVote_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VenuesOnVote_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_VenuesOnVote" ("venueId", "voteId") SELECT "venueId", "voteId" FROM "VenuesOnVote";
DROP TABLE "VenuesOnVote";
ALTER TABLE "new_VenuesOnVote" RENAME TO "VenuesOnVote";
CREATE UNIQUE INDEX "VenuesOnVote_voteId_venueId_key" ON "VenuesOnVote"("voteId", "venueId");
CREATE TABLE "new_Vote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "roundId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "votedOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Vote_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "PollRound" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vote" ("id", "roundId", "userId") SELECT "id", "roundId", "userId" FROM "Vote";
DROP TABLE "Vote";
ALTER TABLE "new_Vote" RENAME TO "Vote";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
