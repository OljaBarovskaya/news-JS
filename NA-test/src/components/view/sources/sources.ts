import './sources.css';
import { sourceObjData } from '../../../types';

class Sources {
  public draw(data: sourceObjData[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: sourceObjData): void => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
      if (sourceClone != null) {
        const sourceItemName: Element | null = sourceClone.querySelector('.source__item-name');
        if (sourceItemName != null) {
          sourceItemName.textContent = item.name;
        }
        const sourceItem: Element | null = sourceClone.querySelector('.source__item');
        if (sourceItem != null) {
          sourceItem.setAttribute('data-source-id', item.id);
        }
      }

      fragment.append(sourceClone);
    });

    const sources: Element | null = document.querySelector('.sources');
    if (sources != null) {
      sources.append(fragment);
    }
  }
}

export default Sources;
