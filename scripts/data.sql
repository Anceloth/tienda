INSERT INTO orders (id, create_date ,status ,client ,shipping_address ,shipping_promise)
Values
('orden0001','2022-10-10 11:30:30','delivery', 'Anibal Guzman', 'cra 1 # 1-1', '2022-10-15 11:30:30' ),
('orden0002','2022-11-10 11:30:30','delivery', 'Erika Correa', 'cra 1 # 1-2', '2022-11-15 11:30:30' ),
('orden0003','2023-08-01 11:30:30','travel', 'Anibal Guzman', 'cra 1 # 1-1', '2022-08-30 11:30:30' ),
('orden0004','2023-08-01 11:30:30','travel', 'Erika Correa', 'cra 1 # 1-2', '2023-08-30 11:30:30' ),
('orden0005','2023-08-06 11:30:30','approved', 'Carlos Maestre', 'cra 3 # 3-3', '2023-08-30 11:30:30' ),
('orden0006','2023-08-06 11:30:30','approved', 'Bryan Marin', 'cra 86 # 53-41', '2023-08-30 11:30:30' ),
('orden0007','2023-08-06 11:30:30','cancel', 'Carlos Maestre', 'cra 1 # 1-2', '2023-08-30 11:30:30' ),
('orden0008','2023-08-06 11:30:30','cancel', 'Bryan Marin', 'cra 86 # 53-41', '2023-08-30 11:30:30' );


insert into items (id, sku,title, description, url, price, quantity )
values
	('Bixx1234','Bixx1234', 'Bicicleta', 'Bicicleta Marca GW', 'www.tiendamia.com/bicicleta', 250, 50),
	('Baxx4321','Baxx4321', 'Balon', 'Balon de Football', 'www.tiendamia.com/balon', 250, 50),
	('Guxx4321','Guxx4321', 'Guantes', 'Guantes de Baseball', 'www.tiendamia.com/guante', 250, 50),
	('Casxx7890','Casxx7890', 'Casco', 'Casco de bicicleta', 'www.tiendamia.com/casco', 250, 50),
	('Zaxx4321','Zaxx4321', 'Zapatillas', 'Zapatillas de Football', 'www.tiendamia.com/zapatillas', 250, 50),
	('Camxx4321','Camxx4321', 'Camisa', 'Camisa de Football', 'www.tiendamia.com/camisa', 250, 50),
	('Lyxx4321','Lyxx4321', 'Lycra ciclismo', 'Lycra Negra de ciclismo', 'www.tiendamia.com/lycra', 250, 50),
	('Maxx4321','Maxx4321', 'Mancuerna 10kg', 'Marcuerna de acero forrado en caucho negro', 'www.tiendamia.com/mancuerna10', 250, 50),
	('Banxx4321','Banxx4321', 'Banco pesas', 'Banco reclinable y ajustable para ejercicio', 'www.tiendamia.com/banco', 250, 50);
	
insert into items_order  (id_order, id_item, "idOrderId", "idItemId")
values 
	('orden0001', 'Baxx4321', 'orden0001', 'Baxx4321'),
	('orden0001', 'Camxx4321', 'orden0001', 'Camxx4321'),
	('orden0002', 'Bixx1234', 'orden0002', 'Bixx1234'),
	('orden0002', 'Casxx7890', 'orden0002', 'Casxx7890'),
	('orden0003', 'Baxx4321', 'orden0003', 'Baxx4321'),
	('orden0003', 'Maxx4321', 'orden0003', 'Maxx4321'),
	('orden0004', 'Zaxx4321', 'orden0004', 'Zaxx4321'),
	('orden0004', 'Baxx4321', 'orden0004', 'Baxx4321'),
	('orden0005', 'Casxx7890', 'orden0005', 'Casxx7890'),
	('orden0005', 'Baxx4321', 'orden0005', 'Baxx4321'),
	('orden0006', 'Bixx1234', 'orden0006', 'Bixx1234'),
	('orden0006', 'Lyxx4321', 'orden0006', 'Lyxx4321'),
	('orden0007', 'Banxx4321', 'orden0007', 'Banxx4321'),
	('orden0008', 'Baxx4321', 'orden0008', 'Baxx4321'),
	('orden0008', 'Camxx4321', 'orden0008', 'Camxx4321'),
	('orden0008', 'Zaxx4321', 'orden0008', 'Zaxx4321');
	
