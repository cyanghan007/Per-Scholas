const lists = [
	{
		name: 'Jason',
		color: 'blue',
		list: [
			{
				item: 'Organic Pasture-Raised Large Eggs',
				brand: 'Vital Farms',
				units: '12 eggs',
				quantity: 1,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5f41b1cc5639966d5b72c285_00861745000027-glamor-frontpackageglamor-2020-08-05t17-43-25-iphone-x-quality-90-1-21-1-user-5984ad42a967f880524de2c4-sgpv-785744._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Organic Whole Milk Grassmilk',
				brand: 'Organic Valley',
				units: 'Half Gallon',
				quantity: 2,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/613f88e5e11bfde36015eb80_dld-0093966005851-glamor-front-2021-08-19t16-23-24-iphone-x-quality-90-1-25-4-user-5984ad42a967f880524de2c4-dvd3-922927-1631553764254._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Organic Raspberries',
				brand: "Driscoll's",
				units: '12oz',
				quantity: 2,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/624b87feb8dc174950f58c2a_0715756100156-glamor-front-2022-03-15t15-43-53-iphone-x-quality-90-1-29-0-user-5984ad42a967f880524de2c4-grm7-637152._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
		],
	},
	{
		name: 'Olivia',
		color: 'green',
		list: [
			{
				item: 'Banana',
				brand: 'Whole Foods',
				units: 'Bunch',
				quantity: 1,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/56da232c7c3b931100975d81._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Organic Large Hass Avocados',
				brand: 'Whole Foods',
				units: 'Fruits',
				quantity: 6,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/575f2594d59d0103e5ac59c2_produce_ogavocados.1._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Organic Broccoli',
				brand: 'Whole Foods',
				units: 'Bunch',
        image:'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/56e43eb9f14a1c1100659d08_365_-broccoli.1._TTD_._SR1200,1200_._QL100_.jpg',
				quantity: 2,
				isPurchased: false,
			},
			{
				item: 'Sonoma County Cabernet Sauvignon',
				brand: 'Decoy',
				units: '750ml',
				quantity: 1,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/626b324b36335e1897e08c68_0669576019269-glamor-front-2022-04-08t17-43-25-iphone-7-quality-90-1-29-0-user-5d7652c1db2c4b51d4c666ca-a9nv-242545._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
		],
	},
	{
		name: 'Mark',
		color: 'purple',
		list: [
			{
				item: 'Organic Harmless Coconut Water',
				brand: 'Harmless Harvest',
				units: '32 fl.oz',
				quantity: 2,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/613f8707e11bfde36015e0b2_dld-0859078002627-glamor-front-2021-08-18t17-39-24-iphone-x-quality-90-1-25-4-user-5984ad42a967f880524de2c4-95iy-975568-1631553287468._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Atlantic Salmon Fillet',
				brand: 'Whole Foods',
				units: 'Pieces',
				quantity: 2,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5f498641144b13f9b96ca4f8_2020-cen-ecommerce-seafood-atlanticsalmonfillet._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
		],
	},
	{
		name: 'Julia',
		color: 'orange',
		list: [
			{
				item: 'Organic Dried Sliced Mangoes',
				brand: '365 by Whole Foods',
				units: '8oz',
				quantity: 1,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/62143957f6ea6d3941e7f11f_0099482434373-glamor-front-2022-01-26t19-19-09-iphone-x-quality-90-1-26-2-user-6191b0023d41d147aed4bacb-6izx-700953._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Butter Croissants',
				brand: 'Whole Foods',
				units: '1 pack',
				quantity: 2,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/61fdcd2a3981d755b9184db7_0274757000006-glamor-front-2022-01-20t16-54-44-iphone-x-quality-90-1-26-2-user-5984ad42a967f880524de2c4-s2rq-989572._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
			{
				item: 'Organic Gingerade',
				brand: "GT's Synergy Kombucha",
				units: '48oz',
				quantity: 2,
				image:
					'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/620c7a99bef7c331930c3078_dld-0722430200484-glamor-front-2021-11-18t02-44-16-iphone-7-quality-90-1-25-4-user-5c4f16e4fc9c91accd101ce4-atyz-256002-1644984982798._TTD_._SR1200,1200_._QL100_.jpg',
				isPurchased: false,
			},
		],
	},
];
