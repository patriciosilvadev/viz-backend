import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../../../environments/environment';

@Component({
  selector: 'app-comparative-by-company',
  templateUrl: './comparative-by-company.component.html',
  styleUrls: ['./comparative-by-company.component.scss']
})
export class ComparativeByCompanyComponent implements OnInit {

  public columnClasseConfig: object;

  public tableClass: Array<string> = [];

  callbackTable: Function;

  public dataUrl = `${environment.API}/dashboards/comparative/comparative-by-company`;

  constructor() {
  }

  ngOnInit(): void {

    this.callbackTable = this.callbackTableTotal.bind(this);

    this.columnClasseConfig = {
      'Contratos': 'bg-viz-gray',
      'Agentes': 'bg-viz-dark',
      Tentativas: 'bg-viz-red',
      'Tent/ Agnt': 'bg-viz-red-900',
      '%Hit rate': 'bg-viz-caramel-dark',
      Atendidas: 'bg-viz-caramel',
      CPC: 'bg-viz-ocean',
      'CPC/ Agnt': 'bg-viz-ocean-900',
      '%CPC/ Atend': 'bg-viz-ocean-900',
      'CPCA': 'bg-viz-green-100',
      'CPCA /Agnt': 'bg-viz-green',
      '%CPCA/ Atend': 'bg-viz-green',
      'Negociações': 'bg-viz-blue',
      'Negc /Agnt': 'bg-viz-marine',
      '%Negc/ Tent': 'bg-viz-marine',
      '%Negc/ Atend': 'bg-viz-marine',
      '%Negc /CPC': 'bg-viz-marine',
      '%Negc /CPCA': 'bg-viz-marine',
      '%Improd': 'bg-viz-orange',
      '%Linha muda': 'bg-viz-orange-900',
      '%Voz Máq': 'bg-viz-orange-900',
      'Spin rate': ''
    };
  }

  callbackTableTotal(valueOfColumm): Array<string> {
    if (
      typeof valueOfColumm !== 'string'
      && valueOfColumm !== 'TOTAL'
    ) {
      return [];
    }

    return ['text-total'];
  }

}
