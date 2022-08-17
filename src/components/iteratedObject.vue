<template>
	<span>
		<div ref="htmlElem"></div>
		<div>{{ currentState }}</div>
	</span>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useMyState } from "../State"
import myClass from "./myLib"
const props = defineProps({
	itIndex: Number,
})
const myState = useMyState()
const htmlElem = ref(null)
const currentState = ref(0)
let classInstance
onMounted(function () {
	classInstance = new myClass(myState.objectList[props.itIndex].name)
	myState.changingVariable += classInstance.displayValue(htmlElem.value)

	myState.$subscribe((mutations, state) => {
		if (mutations.events.key == "changingVariable") currentState.value++
	})
})
</script>
