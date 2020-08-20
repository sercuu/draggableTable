export const DATASOURCE = [
	{
		key: "1",
		brand: "Thy",
		date: new Date("2020", "01", "24"),
		gate: "101",
		boarding: "06:30",
	},
	{
		key: "2",
		brand: "Thy",
		date: new Date("2020", "02", "24"),
		gate: "100",
		boarding: "05:00",
	},
	{
		key: "3",
		brand: "Pegasus",
		date: new Date("2020", "03", "18"),
		gate: "102",
		boarding: "08:30",
	},
	{
		key: "4",
		brand: "Pegasus",
		date: new Date("2020", "04", "12"),
		gate: "103",
		boarding: "16:40",
	},
	{
		key: "5",
		brand: "Thy",
		date: new Date("2020", "06", "24"),
		gate: "104",
		boarding: "16:45",
	},
	{
		key: "6",
		brand: "Atlas Global",
		date: new Date("2020", "06", "12"),
		gate: "109",
		boarding: "12:00",
	},
];

export const COLUMNS = [
	{
		title: "brand",
		dataIndex: "brand",
		key: "brand",

		// sorter: (a, b) => a.brand - b.brand,
	},
	{
		title: "date",
		dataIndex: "date",
		key: "date",
		// sorter: (a, b) => a.date - b.date,
	},
	{
		title: "gate",
		dataIndex: "gate",
		key: "gate",
	},
	{
		title: "boarding",
		dataIndex: "boarding",
		key: "boarding",
	},
];
