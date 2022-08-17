<template>
	<input type="button" v-model="useWatcher" @click="useWatcher = !useWatcher" />using: {{ useWatcher ? "Watcher" : "Subscription" }}
	<ul>
		<li v-for="(item, index) in myState.objectList" :key="item.name">
			<IteratedObjectUsingWatch v-if="useWatcher" :itIndex="index"></IteratedObjectUsingWatch>
			<IteratedObjectUsingSubscribe v-if="!useWatcher" :itIndex="index"></IteratedObjectUsingSubscribe>
		</li>
	</ul>
</template>
<script setup>
import { useMyState } from "./State"
import { ref } from "vue"
import IteratedObjectUsingSubscribe from "./components/iteratedObjectUsingSubscribe.vue"
import IteratedObjectUsingWatch from "./components/iteratedObjectUsingWatch.vue"
const useWatcher = ref(true)
const myState = useMyState()
</script>
