/*
 CREATE TABLE IF NOT EXISTS  `ksn`.`Leden` (
    `Licentie` INT UNSIGNED NOT NULL, 
    `Geldigheidsdatum` DATE NOT NULL, 
    `Voornaam` VARCHAR(70) NOT NULL,
    `achternaam` VARCHAR(70) NOT NULL, 
    `straatnummer` VARCHAR(70) NOT NULL , 
    `postnummer` VARCHAR(10) NOT NULL , 
    `gemeente` VARCHAR(70) NOT NULL , 
    `telefoon` VARCHAR(20) NULL , 
    `gsm` VARCHAR(20) NULL , 
    `email` VARCHAR(70) NULL , 
    `email2` VARCHAR(70) NULL , 
    `land` VARCHAR(70) NULL , 
    `MV` BOOLEAN NOT NULL,
    `geboortedatum` DATE NOT NULL , 
    `status` TINYINT NOT NULL , 
    `aansluitingsdatum` DATE NOT NULL , 
    `rijksregisternummer` VARCHAR(14) NOT NULL , 
    `geboorteplaats` VARCHAR(70) NOT NULL , 
    `clubnummer` TINYINT NOT NULL , 
    `graadID` TINYINT NOT NULL ,
    `paswoord` VARCHAR(70) NULL , 
    PRIMARY KEY (`Licentie`)) 
ENGINE = InnoDB;
*/
-- INSERT INTO `Leden`(`Licentie`, `Geldigheidsdatum`, `Voornaam`, `achternaam`, `straatnummer`, `postnummer`, `gemeente`, `telefoon`, `gsm`, `email`, `email2`, `land`, `MV`, `geboortedatum`, `status`, `aansluitingsdatum`, `rijksregisternummer`, `geboorteplaats`, `clubnummer`, `graadID`, `paswoord`) 
-- VALUES ( ? ,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)