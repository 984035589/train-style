import { Vue, Component } from 'vue-property-decorator';
import style from './card.module.scss';
import html from './card.html';

@Component({
  template: html,
  style: style
})
export class CardComponent extends Vue {
  cardImage: any = require('../../assets/imgs/card.jpg');
}
