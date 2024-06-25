import { reactive } from 'vue'
import axios from 'axios'


export default function() {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/dachshund/kaninchen-dachshund-953699_640.jpg'
    ])

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            console.log(result.data.message)
            dogList.push(result.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    // 向外部提供东西【数据和方法】
    return {
        dogList,
        getDog
    }
}