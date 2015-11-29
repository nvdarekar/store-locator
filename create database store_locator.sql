CREATE DATABASE IF NOT EXISTS store_locator;
use store_locator;

grant all privileges on store_locator to root@localhost identified by '' with grant option;

DROP TABLE IF EXISTS `stores`;
CREATE TABLE stores(
	id int PRIMARY KEY AUTO_INCREMENT,
	address varchar(255),
	pincode int
);

INSERT INTO stores (address, pincode) VALUES ("KSRTC Satellite Bus Station, Byatarayanapura, Near-Girias, Mysore Road, Bangalore, Karnataka 560059", 560059);
INSERT INTO stores (address, pincode) VALUES ("No. 22, Salarpuria Towers, Marigowda Road, Adugodi, Bangalore, Karnataka 560095", 560095);
INSERT INTO stores (address, pincode) VALUES ("Outer Ring Road, Tumkur High Way, Near BEL Factory Maruthi Nagar, Nagashetty Halli, Bangalore, Karnataka 560094", 560094);
INSERT INTO stores (address, pincode) VALUES ("BIG BAZAAR, Nashik - Pune Highway, BB Urban Space, Near Mhasoba Maharaj Temple, Opp. Indian Security Press Hospital, Nashik Rd, Nashik, Maharashtra 422214" , 422214);