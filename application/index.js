const app = Vue.createApp({
	data() {
		return {		
			item: { name: "test" },
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
		
		addItem() {
			if (this.item.name.trim()) {
				fetch("/api/items", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: this.item
				})
					.then((res) => {
						this.items.push(this.item);
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
						let index = this.items.find(x => x.id === id);
						this.items.splice(index, 1);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
	}
}).mount("body");
