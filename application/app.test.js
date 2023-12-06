const request = require("supertest"),
      express = require("express"),
      bodyParser = require('body-parser'),
      api = require("./backend/api");

const app = new express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/api/items', api.getItems);
app.post('/api/items', api.putItem);
app.delete('/api/items/:id', api.deleteItem);

test("Gets the list of items with a GET request to /api/items", async () => {
	const res = await request(app).get("/api/items");
	expect(res.body).toEqual([
		{
			name: "Super Mario Bros. + Duck Hunt"
		},
		{
			name: "Super Mario Bros. 2"
		},
		{
			name: "Tetris"
		}
	]);
});

test("Adds an item with a POST request to /api/items", async () => {
	const res = await request(app).post("/api/items", { name: "Adventure" });
	expect(res.statusCode).toBe(201);
});

test("Delete the new item with a DELETE request to /api/items/3", async () => {
	const res = await request(app).delete("/api/items/3");
	expect(res.statusCode).toBe(204);
});
