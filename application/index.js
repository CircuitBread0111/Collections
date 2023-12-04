const app = Vue.createApp({
	data() {
		return {
			items: []
		}
	},
	
	mounted() {
		this.fetchItems();
	},
	
	methods: {
		fetchItems() {
			fetch("/api/items", {
				method: "GET",
				headers: { "Content-Type": "application/json"}
			})
				.then((res) => {
					res.json().then((items) => {
						this.items = items;
					});
				})
				.catch((err) => {
					console.log(err);
				});
		},
		
		addItem(item) {
			if (item.name.trim()) {
				fetch("/api/items", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(item)
				})
					.then((res) => {
						this.items.push(item);
						console.log("Item added!");
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		
		deleteItem(id) {
			if (confirm("Are you sure you want to delete this item?")) {
				fetch("api/items/" + id, {
					method: "DELETE"
				})
					.then((res) => {
						console.log(res);
						this.items.splice(id, 1);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		
		newItem() {
			let item = { name: prompt("Enter the name of your new item") };
			this.addItem(item);
		}
	}
}).mount("body");
