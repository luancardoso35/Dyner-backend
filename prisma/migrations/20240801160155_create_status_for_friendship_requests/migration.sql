/*
  Warnings:

  - Added the required column `friendshipStatus` to the `FriendshipRequest` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FriendshipRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "requestedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "friendshipStatus" TEXT NOT NULL,
    CONSTRAINT "FriendshipRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FriendshipRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FriendshipRequest_friendshipStatus_fkey" FOREIGN KEY ("friendshipStatus") REFERENCES "FriendshipStatus" ("status") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FriendshipRequest" ("id", "receiverId", "requestedAt", "senderId") SELECT "id", "receiverId", "requestedAt", "senderId" FROM "FriendshipRequest";
DROP TABLE "FriendshipRequest";
ALTER TABLE "new_FriendshipRequest" RENAME TO "FriendshipRequest";
CREATE UNIQUE INDEX "FriendshipRequest_senderId_receiverId_key" ON "FriendshipRequest"("senderId", "receiverId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
