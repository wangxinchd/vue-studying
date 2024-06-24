import { computed, ref } from 'vue'


export default function useSum() {

    const sum = ref(0)
    const bigSum = computed(() => {
        return sum.value * 10
    })

    const add = () => {
        sum.value += 1
    }

    // 返回一个对象，包含了两个属性：sum 和 add
    return {
        sum,
        add,
        bigSum
    }
}