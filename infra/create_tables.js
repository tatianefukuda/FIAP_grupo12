const mysql = require('mysql');
const conn = mysql.createConnection({ host: process.env.DB_HOST, user: process.env.DB_USER, password : process.env.DB_PASS, database: 'grupo12'});

(() => {
    conn.query("SET FOREIGN_KEY_CHECKS=0");
    conn.query("CREATE TABLE IF NOT EXISTS `preferences` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(50) NOT NULL, `description` VARCHAR(100) NOT NULL, PRIMARY KEY (`id`), UNIQUE INDEX `name_UNIQUE` (`name` ASC))");
    conn.query("REPLACE INTO `preferences` (`id`, `name`, `description`) VALUES (1, 'apenas_sexo_feminino','Motoristas do sexo feminino')");
    conn.query("REPLACE INTO `preferences` (`id`, `name`, `description`) VALUES (2, 'revisar_preferencias','Revisar opções a cada corrida')");
    conn.query("REPLACE INTO `preferences` (`id`, `name`, `description`) VALUES (3, 'compartilhar_contatos','Compartilhar automaticamente minha corrida com os contatos de segurança')");
    conn.query("REPLACE INTO `preferences` (`id`, `name`, `description`) VALUES (4, 'area_risco','Evitar áreas de risco')");
    conn.query("REPLACE INTO `preferences` (`id`, `name`, `description`) VALUES (5, 'carro_acessivel','Carro acessivel')");
    conn.query("REPLACE INTO `preferences` (`id`, `name`, `description`) VALUES (6, 'cadeirinha_bb_conforto','Cadeirinha/Bebê conforto')");

    conn.query("SET FOREIGN_KEY_CHECKS=1");
    conn.query("CREATE TABLE IF NOT EXISTS `user_preferences` (`id` INT NOT NULL AUTO_INCREMENT,`user_id` INT NOT NULL,`preference_id` INT NOT NULL,`enable` TINYINT(1) NULL DEFAULT 0,PRIMARY KEY (`id`), INDEX `user_preference_idx` (`preference_id` ASC),UNIQUE INDEX `unique_preference` (`preference_id` ASC, `user_id` ASC), CONSTRAINT `user_preference` FOREIGN KEY (`preference_id`) REFERENCES `preferences` (`id`))");

    conn.end();
})();
