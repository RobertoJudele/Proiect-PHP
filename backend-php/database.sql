create table pacients (
   id        int not null primary key,
   name      varchar(50),
   birthdate date,
   diagnosis varchar(300),
   status    varchar(100)
);
create table personal (
   id             int not null primary key,
   name           varchar(50),
   role           varchar(50),
   specialization varchar(50),
   schedule       varchar(30)
);
create table appointments (
   id                int not null primary key,
   patient_id        int,
   doctor_id         int,
   dateofapoinment   date,
   timeofappointment varchar(30),
   foreign key ( patient_id )
      references pacients ( id ),
   foreign key ( doctor_id )
      references personal ( id )
);
create table rooms (
   id           int not null primary key,
   name         varchar(30),
   capacity     int,
   availability varchar(30)
);
create table medicine (
   id         int not null primary key,
   name       varchar(100),
   stock      int,
   patient_id int,
   foreign key ( patient_id )
      references patients ( id )
)