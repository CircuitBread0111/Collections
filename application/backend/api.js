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

exports.getItems = (req, res) => {
	res.json(items);
};

exports.putItem = (req, res) => {
	if (req.body) {	
		items.push(req.body);
		res.status(201).send();
	} else {
		res.status(400).send("No item object was sent.");
	}
};

exports.deleteItem = (req, res) => {
	const { id } = req.params;
	items.splice(id, 1);
	res.status(204).send();
}
