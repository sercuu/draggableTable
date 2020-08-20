<template>
	<div class="home">
		<h1>Draggable and sortable table.</h1>
		<p>You can change column positions</p>
		<p><strong>One Click </strong>will sort by column name.</p>
		<p>
			<strong>Double Click</strong> will sort by first clicked column and second clicked
			column
		</p>
		<Table
			:dataSource="dataSource"
			:columns="columns"
			:dragStart="dragStart"
			:dragLeave="dragLeave"
			:drop="drop"
			:dragOver="dragOver"
			:singleSorting="singleSorting"
			:multipleSorting="multipleSorting"
		></Table>
	</div>
</template>

<script>
import Table from "@/components/common/Table";
import SetArrayPosition from "@/helper/setArrayPosition.js";
import { DATASOURCE, COLUMNS } from "@/Mockdata.js";

export default {
	name: "Home",
	components: {
		Table,
	},
	data: () => {
		return {
			dataSource: null,
			columns: null,
			timeout: null,
		};
	},
	created() {
		this.immutableData();
	},
	methods: {
		immutableData() {
			//  No more side effects
			const newDataSource = [...DATASOURCE];
			const newColumns = [...COLUMNS];
			this.dataSource = newDataSource;
			this.columns = newColumns;
		},
		dragOver(e) {
			e.preventDefault();
		},
		dragStart(e) {
			e.target.style.opacity = "0.4";
			e.dataTransfer.setData("text", e.target.id);
		},
		dragLeave(e) {
			e.target.style.opacity = "1";
		},
		drop(e) {
			e.preventDefault();
			const draggedItem = e.dataTransfer.getData("text");
			const droppedItem = e.target.id;

			// Same columns Controller
			if (draggedItem !== droppedItem) {
				const draggedItemIndex = this.columns.findIndex((e) => e.key === draggedItem);
				const dropedItemIndex = this.columns.findIndex((e) => e.key === droppedItem);
				const swapedArr = SetArrayPosition(this.columns, draggedItemIndex, dropedItemIndex);
				this.columns = [...swapedArr];
			}
		},
		singleSorting(event) {
			if (event.detail == 1) {
				const click = () => {
					if (event.detail === 1) {
						// sort by selected column key
						const id = event.target.id;
						const sortedArr = this.dataSource.sort((a, b) => (a[id] > b[id] ? 1 : -1));
						this.dataSource = sortedArr;
					}
				};
				// if double click controller
				this.timeout = window.setTimeout(click, 200);
			}
		},
		multipleSorting(event) {
			const id = event.target.id;
			// this will delete single click event
			window.clearTimeout(this.timeout);

			// Grouped By Key
			let groupedArr = this.dataSource.reduce((r, a) => {
				r[a.brand] = [...(r[a.brand] || []), a];

				return r;
			}, {});

			const KEYS = Object.keys(groupedArr);

			// Sort array object by Key
			let Arr = [];
			KEYS.forEach((key) => {
				const sortedArrByKey = groupedArr[key].sort((a, b) => (a[id] > b[id] ? 1 : -1));
				Arr.push(...sortedArrByKey);
			});
			this.dataSource = Arr;
		},
	},
};
</script>
