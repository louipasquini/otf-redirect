CREATE DATABASE mydb;
USE mydb;

CREATE TABLE links (
    id integer PRIMARY KEY AUTO_INCREMENT,
    acessos INT DEFAULT 0,
    linkOriginal TEXT NOT NULL,
    short VARCHAR(255),
    cliente VARCHAR(255),
    projeto TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT  INTO links (linkOriginal, short, cliente, projeto)
VALUES
('https://google.com','test-redirect','Google','Redirecionador'),
('https://facebook.com','test-short','Facebook','Redirecionador');