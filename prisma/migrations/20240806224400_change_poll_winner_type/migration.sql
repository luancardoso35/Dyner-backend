/*
  Warnings:

  - You are about to drop the column `winner` on the `Poll` table. All the data in the column will be lost.
  - Added the required column `winnerVenueId` to the `Poll` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Poll" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closed" BOOLEAN NOT NULL,
    "winnerVenueId" TEXT NOT NULL,
    CONSTRAINT "Poll_winnerVenueId_fkey" FOREIGN KEY ("winnerVenueId") REFERENCES "Venue" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Poll" ("closed", "created", "id") SELECT "closed", "created", "id" FROM "Poll";
DROP TABLE "Poll";
ALTER TABLE "new_Poll" RENAME TO "Poll";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
