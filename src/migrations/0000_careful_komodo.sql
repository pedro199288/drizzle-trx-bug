CREATE TABLE `exercises` (
	`_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`profileId` int NOT NULL DEFAULT 0,
	`name` varchar(256) NOT NULL,
	`nameEs` varchar(256));

CREATE TABLE `profiles` (
	`_id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL);

CREATE UNIQUE INDEX `name_profile_index` ON `exercises` (`name`,`profileId`);
CREATE UNIQUE INDEX `nameEs_profile_index` ON `exercises` (`nameEs`,`profileId`);