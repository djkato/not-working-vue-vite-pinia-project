import { defineStore } from "pinia"
export const useMyState = defineStore("myState", {
    state: () => {
        return {
            objectList: [
                { name: "name1" },
                { name: "name2" },
                { name: "name3" },
                { name: "name4" },
                { name: "name5" }
            ],
            changingVariable: 0,
        }
    },
})