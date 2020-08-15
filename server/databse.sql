CREATE TABLE photos (
	id SERIAL PRIMARY KEY,
	path VARCHAR(80) NOT NULL,
	description VARCHAR(200),
	likes int DEFAULT 0
);

INSERT INTO "photos" ("path", "description") VALUES('images/IMG_2.jpg', 'San Sebastian, Spain');
INSERT INTO "photos" ("path", "description") VALUES('images/IMG_1315.jpeg', 'Lake Superior near IronWood, Michigan');
INSERT INTO "photos" ("path", "description") VALUES('images/IMG_2102.jpeg', 'Idiot smiling at Gulfoss Iceland');
INSERT INTO "photos" ("path", "description") VALUES('images/IMG_2330.jpeg', 'Floating pieces of galcial ice in lagoon Iceland');
INSERT INTO "photos" ("path", "description") VALUES('images/IMG_2843.jpeg', 'Pastoral life in eastern Iceland');
INSERT INTO "photos" ("path", "description") VALUES('images/IMG_22372.jpeg', 'Vik, Iceland 3:30pm');