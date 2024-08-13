/*
  Warnings:

  - Made the column `pollRoundId` on table `Venue` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venue" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pollRoundId" TEXT NOT NULL,
    "chosenPlacesPoll" TEXT,
    "voteId" TEXT,
    CONSTRAINT "Venue_pollRoundId_fkey" FOREIGN KEY ("pollRoundId") REFERENCES "PollRound" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Venue_chosenPlacesPoll_fkey" FOREIGN KEY ("chosenPlacesPoll") REFERENCES "PollRound" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Venue_voteId_fkey" FOREIGN KEY ("voteId") REFERENCES "Vote" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Venue" ("address", "chosenPlacesPoll", "id", "name", "pollRoundId", "voteId") SELECT "address", "chosenPlacesPoll", "id", "name", "pollRoundId", "voteId" FROM "Venue";
DROP TABLE "Venue";
ALTER TABLE "new_Venue" RENAME TO "Venue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
