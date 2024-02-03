import Theme from 'vitepress/theme'
import VSlider from '../../../components/VSlider.vue';

export default {
    ...Theme,
    enhanceApp: ({ app }) => {
        app.component('VSlider', VSlider)
    }
}
