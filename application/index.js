new Vue({
	el: "#items",
	
	data: {
		item: { name: "" },
		items: []
	},
	
	ready: () => {
		this.fetchItems();
	},
	
	methods: {
		fetchItems: () => {
			let items = [];
			this.$http.get("/api/items")
				.success(() => {
					this.$set("items", items);
					console.log(items);
				})
				.error((err) => {
					conole.log(err);
				});
		},
		
		addItem: () => {
			if (this.item.name.trim()) {
				this.$http.post("/api/items", this.item)
					.success((res) => {
						this.items.push(this.item);
						console.log("Item added!");
					})
					.error((err) => {
						console.log(err);
					});
			}
		},
		
		deleteItem: (id) => {
			if (confirm("Are you sure you want to delete this item?")) {
				this.$http.delete("api/items/" + id)
					.success((res) => {
						console.log(res);
						let index = this.items.find(x => x.id === id);
						this.items.splice(index, 1);
					})
					.error((err) => {
						console.log(err);
					});
			}
		}
	},
});
