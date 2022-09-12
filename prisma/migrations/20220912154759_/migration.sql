/*
  Warnings:

  - You are about to drop the `views` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "views";

-- CreateTable
CREATE TABLE "SnippetViews" (
    "slug" VARCHAR(128) NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,

    CONSTRAINT "SnippetViews_pkey" PRIMARY KEY ("slug")
);

-- CreateTable
CREATE TABLE "BlogViews" (
    "slug" VARCHAR(128) NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,

    CONSTRAINT "BlogViews_pkey" PRIMARY KEY ("slug")
);
