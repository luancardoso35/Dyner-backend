/*
  Warnings:

  - You are about to drop the `UsersPolls` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UsersPolls";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_PollToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PollToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Poll" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PollToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PollToUser_AB_unique" ON "_PollToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PollToUser_B_index" ON "_PollToUser"("B");
