let items = [
	{
		id: 1,
		name: "Super Mario Bros. + Duck Hunt"
	},
	{
		id: 2,
		name: "Super Mario Bros. 2"
	},
	{
		id: 3,
		name: "Tetris"
	}
];

exports.items = (req, res) => {
  res.json(items);
};

exports.item = (req, res) => {
  res.json(items[req.param.itemId]);
};
