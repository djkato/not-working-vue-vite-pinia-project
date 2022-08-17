<template>
	<ul>
		<li v-for="(item, index) in myState.objectList" :key="item.name">
			<iteratedObject :itIndex="index"></iteratedObject>
		</li>
	</ul>
</template>
<script setup>
import { useMyState } from "./State"
import iteratedObject from "./components/iteratedObject.vue"
const myState = useMyState()
</script>
