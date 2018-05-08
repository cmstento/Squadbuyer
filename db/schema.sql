DROP DATABASE IF EXISTS squadbuyer;

CREATE DATABASE squadbuyer;
USE squadbuyer;

/* Creates table for Users */
CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    zip INTEGER(10) NOT NULL
);

/* Creates table for Campaigns */
CREATE TABLE campaigns (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    details VARCHAR(255) NOT NULL,
    commits_needed INTEGER NOT NULL
);

/* Creates table to store association of Users and Campaigns */
CREATE TABLE CampaignsUsers (campaignId INTEGER, userId INTEGER);

/* Adding users */
INSERT INTO Users (name, type, email, zip)
VALUES ('swapnil', 'consumer', '987@mailinator.com', '12345'),
('joe', 'business', '986@mailinator.com', '34567'),
('shawna', 'consumer', '985@mailinator.com', '23456');

/* Adding Campaigns */
INSERT INTO Campaigns (name, details, commits_needed) 
VALUES ('black friday', 'blah blah', 10),
('cyber monday', 'blah blah blah', 20),
('summer sale', 'blah blah bleh bleh', 30);

/* Adding associations */
   INSERT INTO CampaignsUsers (campaignId, userId) VALUES (1,1);
   INSERT INTO CampaignsUsers (campaignId, userId) VALUES (2,2);