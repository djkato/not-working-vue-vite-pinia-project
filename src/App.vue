<template>
	<div class="wrapper">
		<span>
			<p>Using Pinia Subscription:</p>
			<ul class="child" v-for="(item, index) in myState.objectList" :key="item.name">
				<li>
					<IteratedObjectUsingSubscribe :itIndex="index"></IteratedObjectUsingSubscribe>
				</li>
			</ul>
		</span>
		<span>
			<p>Using Vue Watcher:</p>
			<ul class="child" v-for="(item, index) in myState.objectList" :key="item.name">
				<li>
					<IteratedObjectUsingWatch :itIndex="index"></IteratedObjectUsingWatch>
				</li>
			</ul>
		</span>
	</div>
</template>
<script setup>
import { useMyState } from "./State"
import { ref } from "vue"
import IteratedObjectUsingSubscribe from "./components/iteratedObjectUsingSubscribe.vue"
import IteratedObjectUsingWatch from "./components/iteratedObjectUsingWatch.vue"
const useWatcher = ref(true)
const myState = useMyState()
</script>
<style>
.wrapper {
	display: flex;
	flex-wrap: wrap;
}
.child {
	display: block;
	margin: 2vh 15vh;
}
</style>
