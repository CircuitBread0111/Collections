let items = [
	{
		name: "Super Mario Bros. + Duck Hunt"
	},
	{
		name: "Super Mario Bros. 2"
	},
	{
		name: "Tetris"
	}
];

exports.items = (req, res) => {
	res.json(items);
};

exports.item = (req, res) => {
	res.json(items[req.param.itemId]);
};
