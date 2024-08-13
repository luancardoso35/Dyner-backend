/*
  Warnings:

  - The primary key for the `Venue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `apiId` on the `Venue` table. All the data in the column will be lost.
  - Added the required column `id` to the `Venue` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Venue" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
INSERT INTO "new_Venue" ("address", "categoryId", "chosenPlacesPoll", "name", "pollRoundId", "voteId") SELECT "address", "categoryId", "chosenPlacesPoll", "name", "pollRoundId", "voteId" FROM "Venue";
DROP TABLE "Venue";
ALTER TABLE "new_Venue" RENAME TO "Venue";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
