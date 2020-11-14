import {MigrationInterface, QueryRunner} from "typeorm";

export class User1604053045411 implements MigrationInterface {
    name = 'User1604053045411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `products` ADD CONSTRAINT `FK_99d90c2a483d79f3b627fb1d5e9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `products` DROP FOREIGN KEY `FK_99d90c2a483d79f3b627fb1d5e9`");
        await queryRunner.query("DROP TABLE `products`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
