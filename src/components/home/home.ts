import { Vue, Component } from 'vue-property-decorator';
import HomeStyle from './home.module.scss';
import HomeHtml from './home.html';
import Draggable from 'vuedraggable';

@Component({
  template: HomeHtml,
  style: HomeStyle,
  components: {
    Draggable
  }
})
export class HomeComponent extends Vue {
  activeIndex: string = '1';
  activeIndex2: string = '1';
  handleSelect(key: any, keyPath: any) {
    console.log(key, keyPath);
  }
}
