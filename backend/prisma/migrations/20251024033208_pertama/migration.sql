-- CreateTable
CREATE TABLE `datasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tgl_lahir` DATETIME(3) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
