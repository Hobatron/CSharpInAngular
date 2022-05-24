**API**
Endpoints:
  get: get's all Drivers
  put: Updates/Creates new drivers

**DB**
Schema:

CREATE TABLE Drivers (
    id int NOT NULL AUTO_INCREMENT,
    Name varchar(255),
    Unit varchar(5),
    Behavior varchar(26),
    PRIMARY KEY (id)
);
