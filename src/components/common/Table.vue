<template>
	<table class="TAVTable table table-hover table-dark" width="100%">
		<thead>
			<tr>
				<th
					v-for="column in columns"
					:id="column.key"
					:key="column.key"
					draggable="true"
					@dragstart="dragStart"
					@dragleave="dragLeave"
					@drop="drop"
					@dragover="dragOver"
					@click="singleSorting"
					@dblclick="multipleSorting"
				>
					{{ column.title }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="data in dataSource" :key="data.key">
				<td v-for="column in columns" :key="column.key">
					{{ textController(data[column.key]) }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import moment from "moment";
export default {
	name: "Table",
	props: {
		dataSource: {
			type: Array,
			required: true,
		},
		columns: {
			type: Array,
			required: true,
		},
		dragStart: {
			type: Function,
			required: true,
		},
		dragLeave: {
			type: Function,
			required: true,
		},
		drop: {
			type: Function,
			required: true,
		},
		dragOver: {
			type: Function,
			required: true,
		},
		singleSorting: {
			type: Function,
			required: true,
		},
		multipleSorting: {
			type: Function,
			required: true,
		},
	},
	methods: {
		textController: (text) => {
			// Date controller
			if (text instanceof Date) {
				return moment(text).format("DD-MM-YYYY");
			}
			return text;
		},
	},
};
</script>
