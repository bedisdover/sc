CREATE TABLE news (
    id int(11) NOT NULL,
    title varchar(128) NOT NULL,
    slug varchar(128) NOT NULL,
    text text NOT NULL,
    PRIMARY KEY (id)
);