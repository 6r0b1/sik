/*
  Warnings:

  - You are about to drop the column `description` on the `Works` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Works` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Works" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "description_de" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "description_en" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "description_long_de" TEXT,
ADD COLUMN     "description_long_en" TEXT,
ADD COLUMN     "main_img_src" TEXT NOT NULL DEFAULT 'default.jpg',
ADD COLUMN     "title_de" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "title_en" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "work_links" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL DEFAULT '',
    "link_text_de" TEXT NOT NULL DEFAULT '',
    "link_text_en" TEXT NOT NULL DEFAULT '',
    "work_id" INTEGER NOT NULL,

    CONSTRAINT "work_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_dates" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL DEFAULT '',
    "time" TEXT NOT NULL DEFAULT '',
    "venue" TEXT NOT NULL DEFAULT '',
    "work_id" INTEGER NOT NULL,

    CONSTRAINT "work_dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_images" (
    "id" SERIAL NOT NULL,
    "src" TEXT NOT NULL DEFAULT 'default.jpg',
    "alt_de" TEXT NOT NULL DEFAULT '',
    "alt_en" TEXT NOT NULL DEFAULT '',
    "work_id" INTEGER NOT NULL,

    CONSTRAINT "work_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_credits" (
    "id" SERIAL NOT NULL,
    "role_de" TEXT NOT NULL DEFAULT '',
    "role_en" TEXT NOT NULL DEFAULT '',
    "name_de" TEXT NOT NULL DEFAULT '',
    "name_en" TEXT NOT NULL DEFAULT '',
    "work_id" INTEGER NOT NULL,

    CONSTRAINT "work_credits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "work_links" ADD CONSTRAINT "work_links_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Works"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_dates" ADD CONSTRAINT "work_dates_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Works"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_images" ADD CONSTRAINT "work_images_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Works"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_credits" ADD CONSTRAINT "work_credits_work_id_fkey" FOREIGN KEY ("work_id") REFERENCES "Works"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
