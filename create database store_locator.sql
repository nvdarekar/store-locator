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

INSERT INTO stores (address, pincode) VALUES ("KANCHAN HEIGHTS, NEXT TO DEEPAK NITRITE, SINHAGAD ROAD, PARVATI
411030 Pune (Maharashtra)" , 411030);
INSERT INTO stores (address, pincode) VALUES ("MAHAVIR PARK, PUNE SATARA ROAD, OPP WALVEKAR LAWNS
411037 Pune (Maharashtra)" , 411037);
INSERT INTO stores (address, pincode) VALUES ("SURVEY NO 212/1, PLOT NO: 59, HERMES WAVES, OPP BABA KALYANIS BUNGALOW, YERWADA, KALYANINAGAR
411006 Pune (Maharashtra)" , 411006);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar, Paschimanagri, Kothrud, Pune, Maharashtra 411038" , 411038);
INSERT INTO stores (address, pincode) VALUES ("SHOPPER ORBIT,SURVEY NO 44-A/1,DHANORI ALANDI ROAD,NEAR SATHE BISCUIT FACTORY STOP,VISHRANTWADI
411015 Pune (Maharashtra)" , 411015);
INSERT INTO stores (address, pincode) VALUES ("AMANORA TOWN CENTER , EAST BLOCK, KHARADI BY PASS, HADAPSAR
411028 Pune (Maharashtra)" , 411028);
INSERT INTO stores (address, pincode) VALUES ("AMAR-ARMA GENESIS, MAIN BANER ROAD, OPP SAPPHIRE CHAMBERS, BANER
411045 Pune (Maharashtra)" , 411045);
INSERT INTO stores (address, pincode) VALUES ("PREMIER PLAZA, GROUND FLOOR, NEAR ICICI BANK, OPP. SURYAKIRAN HOTEL, CHINCHWAD
411019 Pune (Maharashtra)" , 411019);


INSERT INTO stores (address, pincode) VALUES ("PENTA HIGH 51, ANAND ROAD, OPP. RAILWAY STATION, MALAD WEST
400 064 Mumbai (Maharashtra)", 400064);
INSERT INTO stores (address, pincode) VALUES ("MILAN MALL, OPP. GAMDEVI MANDIR, NEAR S.V.ROAD JUNCTION SIGNAL, MILAN SUBWAY ROAD, SANTACRUZ (W)
400054 Mumbai (Maharashtra)", 400054);
INSERT INTO stores (address, pincode) VALUES ("R City mall, Lal Bahadur Shastri Marg
400086 Mumbai (Maharashtra)", 400086);

INSERT INTO stores (address, pincode) VALUES ("BIG BAZAAR, Nashik - Pune Highway, BB Urban Space, Near Mhasoba Maharaj Temple, Opp. Indian Security Press Hospital, Nashik Rd, Nashik, Maharashtra 422214" , 422214);
INSERT INTO stores (address, pincode) VALUES ("CITY CENTRE MALL (SARDA MALL) , LAWATE NAGAR
422002 Nashik (Maharashtra)", 422002);
INSERT INTO stores (address, pincode) VALUES ("THE ZONE, COLLEGE ROAD
422005 Nashik (Maharashtra)", 422005);
INSERT INTO stores (address, pincode) VALUES ("BB URBAN SPACE, NEAR MHASOBA MAHARAJ TEMPLE,NASIK PUNE HIGHWAY,NASIK ROAD, OPP INDIAN SECURITY PRESS HOSPITAL.
422101 Nashik (Maharashtra)", 422101);

INSERT INTO stores (address, pincode) VALUES ("EXPRESS AVENUE,NO2 CLUB HOUSE ROAD,ANNA SALAI
600002 Chennai (Tamil Nadu)", 600002);
INSERT INTO stores (address, pincode) VALUES ("Thyagaraja Complex, Chetpet,
600 017 Chennai (Tamil Nadu)", 600017);
INSERT INTO stores (address, pincode) VALUES ("45-47, ARCOD ROAD, ANAND RAM DEVELOPER, SALIGRAMAM (VADAVPALANI), NR. BHARANI HOSPITAL
600 093 Chennai (Tamil Nadu)", 600093);

INSERT INTO stores (address, pincode) VALUES ("Big Bazaar Dadri Main Road, Chilla, Trilokpuri, New Delhi
110091 Delhi", 110091);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar store on King's Park Street Big Bazaar
King's Park Street 110027 Delhi", 110027);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar Netaji Subhash Place, Metro Station, Ansal MGF Metro Plaza
110 052 Delhi", 110052);

INSERT INTO stores (address, pincode) VALUES ("Big Bazaar Ahmedabad City Mall, New Cotton Mills Compound, Outside Raipur Gate, Opp. Arya Sewa Samaj Hall, Kankaria Road
380022 Ahmedabad (Gujarat)", 380022);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar store on Raipur Kankaria Road, Opposite Arya Samaj Mandir Big Bazaar
Raipur Kankaria Road, Opposite Arya Samaj Mandir 380002 Ahmedabad (Gujarat)", 38002);
INSERT INTO stores (address, pincode) VALUES ("(SATELLITE) RUDRAPOINT, NEAR ISKON TEMPLE, SARKHEJ- GANDHINAGAR HIGHWAY
380015 Ahmedabad (Gujarat)", 380015);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar store on LANDMARK BLDG (BARDY)., NEAR PANCHASHEEL SQUARE, WARDHA ROAD, RAMDAS PETH 
	Big Bazaar LANDMARK BLDG (BARDY)., NEAR PANCHASHEEL SQUARE, WARDHA ROAD, RAMDAS PETH 440 013 Nagpur (Maharashtra)", 440013);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar NEAR GANDHI SAGAR LAKE,RAILWAY STATION ROAD,REWARD REAL ESTATE
440018 Nagpur (Maharashtra)", 440018);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar Near Panchsheel Cinema, Panchsheel Square
440012 Nagpur (Maharashtra)", 440012);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar
Central Ave, Wardhaman Nagar Colony 440008 Nagpur (Maharashtra)", 440008);

INSERT INTO stores (address, pincode) VALUES ("Big Bazaar MAHESHWARI,PARAMESHWARI TOWERS,PLOT NO.4-2-27,KACHIGUDA X ROAD
500 027 Hyderabad (Telangana)", 500027);

INSERT INTO stores (address, pincode) VALUES ("Big Bazaar 184/1, Bank Street, Hanuman Tekdi
500001 Hyderabad (Telangana)", 500001);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar NO1-8-557, NEAR ODEON THEATRE, RTC CROSSROADS, CHIKKADPALLI
500020 Hyderabad (Telangana)", 500020);
INSERT INTO stores (address, pincode) VALUES ("Big Bazaar VASANT ARCADE, PLOT NO.288&32, NAR KAMINENI HOSPITAL, L.B.NAGAR CROSS ROAD
500 070 Hyderabad (Telangana)", 500070);