	create table Felhasznalo (
	Felhasz_id int identity (1,1) primary key,
	felhasz_nev varchar(30),
	Vezetek_nev varchar(50),
	Kereszt_nev varchar(50),
	email varchar(50),
	telefonszam varchar(50),
	jelszo varchar(50)
	);


	-- regisztráció
	create proc Regist(@Vezetek_nev varchar(30), @Kereszt_nev varchar(30), @email varchar(50), @telefonszam varchar(50), @jelszo varchar(50))
	as
	begin
	Insert into Felhasznalo(Vezetek_nev, Kereszt_nev, email, telefonszam, jelszo) values(@Vezetek_nev, @Kereszt_nev, @email, @telefonszam, @jelszo)
	end

	-- belépés
	create proc LoginUser(@email varchar(50), @jelszo varchar(50))
	as
	begin
		select * from Felhasznalo where  email = @email and jelszo = @jelszo;
	end
	drop proc LoginUser

create table Szamla (
Szamla_id int primary key,
Szamla_egyenleg money,
Penznem varchar(50),
szamlaszam varchar(25),
bazis_szamla varchar(25),
);

create table Felh_szamla (
ID int primary key,
Felhasz_id int foreign key references Felhasznalo(Felhasz_id),
Szamla_id int foreign key references Szamla(Szamla_id),
);


create table Kartya (
ID varchar(25) primary key, -- a kártyán levõ 16 szám
Szamla_id int foreign key references Szamla(Szamla_id),
tipus char(1),
Kartya_tul int foreign key references Felhasznalo(Felhasz_id)
);



create table Kategoria (
ID int primary key,
kat_nev varchar(50),
);

create table Tranzakcio (
ID int primary key,
Szamla_id int foreign key references Szamla(Szamla_id),
From_szamla_szam varchar(25),
To_szamla_szam varchar (25),
To_kartya_szam varchar(25) foreign key references Kartya(ID), 
kozlemeny varchar(50),
kat_id int foreign key references Kategoria(ID),
osszeg money,
valtasi_szam int --??
);

	
left join Felh_szamla on Felhasznalo.felhasz_id = Felh_szamla.felhasz_id
join Szamla on Szamla.Szamla_id = Felh_szamla.Szamla_id

drop table Felhasznalo
drop table Szamla

select * from Felhasznalo


