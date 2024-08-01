/*
  Warnings:

  - You are about to drop the `_UserFriends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_UserFriends_B_index";

-- DropIndex
DROP INDEX "_UserFriends_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserFriends";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "FriendshipRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "requestedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FriendshipRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FriendshipRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FriendshipStatus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_friends" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_friends_A_fkey" FOREIGN KEY ("A") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_friends_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "avatarSeed" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("avatarSeed", "email", "id", "name", "password") SELECT "avatarSeed", "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "FriendshipRequest_senderId_receiverId_key" ON "FriendshipRequest"("senderId", "receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "FriendshipStatus_status_key" ON "FriendshipStatus"("status");

-- CreateIndex
CREATE UNIQUE INDEX "_friends_AB_unique" ON "_friends"("A", "B");

-- CreateIndex
CREATE INDEX "_friends_B_index" ON "_friends"("B");
