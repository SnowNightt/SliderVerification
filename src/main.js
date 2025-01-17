import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'



let app = createApp(App)
app.use(ElementPlus)
app.directive('emm',{
    mounted(el){
        el.focus()
    }
})

app.mount('#app')
